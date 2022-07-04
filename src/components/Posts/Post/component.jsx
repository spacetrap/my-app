import './styles.css';

const Post = ({ id, name, username, website }) => (
    <li className="item">
        <div className="id">{id}</div>
        <div className="title">{name}</div>
        <div className="body">{username}</div>
        <div className="website">{website}</div>
    </li>
)

export default Post;