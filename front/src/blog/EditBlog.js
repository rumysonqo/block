import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const uri='http://localhost:8000/blogs'

const CompEditBlog=()=>{
    const [title, setTitle]=useState('')
    const [content,setContent]=useState('')
    const navigate=useNavigate()
    const {id}=useParams()

    //prcedimiento para actualizar
    const actualizar=async(e)=>{
        e.preventDefault()
        await axios.put(uri+id,{
            title:title,
            content:content
        })
        navigate('/')
    }

    useEffect(()=>{
        getBlogById()
    },[])

    const getBlogById=async()=>{
        const res =await axios.get(uri+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    return(
        <div>
            <h3>Editar entrada</h3>
            <form onSubmit={actualizar}>
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

export default CompEditBlog