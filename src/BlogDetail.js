import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import useFetch from "./useFetch";

const BlogDetail = () => {

    const {id} = useParams()
    const {data : blogs, isPending, error} =  useFetch("http://localhost:8000/blogs/" + id)

    console.log(blogs)

    return ( 
        <div className="blog-details">
            <h2>Hello, details : {id} </h2>
            {isPending && <div>loading </div>}
            {error && <div> {error} </div>}

        </div>
     );
}
 
export default BlogDetail
