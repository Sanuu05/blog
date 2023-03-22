import Axios from 'axios'

export const getpost =()=>async(dispatch)=>{
    try {
        const data = await Axios.get('https://tech-blog-wp3o.onrender.com/post/getpost')
        dispatch({type:"FETCH_POST", payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const getdetail=(id)=>async(dispatch)=>{
    try {
        const data = await Axios.get(`https://tech-blog-wp3o.onrender.com/post/getpostt/${id}`)
        dispatch({type:"DETAIL_POST", payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const postdata =(form)=>async(dispatch)=>{
    try {
        console.log(form)
        const data = await Axios.post('https://tech-blog-wp3o.onrender.com/post/post',form)
        dispatch({type:"POST_DATA", payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const deletepost =(id)=>async(dispatch)=>{
    try {
        const data = await Axios.delete(`https://tech-blog-wp3o.onrender.com/post/deletepost/${id}`)
        dispatch({type:"DELETE_POSTS", payload:id})
        dispatch({type:"DELETE_POST", payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updatepost =(form,id)=>async(dispatch)=>{
    try {
        // console.log("form")
        const data = await Axios.patch(`https://tech-blog-wp3o.onrender.com/post/updatepost/${id}`,form)
        // dispatch({type:"DELETE_POSTS", payload:id})
        dispatch({type:"UPDATE_POST", payload:data})
        
    } catch (error) {
        console.log(error)
    }
}
