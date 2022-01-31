import { useEffect, useState } from "react";
import Blogs from "./Blogs";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setPending] = useState(true)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState('mario')

    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(res =>
            res.json()
        ).then(data => {
            setBlogs(data)
            setPending(false)
            console.log(data)
        })
    }, [])


    return (
        <div className="home">
            {isPending && <div> loading.. </div>}
            {blogs && <Blogs blogs={blogs} title="Hi ALL" handleDelete={handleDelete} />}
            <button onClick={() => setName('luigi')}>change name</button>
        </div>
    );
}

export default Home;
