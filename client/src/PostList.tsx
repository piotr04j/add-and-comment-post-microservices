import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export type Comments = Array<{id: string, content: string, postId: string, status: 'pending' | 'rejected' | 'approved'}>

interface IPosts {
    [key: string]: {
        id: string,
        title: string,
        comments: Comments
    }
}

const PostList: React.FC = () => {
    const[posts, setPosts] = useState<IPosts>({})

    useEffect(() => {
        axios.get<IPosts>('http://localhost:4002/posts')
            .then( res => {
                setPosts(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div className="d-flex d-row justify-content-between flex-wrap">
            {
                Object.values(posts).map( post => {
                     return (
                         <div className='card' style={{marginBottom: '20px', width: '30%'}} key={post.id}>
                             <div className="card-body">
                                 <h3>{post.title}</h3>
                                 <CommentList comments={post.comments} />
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
