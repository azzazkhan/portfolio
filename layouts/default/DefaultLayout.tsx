import { FC, Fragment, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
    children: ReactNode;
}

const Home: FC<Props> = ({ children }) => {
    return (
        <Fragment>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
                </div>
            </div>
            <div className="relative">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Home;
