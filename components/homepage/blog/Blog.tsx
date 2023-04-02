import { FC } from 'react';
import Post from './Post';

const Blog: FC = () => {
    return (
        <div className="flex flex-col gap-16">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Blog;
