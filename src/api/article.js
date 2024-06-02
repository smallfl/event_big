//导入请求工具类
import request from '@/utils/request.js'
import {useTokenStore} from '@/stores/token.js'
//文章分类列表查询
export const articleCategoryListService = () => {
    //在pinia中定义的响应式数据，都不需要。value
    return request.get('/category/findAllCategory')
}

//文章分类添加
export const articleCategoryAddService = (categoryData) => {
    return request.post('/category/addCategory', categoryData)
}

//文章分类删除
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category/deleteCategoryById?id=' + id)
}

//文章分类修改
export const articleCategoryUpdateService = (categoryData) => {
    return request.put('/category/updateCategoryById', categoryData)
}

//文章列表查询
export const articleListService = (params) => {
    return request.get('/article/list',{params: params})
}

//文章添加
export const articleAddService = (articleData) => {
    return request.post('/article/addArticle', articleData)
}

//文章删除
export const articleDeleteService = (id) => {
    return request.delete('/article/deleteArticleById?id=' + id)
}

//文章修改
export const articleUpdateService = (articleData) => {
    return request.put('/article/updateArticle', articleData)
}