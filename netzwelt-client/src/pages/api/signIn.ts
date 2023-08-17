import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest,
    res: NextApiResponse,
    next: any) {
 

        
    if (req.method === 'POST') {
        try{
       let values = req.body;        
       let header = {
            headers:{
                "Content-Type":"application/json",
                "accept":"text/plain"
            }
       }

     
      let getSignIn = await axios.post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn',values,header);
     
      
      if(getSignIn.status == 200){
   
        if(getSignIn.data){
      
          return res.status(200).send(getSignIn.data);
        }else{
            return res.status(200).send({message:"Something went wrong."});
        }          
      }else{  
        return res.status(200).send({message:"Something went wrong."});
      }

    }catch(error:any){        
        return res.status(200).send(error.response.data);
    }
    }

  }