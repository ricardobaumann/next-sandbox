'use client'
//import createNewBlog from "../../lib/users/add-blog";
import {useState} from "react";
import save from "../../lib/users/save-user";

export default function NewBlog() {
    const [content, setContent] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        save(content);
    }

    return <>
        <p>new blog</p>
        <form onSubmit={event => handleSubmit(event)}>
            <input type={"text"} id={"content"} required={true}
                   name={"content"}
                   onChange={event => setContent(event.target.value)}
                   value={content}/>
            <p>Content: {content}</p>
            <button type={"submit"}>dale</button>
        </form>
    </>
}