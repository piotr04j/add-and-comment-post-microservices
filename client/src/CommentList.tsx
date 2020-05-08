import React from 'react'
import axios from 'axios'
import { Comments } from './PostList'

const CommentList: React.FC<{comments: Comments}> = ({comments}) => {

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
