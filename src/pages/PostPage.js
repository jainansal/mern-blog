import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        fetch(`http://localhost:4000/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, []);

    if(!postInfo) return ' ';

    return (
        <div className="post-page">
            <div className="image">
                
            </div>
        </div>
    )
};