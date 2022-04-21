import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'


export default function Posts(props) {
    // probably need a useeffect get asynch fetch
    const [posts, setPosts] = useState([1])
    useEffect(()=>{
        fetch('https://kekambas-bs.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])
    return (
        <>
        <h1 className='text-center mt-3'>Current Posts</h1>
        {posts.map((p,i)=> <PostCard key={i} post={p} />)}
        </>
    )
}
