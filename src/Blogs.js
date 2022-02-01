import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const Blogs = ({blogs, title, handleDelete}) => {

    
    return (
        <div className="blog-list">
            <p>{title}</p>
            {blogs.map(blog =>
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p> {blog.author}</p>
                    </Link> 
                </div>
            )}
        </div>
    );

}

export default Blogs