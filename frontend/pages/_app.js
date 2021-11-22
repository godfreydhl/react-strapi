import React from "react";
import App from "next/app";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import withData from "../lib/apollo";


class MyApp extends App{
    render(){
        const{Component, pageProps} = this.props;
        return(
            <>
                <Head>
                    <link rel = "stylesheet"
                    href= 'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js'
                    //href = "https:/maxcdn.bootstrapcdn.com/bootsrap/4.0.0/css/bootstrap.min.css"
                    integrity = "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJ1SAwiGgFAW/dAiS6JXm"
                    crossOrigin ="anonymous"
                    />

                </Head>

                <Layout>
                    <Component {...pageProps}/>
                </Layout>
                
            </>

        );
    }
}

export default withData(MyApp);