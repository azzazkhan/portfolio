import type { NextPage } from 'next';
import { DefaultLayout } from 'layouts';
import { Intro } from 'components/homepage';

const Home: NextPage = () => {
    return (
        <DefaultLayout>
            <Intro />
        </DefaultLayout>
    );
};

export default Home;
