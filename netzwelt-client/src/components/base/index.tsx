import {useEffect,useState} from 'react';
import { useRouter } from 'next/router';
const  Base = ({children}:any) => {
   
    const router = useRouter()

    useEffect(()=>{
        let getUserInfo = sessionStorage.getItem('userInfo');
             
        if(getUserInfo){
            router.push('/home');
        }else{
            router.push('/');
        }
    },[]);


    return(
        <div className="flex justify-center  mt-40">
            {children}
        </div>
    )
}

export default Base;

