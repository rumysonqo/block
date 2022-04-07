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


    }

    //eliminar un blog
    const deleteBlog=async(id)=>{

    }

    return(
        <div>

        </div>

    )

}

export default CompShowBlogs