
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useRouter } from "next/router";
import  { useContext } from "react"
import { Context } from "@/components/context";

export default function Login() {

  const initialValues = {
    username:'',
    password:''  
  }

  const [context,setContext] = useContext<any>(Context);


  const validationSchema = Yup.object({
    username: Yup.string().required('Please enter your username.'),
    password: Yup.string().required('Please enter your password.')
  });

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {     
  
      let getSignIn = await axios.post('/api/signIn',values);
    
      if(getSignIn.status == 200){
        if(getSignIn.data){
          if(getSignIn.data.message){            
            alert(getSignIn.data.message)
          }else{
            setContext((prevContext:any)=>({...prevContext,userInfo:getSignIn.data}));
            localStorage.setItem('userInfo',getSignIn.data);                        
            alert('Successfully logged in.')            
            router.push('/home');
          }
        }else{
          alert('Invalid username or password.');
        }          
      }else{  
        alert('Something went wrong.')
      }
    },
  })

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#" onSubmit={formik.handleSubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your username
          </label>
          <input
            type="text"
            name="username"          
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="username..."   
            onChange={formik.handleChange}      
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
                  <p className=' text-rose-600'>{formik.errors.username}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"            
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"          
            onChange={formik.handleChange}      
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
              <p className=' text-rose-600'>{formik.errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"       
        >
          Login to your account
        </button>
      </form>
    </div>
  );
}
