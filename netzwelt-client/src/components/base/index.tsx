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
        <div className="h-screen bg-gradient-to-b from-orange-100 to-orange-400 flex justify-center">
            {children}
        </div>
    )
}

export default Base;

