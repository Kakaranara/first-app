import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Blogs from "./Blogs";

const BlogDetail = () => {

    const {id} = useParams()
    const {data : blogs, isPending, error} =  useFetch("http://localhost:8000/blogs/" + id)

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
        </div>
     );
}
 
export default BlogDetail
