import { FC } from 'react';
import Link from 'next/link';

interface LinkItem {
    url: string;
    label: string;
}

const Links: FC = () => {
    const links: LinkItem[] = [
        { url: '/about', label: 'About' },
        { url: '/projects', label: 'Project' },
        { url: '/uses', label: 'Uses' },
    ];

    return (
        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {links.map(({ url, label }, idx) => {
                return (
                    <Link
                        href={url}
                        className="transition hover:text-teal-500 dark:hover:text-teal-400"
                        key={idx}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
};

export default Links;
