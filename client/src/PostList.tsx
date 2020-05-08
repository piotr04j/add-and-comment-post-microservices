import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CommentCreate from "./CommentCreate";

const PostList: React.FC = () => {

    const[posts, setPosts] = useState<{[key: string]: {id: number, title: string}}>({})

    useEffect(() => {
        axios.get<{[key: string]: {id: number, title: string}}>('http://localhost:4000/posts')
            .then( res => {
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="d-flex d-row justify-content-between flex-wrap">
            { Object.values<{id: number, title: string}>(posts).map( post => {
                 return (
                     <div className='card' style={{marginBottom: '20px', width: '30%'}} key={post.id}>
                         <div className="card-body">
                             <h3>{post.title}</h3>
                             <CommentCreate postId={post.id.toString()} />
                         </div>
                     </div>
                 )
                })
            }
        </div>
    )
}

export default PostList
