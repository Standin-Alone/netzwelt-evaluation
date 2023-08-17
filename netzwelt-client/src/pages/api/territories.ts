import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse,
    next: any) {
 

        
    if (req.method === 'GET') {
        try{

     
      let getTerritories = await axios.get('https://netzwelt-devtest.azurewebsites.net/Territories/All');
     
      
      if(getTerritories.status == 200){
   
        if(getTerritories.data){
          
          let territories = getTerritories.data.data;
              
          let cleanTerritories = territories.filter((item:any)=>item.parent == null).sort((a:any, b:any) => a.name.localeCompare(b.name));;

          cleanTerritories.map((item:any)=>{
            item.children = territories.filter((childItem:any)=>childItem.parent == item.id).sort((a:any, b:any) => a.name.localeCompare(b.name));
            return item;
          });
          

          return res.status(200).send(cleanTerritories);
        }else{
            return res.status(200).send({message:"Something went wrong."});
        }          
      }else{  
        return res.status(200).send({message:"Something went wrong."});
      }

    }catch(error:any){        
        console.warn(error);
        return res.status(200).send(error?.response?.data);
    }
    }

  }