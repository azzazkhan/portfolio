import { FC } from 'react';
import Newsletter from './Newsletter';
import Work from './work';

const Sidebar: FC = () => {
    return (
        <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Work />
        </div>
    );
};

export default Sidebar;
