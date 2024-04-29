import createNewBlog from "../../lib/users/add-blog";

export default function NewBlog() {
    return <>
        <p>new blog</p>
        <form action={createNewBlog}>
            <input type={"text"} id={"content"} required={true} name={"content"}/>
            <button type={"submit"}>dale</button>
        </form>
    </>
}