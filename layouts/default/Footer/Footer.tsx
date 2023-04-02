import { FC } from 'react';
import Copyrights from './Copyrights';
import Links from './Links';

const Footer: FC = () => {
    return (
        <footer className="mt-32">
            <div className="sm:px-8">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="max-w-2xl mx-auto lg:max-w-5xl">
                                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                    <Links />
                                    <Copyrights />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
