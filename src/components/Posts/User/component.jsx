import './styles.css';

const User = ({ id, name, username, website }) => (
    <li className="item">
        <div className="id">{id}</div>
        <div className="title">{name}</div>
        <div className="body">{username}</div>
        <div className="website">{website}</div>
    </li>
)

export default User;