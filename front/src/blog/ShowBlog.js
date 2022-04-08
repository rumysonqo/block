import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const uri='http://localhost:8000/blogs/'

const CompShowBlogs=()=>{
    const [blogs, setBlog]=useState([])
    useEffect(()=>{
        getBlogs()
    },[])

    //mostrar todos los blogs
    const getBlogs= async ()=>{
        const res=await axios.get(uri)
        setBlog(res.data)

    }

    //eliminar un blog
    const deleteBlog=async(id)=>{
        await axios.delete(`${uri}${id}`)
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary nt-2 mb-2'><i className='fa-solid fa-plus'></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>title</th>
                                <th>content</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map ((blog)=>(
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        <Link to={'/edit/${blog.id}'} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteBlog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
            </div>
            

        </div>

    )

}

export default CompShowBlogs