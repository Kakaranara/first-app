const Blogs = ({blogs, title, handleDelete}) => {
    
    return (
        <div className="blog-list">
            <p>{title}</p>
            {blogs.map(blog =>
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            )}
        </div>
    );

}

export default Blogs