import express, { Router } from 'express'
import { createBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController'
const router=express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id',updateBlog)

export default router


