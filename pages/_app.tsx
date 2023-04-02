import { AppProps } from 'next/app';
import { FC } from 'react';
import { MantineProvider } from '@mantine/core';
import 'styles/tailwind.css';
import Head from 'next/head';

const App: FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <MantineProvider>
                <main className="w-full min-h-screen overflow-x-hidden">
                    <Component {...pageProps} />
                </main>
            </MantineProvider>
        </>
    );
};

export default App;
