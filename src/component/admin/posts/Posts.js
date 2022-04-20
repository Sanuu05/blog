import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getpost } from '../../../action/post'
import Post from './post/Post'

function Posts() {
    const post = useSelector(state=>state.post.post)
    const postdata = useSelector(state=>state.postdata.postdata)
    const update = useSelector(state=>state.postdata.update)
    const del = useSelector(state=>state.postdata.del)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getpost())

    },[postdata,dispatch,del,update])
    console.log("del",del)
    return (
        <div className="row mt-3">
            <table>
                <tr>
                    <th>Sl.no</th>
                    <th>Title</th>
                </tr>
                { 
                post?
                post.map((val,index)=>{
                    
                    // return 
                    {/* <!-- Button trigger modal --> */}
                    return <Post val={val} index={index}/>
        
                    // </div> 
                }):null
            }
            </table>
            
           
            
        </div>
    )
}

export default Posts
