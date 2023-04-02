import type { NextPage } from 'next';
import { DefaultLayout } from 'layouts';
import { Intro, Gallery } from 'components/homepage';
import ContentWrapper from 'components/homepage/ContentWrapper';

const Home: NextPage = () => {
    return (
        <DefaultLayout>
            <Intro />
            <Gallery />
            <ContentWrapper />
        </DefaultLayout>
    );
};

export default Home;
