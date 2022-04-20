import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getdetail, updatepost } from '../action/post'
import Navbar from './Navbar'
import { getpost } from '../action/post'
import { NavLink } from 'react-router-dom'
import { AiFillFacebook,AiFillTwitterSquare ,AiFillInstagram,AiOutlineGooglePlus,AiFillYoutube} from "react-icons/ai";
function Details() {
    const {userId} = useParams()
    console.log(userId)
    const data = useSelector(state=>state.detail.detail)
    const htp = "http://localhost:8888/upload"
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getdetail(userId))
    },[])
    useEffect(() => {
        dispatch(getpost())
    }, [dispatch])
    const post = useSelector(state => state.post.post)
    console.log(data)
    return (
        <div className="detail">
        <div className="container-fluid">
             <Navbar/>
             <div className="row">
                 <div className="col-md-8 col-12">
                  
                 
            <div className="row pt-4">
                <h4 className="text-center dtitle ">
                    {data?data.title:null}
                </h4>
                {data?   data.productPic?
                data.productPic.length>0?<div className="col-md-8 offset-md-2 col-12 pt-2">

                <img src={data.productPic?data.productPic[0]:null} className="img-fluid"/>
            </div>:null:null:null
            }
                <div className="col-md-8 offset-md-2 col-12 pt-2">
               <p>{data?data.content1:null}</p> 
            </div>
            { data?  data.productPic?
                data.productPic.length>1?<div className="col-md-8 offset-md-2 col-12 pt-2">

                <img src={data.productPic?data.productPic[1]:null} className="img-fluid"/>
            </div>:null:null:null
            }
                <div className="col-md-8 offset-md-2 col-12 pt-2">
                    <h2>{data?data.subhead1:null}</h2>
               <p>{data?data.content2:null}</p> 
            </div>
            {  data? data.productPic?
                data.productPic.length>2?<div className="col-md-8 offset-md-2 col-12 pt-2">

                <img src={data.productPic?data.productPic[2]:null} className="img-fluid"/>
            </div>:null:null:null
            }
            
                <div className="col-md-8 offset-md-2 col-12 pt-2">
                <h2>{data?data.subhead2:null}</h2>
               <p>{data?data.content3:null}</p> 
            </div>
            </div>
            </div>
            <div className="col-md-4 mt-5 col-10 offset-1 offset-md-0 rhome order- order-md-1">
                        <div classname="recentpost">

                            <div className="row">
                                <div className="rhead col-md-10 m-0">
                                    <h2>Recent News</h2>
                                </div>

                                {
                                    post.slice(0, 3).map((val, index) => {
                                        return <div className=" col-md-10 m-0">
                                            <div className="recentnews">
                                                <div className="row">

                                                    <div className="col-md-4 postimg">
                                                        <img src={val.productPic ? val.productPic[0] : null} className="img-fluid" />

                                                    </div>
                                                    <div className="col-md-8 postitle">
                                                        <NavLink className="postd" to={`post/${val._id}`}>

                                                            <p>{val.title}</p>
                                                        </NavLink>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    })
                                }


                            </div>

                            <div className="row mt-5 px-3">
                                <div className="rhead1 col-md-10 m-0 text-center px-3 py-5">
                                    <h2>WE REVIEW ALL THE CRAZIEST GADGETS, GIZMOS, TOYS & TECHNOLOGY, SO YOU DON'T HAVE TO.</h2>
                                    <h2>EDITORS:</h2>
                                    <p>JAMES</p>
                                    <p>JACKSON</p>
                                    <p>MICHAEL</p>
                                </div>



                            </div>
                            <div className="row mt-5 px-3 ">
                                <div className="rhead1 col-md-10 m-0 text-center px-3 py-5 ">
                                    <h2>FOLLOW US:</h2>
                                    <p><AiFillFacebook/><AiFillTwitterSquare/><AiFillInstagram/><AiOutlineGooglePlus/><AiFillYoutube/></p>
                                   
                                </div>



                            </div>



                        </div>
                    </div>
             </div>
            
            </div>
        </div>
    )
}

export default Details
