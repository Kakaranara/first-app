import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        console.log(blog)

        fetch('http://localhost:8000/blogs',{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            // history.go(-1)
            history.push('./')
        })

    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Set Title </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                />
                <label> setBody </label>
                <textarea
                    type="text"
                    required
                    value = {body}
                    onChange={e=>setBody(e.target.value)}
                />
                <label> setAuthor </label>
                <select
                    required
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario"> Mario </option>
                    <option value="luigi"> Luigi </option>
                </select>
                <button type="submit"> SUBMIT </button>
                <p>title : {title}</p>
                <p>body : {body} </p>
                <p>author : {author}</p>
            </form>
        </div>
     );
}
 
export default Create;