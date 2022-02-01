import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Blogs from "./Blogs";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {

    const {id} = useParams()
    const {data : blogs, isPending, error} =  useFetch("http://localhost:8000/blogs/" + id)

    const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id,{
            method : "DELETE"
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>loading </div>}
            {error && <div> {error} </div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.body}</p>
                </article>
            )}
            <button onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BlogDetail
