import {useEffect,useContext} from 'react';
import { useRouter } from 'next/router';
import { Context } from '../context';

const  Base = ({children}:any) => {
    const [context,setContext] = useContext<any>(Context);
    const router = useRouter()

    useEffect(()=>{
        let getUserInfo = localStorage.getItem('userInfo');
       
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

