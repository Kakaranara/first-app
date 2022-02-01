import {useState, useEffect} from 'react'

const useFetch = (url) => {
    
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => {
    //             if (!res.ok) throw Error("some error fetch") 
    //             return res.json()
    //         })
    //         .then(data => {
    //             setData(data)
    //             setPending(false)
    //             setError(null)
    //         })
    //         .catch(err => {
    //             setPending(false)
    //             setError(err.message)
    //             console.log(err.message)
    //         })
    // }, [url])

    useEffect(() => {
        fetch(url).then(response => {
            if(!response.ok) throw Error('cant fetch this url : ' + url)
            return response.json()
        }).then(data => {
            setData(data)
            setError(null)
            setPending(false)
        }).catch((e)=>{
            console.log(e.message)
            setError(e.message)
            setPending(false)
        })
    }, [url])
    return {data, isPending, error};
}
 
export default useFetch;