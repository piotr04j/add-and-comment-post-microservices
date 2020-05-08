import React, {useEffect, useState} from 'react'
import axios from 'axios'

const CommentList: React.FC<{postId: string}> = ({postId}) => {
    const[comments, setComments] = useState<Array<{id: string, content: string}>>([])

    useEffect(() => {
        axios.get<Array<{id: string, content: string}>>(`http://localhost:4001/posts/${postId}/comments`)
            .then( res => {
                setComments(res.data)
            })
    }, [])

    return (
        <ul>
            {
                comments.map( comment => {
                    return <li key={comment.id}>{comment.content}</li>
                })
            }
        </ul>
    )
}

export default CommentList
