import type { FC, MouseEventHandler } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar from 'assets/images/avatar.jpg';
import SunIcon from 'assets/icons/sun.svg';
import MoonIcon from 'assets/icons/moon.svg';
import { useHeadroom, useLocalStorage } from '@mantine/hooks';
import { rem } from '@mantine/core';

interface LinkItem {
    url: string;
    label: string;
}

const Header: FC = () => {
    const links: LinkItem[] = [
        { url: '/about', label: 'About' },
        { url: '/articles', label: 'Articles' },
        { url: '/projects', label: 'Projects' },
        { url: '/uses', label: 'Uses' },
    ];

    const [, setColorScheme] = useLocalStorage<'dark' | 'light'>({
        key: 'color-scheme',
        defaultValue: 'light',
    });

    const pinned = useHeadroom({ fixedAt: 200 });

    const toggleColorScheme: MouseEventHandler<HTMLButtonElement> = (event) => {
        const documentElement = document.getElementsByTagName('html')[0];

        event.preventDefault();
        setColorScheme((current) => {
            if (current === 'dark') documentElement.classList.remove('dark');
            else documentElement.classList.add('dark');

            return current === 'dark' ? 'light' : 'dark';
        });
    };

    return (
        <header
            className="pointer-events-none fixed top-0 z-10 flex flex-col w-full max-w-7xl lg:px-8 transition-transform duration-300"
            style={{
                transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            }}
        >
            <div className="h-16 pt-6">
                <div className="sm:px-8 w-full">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="relative flex gap-4">
                                    <div className="flex flex-1">
                                        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                                            <Link href="/" className="pointer-events-auto">
                                                <Image
                                                    src={avatar}
                                                    className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                                    height={512}
                                                    width={512}
                                                    alt={process.env.APP_NAME || 'Me'}
                                                />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 justify-end md:justify-center">
                                        <nav className="pointer-events-auto hidden md:block">
                                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                                {links.map(({ label, url }, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <Link
                                                                href={url}
                                                                className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                                                            >
                                                                {label}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="flex justify-end md:flex-1">
                                        <div className="pointer-events-auto">
                                            <button
                                                type="button"
                                                aria-label="Toggle dark mode"
                                                className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                                                onClick={toggleColorScheme}
                                            >
                                                <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
                                                <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
