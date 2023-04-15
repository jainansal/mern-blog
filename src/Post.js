import {format} from 'date-fns';

function Post({title, image, summary, createdAt}) {
    const formattedDate = format(new Date(createdAt), 'MMM d, yyyy | HH:MM');

    return (
        <div className="post">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    <a href="" className="author">Ansal Jain</a>
                    <time>{formattedDate}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    );
}

export default Post;