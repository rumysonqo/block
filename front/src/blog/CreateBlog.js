import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const uri='http://localhost:8000/blogs/'

const CompCreateBlog=()=>{
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const navigate =useNavigate()

    //procedimiento guardar
    const guardar=async(e)=>{
        e.preventDefault()
        await axios.post(uri, {title:title, content:content})
        navigate('/')
    }

    return(
        <div>
            <h3>Crear entrada</h3>
            <form onSubmit={guardar}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div>
                    <label className="form-label">Content</label>
                    <textarea
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>

            </form>
        </div>
    )

}
export default CompCreateBlog