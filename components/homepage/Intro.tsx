import { FC, SVGProps } from 'react';
import TwitterIcon from 'assets/icons/twitter.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import GithubIcon from 'assets/icons/github.svg';
import LinkedInIcon from 'assets/icons/linkedin.svg';

interface SocialLink {
    url?: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    label: string;
}

const Intro: FC = () => {
    const socialLinks: SocialLink[] = [
        { icon: TwitterIcon, label: 'Follow on Twitter', url: process.env.NEXT_PUBLIC_TWITTER_URL },
        {
            icon: InstagramIcon,
            label: 'Follow on Instagram',
            url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
        },
        { icon: GithubIcon, label: 'Follow on GitHub', url: process.env.NEXT_PUBLIC_GITHUB_URL },
        {
            icon: LinkedInIcon,
            label: 'Follow on LinkedIn',
            url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
        },
    ];

    return (
        <div className="sm:px-8 mt-9">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="max-w-2xl mx-auto lg:max-w-5xl">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                {process.env.NEXT_PUBLIC_INTRO_TITLE}
                            </h1>
                            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                                {process.env.NEXT_PUBLIC_INTRO_DESCRIPTION}
                            </p>
                            <div className="flex gap-6 mt-6">
                                {socialLinks.map(({ icon: Icon, label, url }, idx) => {
                                    if (!url) return null;

                                    return (
                                        <a
                                            href={url}
                                            className="p-1 -m-1 group"
                                            title={label}
                                            rel="noreferrer"
                                            target="_blank"
                                            key={idx}
                                        >
                                            <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
