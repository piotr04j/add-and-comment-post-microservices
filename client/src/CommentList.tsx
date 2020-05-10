import React from 'react'
import { Comments } from './PostList'

const CommentList: React.FC<{comments: Comments}> = ({comments}) => {

    return (
        <ul>
            {
                comments.map( comment => {
                    return <li key={comment.id}>
                        { comment.status === 'approved'
                            ? comment.content
                            : comment.status === 'pending' ?
                                'Comment is awaiting moderation!'
                                : 'Comment has been rejected!'
                        }
                    </li>
                })
            }
        </ul>
    )
}

export default CommentList
