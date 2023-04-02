import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

class _Document extends Document {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html>
                <Head />
                <body className="flex flex-col h-full bg-zinc-50 dark:bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default _Document;
