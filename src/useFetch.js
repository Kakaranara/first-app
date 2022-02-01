import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)

    useEffect(() => {

        const abortCont = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(response => {
                if (!response.ok)
                    throw Error('cant fetch this url : ' + url)
                return response.json()
            }).then(data => {
                setData(data)
                setError(null)
                setPending(false)
            }).catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('fetch aborted')
                }
                else {
                    setError(e.message)
                    setPending(false)
                }
            })
        }, 1000) 
        
        return () => abortCont.abort()

    }, [url])

    return { data, isPending, error };
}

export default useFetch;