import Header from '@/components/header'
import type { AppProps } from 'next/app'
import "../../public/globals.css";
import Base from '@/components/base';
import { Context } from '@/components/context';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [ context, setContext ] = useState(pageProps);

    return(
    <>
        <Context.Provider value={[context,setContext]}>
            <Header/>
            <Base>
                <Component {...pageProps} />     
            </Base>        
        </Context.Provider>
    </>
    )
}