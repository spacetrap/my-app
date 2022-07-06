import User from './User';

import data from './mockdata';

import './styles.css';

const Users = () => (
    <ul className="list">
        {data.map(post => <User key={post.id} {...post}/>)}
    </ul>
)

export default Users;