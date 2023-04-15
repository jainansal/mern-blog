import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function Post({ _id, title, image, summary, createdAt, author }) {
    const formattedDate = format(new Date(createdAt), 'MMM d, yyyy | HH:MM');

    return (
        <div className="post">
            <div className="image">
                <Link to={'/post/'+_id}>
                    <img src={'http://localhost:4000/' + image} />
                </Link>
            </div>
            <div className="texts">
                <Link to={'/post/'+_id}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a href="" className="author">{author.username}</a>
                    <time>{formattedDate}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    );
}

export default Post;