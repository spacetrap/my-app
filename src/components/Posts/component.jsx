import Post from './Post';

import data from './mockdata';

import './styles.css';

const Posts = () => (
    <ul className="list">
        {data.map(post => <Post key={post.id} {...post}/>)}
    </ul>
)

export default Posts;