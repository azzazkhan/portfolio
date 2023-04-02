import type { FC } from 'react';
import Link from 'next/link';
import RightArrow from 'assets/icons/arrow-right.svg';
import moment from 'moment';

const Post: FC = () => {
    const date = moment();

    return (
        <article className="group relative flex flex-col items-start">
            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                <Link href="/articles/lorem-ipsum">
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">Lorem ipsum dolor sit amet consectetur.</span>
                </Link>
            </h2>
            <time
                className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                dateTime={date.format('YYYY-MM-DD')}
            >
                <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                </span>
                {date.format('MMMM D, YYYY')}
            </time>

            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, incidunt.
                Blanditiis, excepturi? Quaerat natus necessitatibus tempora, iure temporibus maxime
                eaque earum quas quibusdam minus harum at, aspernatur tempore, quasi deserunt?
            </p>

            <div
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                aria-hidden="true"
            >
                Read Article
                <RightArrow className="ml-1 h-4 w-4 stroke-current" />
            </div>
        </article>
    );
};

export default Post;
