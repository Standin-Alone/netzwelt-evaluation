import Header from '@/components/header'
import type { AppProps } from 'next/app'
import "../../public/globals.css";
import Base from '@/components/base';
export default function MyApp({ Component, pageProps }: AppProps) {
    return(
    <>
        <Header/>
        <Base>
            <Component {...pageProps} />     
        </Base>        
    </>
    )
}