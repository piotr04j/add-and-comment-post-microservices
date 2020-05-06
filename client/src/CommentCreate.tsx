import React, {useState} from 'react'
import axios from 'axios'

const CommentCreate: React.FC<{id: string}> =  ({id}) => {
    const[content, setContent] = useState<string>('')
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        axios.post<any, {data: any}>(`http://localhost:4001/posts/${id}/comments`, {content})
            .then( res => {
                res.data
                console.log(res.data)
            })
        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="">New Comment</label>
                    <input
                        className="form-control"
                        type="text"
                        value={content}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setContent(e.target.value)
                        }}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate
