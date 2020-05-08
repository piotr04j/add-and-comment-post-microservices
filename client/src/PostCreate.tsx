import React, {useState} from 'react'
import axios from 'axios'


const PostCreate: React.FC = () => {

    const[title, setTitle] = useState<string>('')

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        axios.post<{[key: string]: {id: number, title: string}}>('http://localhost:4000/posts', {title})
            .then( res => {
                console.log(res.data)
            })
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input
                        className="form-control"
                        type="text"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
