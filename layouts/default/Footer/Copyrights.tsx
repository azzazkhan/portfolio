import { FC } from 'react';

const Copyrights: FC = () => {
    return (
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}. All rights
            reserved.
        </p>
    );
};

export default Copyrights;
