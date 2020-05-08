import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList: React.FC = () => {
    const[posts, setPosts] = useState<{[key: string]: {id: string, title: string}}>({})

    useEffect(() => {
        axios.get<{[key: string]: {id: string, title: string}}>('http://localhost:4000/posts')
            .then( res => {
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="d-flex d-row justify-content-between flex-wrap">
            {
                Object.values<{id: string, title: string}>(posts).map( post => {
                     return (
                         <div className='card' style={{marginBottom: '20px', width: '30%'}} key={post.id}>
                             <div className="card-body">
                                 <h3>{post.title}</h3>
                                 <CommentList postId={post.id} />
                                 <CommentCreate postId={post.id} />
                             </div>
                         </div>
                     )
                })
            }
        </div>
    )
}

export default PostList
