function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div className="texts">
                <h2>Images may be subject to copyright</h2>
                <p className="info">
                    <a href="" className="author">Ansal Jain</a>
                    <time>2023-01-06 16:45</time>
                </p>
                <p className='summary'>Browse premium related images on iStock | Save 20% with code UNSPLASH20</p>
            </div>
        </div>
    );
}

export default Post;