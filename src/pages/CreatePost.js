import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

function CreatePost() {
    const [postTitle, setPostTitle] = useState('');
    const [postSummary, setPostSummary] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState('');

    async function createNewPost(ev) {
        ev.preventDefault();
        const data = new FormData;
        data.set('title', postTitle);
        data.set('summary', postSummary);
        data.set('image', postImage[0]);
        data.set('content', postContent);
        
        const response = await fetch('http://localhost:4000/new-post', {
            method: 'POST',
            body: data
        });
        // console.log(data.title);
        console.log(await response.json());
    }

    return (
        <form onSubmit={createNewPost}>
            <input 
                type="text" 
                placeholder="Title" 
                value={postTitle} 
                onChange={ev => setPostTitle(ev.target.value)}/>
            <input 
                type="text" 
                placeholder="Summary" 
                value={postSummary} 
                onChange={ev => setPostSummary(ev.target.value)}/>
            <input 
                type="file" 
                onChange={ev => setPostImage(ev.target.files)}/>
            <ReactQuill 
                theme="snow"
                modules={modules}
                formats={formats}
                value={postContent}
                onChange={newContent => setPostContent(newContent)}/>
            <button style={{ marginTop: '5px', background: '#2196f3' }}>Publish</button>
        </form>
    )
}

export default CreatePost;