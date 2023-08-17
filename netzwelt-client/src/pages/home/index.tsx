import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [territories, setTerritories] = useState<any>([]);
  const getAllTerritories = async () => {
    let getTerritories = await axios.get("/api/territories");
    if (getTerritories.status == 200) {
      setTerritories(getTerritories.data);
    } else {
      alert("Something went wrong.");
    }
  };

  useEffect(() => {
    getAllTerritories();
  }, []);

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="font-bold text-1xl ">Territories</h1>
      <small>Here are the list of territories</small>
      {territories.map((item: any) => (
        <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
            {item.name}
            <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
              {item.children.map((itemChild: any) => (
                <li>{itemChild.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
