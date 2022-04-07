import BlogModel from "../models/BlogModel";

//metodos para el crud

//mostrar todos los registros
export const getAllBlogs=async (req,res)=>{
    try {
        const blogs= await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar un registro
export const getBlog=async(req,res)=>{
    try {
        const blog=BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear registro
export const createBlog=async(req,res)=>{
    try {
        await BlogModel.create(req.body)
        res.json({
            "message":"Registro creado"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar registro
export const updateBlog=async(req,res)=>{
    try {
        await BlogModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"registro actualizado"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


//eliminar registro
export const deleteBlog=async(req,res)=>{
try {
    await BlogModel.destroy({
        where: {id:req.params.id}
    })
    res.json({
        "message":"registro eliminado"
    })
    } catch (error) {
        res.json({message:error.message})
    }
}

