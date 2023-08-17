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

  const renderTerritories = ()=>{

    return territories.filter((item: any,index:any) =>index < 5).map(function(item: any,index:any){return(
      <ul className="space-y-4  list-disc list-inside dark:text-gray-400" key={index}>
        <li>
          <button
              type="button"
              data-te-collapse-init="true"
              data-te-ripple-init
              data-te-ripple-color="light"
              data-te-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}    
              className="text-orange-500 hover:underline"            
         > {item.name} {item.children.length > 0 ? `(${item.children.length})` : ''} </button>
          <ul  className="pl-5 mt-2 space-y-1 list-decimal list-inside !visible hidden" id={`collapse${index}`} data-te-collapse-item>
            {item.children.map((itemChild: any,indexChild:any) => (
              <li key={indexChild}>
                
                <button
                  type="button"
                  data-te-collapse-init="true"
                  data-te-ripple-init
                  data-te-ripple-color="red"
                  data-te-target={`#subCollapse${itemChild.name.substring(0,3)}${indexChild}`}
                  aria-expanded="false"
                  aria-controls={`subCollapse${itemChild.name.substring(0,3)}${indexChild}`}
                  className={`${itemChild.children.length > 0 ? 'underline':''} text-gray-500 hover:underline`}
                > {itemChild.name} {itemChild.children.length > 0 ? `(${itemChild.children.length})` : ''}</button>

                <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside !visible hidden" id={`subCollapse${itemChild.name.substring(0,3)}${indexChild}`} data-te-collapse-item>
                  {itemChild.children.map((itemSubChild: any,indexSubChild:any) => (
                    <li key={indexSubChild}>{itemSubChild.name}                    
                    <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside !visible hidden" id={`subCollapse${itemSubChild.name.substring(0,3)}${indexChild}`} data-te-collapse-item>
                    {itemSubChild.children.map((itemFinalSubChild: any,indexFinalSubChild:any) => (
                        <li key={indexFinalSubChild}>{itemFinalSubChild.name}</li>
                      ))}
                    </ul>                    
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    )})

  }

  

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="font-bold text-1xl ">Territories</h1>
      <small>Here are the list of territories</small>
      {renderTerritories()}

      <button className="hide"  data-te-collapse-init></button>
      
    </div>
  );
};

export default Home;
