import { StaticImageData } from 'next/image';
import freelancerLogo from 'assets/icons/freelancer.jpg';
import wise360Logo from 'assets/icons/wise360.jpg';
import psebLogo from 'assets/icons/pseb.jpg';
import antonxLogo from 'assets/icons/antonx.jpg';

export interface Position {
    icon?: string | StaticImageData;
    company: string;
    role: string;
    from: number | string;
    till?: number | string;
}

const positions: Position[] = [
    {
        icon: wise360Logo,
        company: 'Wise 360',
        role: 'Web Engineer and Cloud Architect',
        from: '07-2021',
        till: '02-2023',
    },
    {
        icon: antonxLogo,
        company: 'AntonX',
        role: 'Full Stack Developer',
        from: '08-2021',
        till: '01-2023',
    },
    {
        icon: psebLogo,
        company: 'Pakistan Software Export Board',
        role: 'Lab Engineer (MERN Stack)',
        from: '03-2022',
        till: '08-2022',
    },
    {
        icon: freelancerLogo,
        company: 'Freelancer.com',
        role: 'Freelance Web Developer',
        from: '01-2018',
        till: '12-2019',
    },
];

export default positions;
