/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import Image from 'next/image';
import { Position as Props } from './positions';
import moment from 'moment';

const Position: FC<Props> = ({ company, from, role, till, icon }) => {
    // Convert 02-2000 to 02-01-2000
    const parseDate = (date: string) => {
        const slices = date.split('-');

        if (slices.length <= 1 || slices.length === 3) return date;

        return `${slices[0]}-01-${slices[1]}`;
    };

    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-hidden">
                {icon && <Image src={icon} height={42} width={42} alt="Freelancer.com" />}
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role}</dd>
                <dt className="sr-only">Date</dt>
                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 space-x-1">
                    <time
                        dateTime={
                            typeof from === 'number'
                                ? from.toString()
                                : moment(parseDate(from)).format('YYYY-MM-DD').toString()
                        }
                    >
                        {typeof from === 'number'
                            ? from.toString()
                            : moment(parseDate(from)).format('MMM YYYY').toString()}
                    </time>
                    <span aria-hidden="true">&mdash;</span>
                    <time
                        dateTime={
                            typeof till === 'undefined'
                                ? new Date().getFullYear().toString()
                                : typeof till === 'number'
                                ? till.toString()
                                : moment(parseDate(till)).format('YYYY-MM-DD').toString()
                        }
                    >
                        {typeof till === 'undefined'
                            ? new Date().getFullYear().toString()
                            : typeof till === 'number'
                            ? till.toString()
                            : moment(parseDate(till)).format('MMM YYYY').toString()}
                    </time>
                </dd>
            </dl>
        </li>
    );
};

export default Position;
