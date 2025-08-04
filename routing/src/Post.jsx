import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Post = () => {
    const [data, setdata] = useState(null)
    const params = useParams();
    console.log("params", params);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.Postid}`)
            .then(data => data.json())
            .then(data => setdata(data))
    }, [])
    console.log("data", data);

    if (data === null) return <p>loading...</p>

    return (
        <div>
            <h1>{data.title} </h1>
            <p>{data.body}</p>
        </div>
    )
}

export default Post
