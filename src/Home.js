import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import useFetch from "./useFetch";

const Home = () => {

    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> loading.. </div>}
            {blogs && <Blogs blogs={blogs} title="Hi ALL" />}
        </div>
    );
}

export default Home;
