import React, { useEffect } from 'react'
import Bodypost from './Bodypost'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getpost } from '../action/post'
import { NavLink } from 'react-router-dom'
import { AiFillFacebook,AiFillTwitterSquare ,AiFillInstagram,AiOutlineGooglePlus,AiFillYoutube} from "react-icons/ai";
const htp = "http://localhost:8888/upload"

function Home() {
    const dispatch = useDispatch()
    const postdata = useSelector(state => state.postdata)
    console.log("pp", postdata.postdata)
    useEffect(() => {
        dispatch(getpost())
    }, [dispatch, postdata])
    const post = useSelector(state => state.post.post)
    console.log(post)
    return (
        <div className="container-fuild home">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className=" col-md-8 col-12  lhome order-1 order-md-0">
                        {
                            post.map((val, index) => {
                                return <div className="col-md-9 col-12 mt-5 mb-5 lhome1" key={index}>

                                    <Bodypost val={val} />


                                </div>
                            })
                        }
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
                                                        <NavLink className="postd" exact to={`/post/${val._id}`}>

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
                                <div className="rhead1 col-md-10 m-0 text-center px-3 py-5 d-none d-md-block">
                                    <h2>FOLLOW US:</h2>
                                    <p><AiFillFacebook/><AiFillTwitterSquare/><AiFillInstagram/><AiOutlineGooglePlus/><AiFillYoutube/></p>
                                   
                                </div>



                            </div>



                        </div>
                    </div>
                </div>
                <div className="row mt-5 px-3 ">
                                <div className="rhead1 col-md-10 m-0 text-center px-3 py-5 d-block d-md-none">
                                    <h2>FOLLOW US:</h2>
                                    <p><AiFillFacebook/><AiFillTwitterSquare/><AiFillInstagram/><AiOutlineGooglePlus/><AiFillYoutube/></p>
                                   
                                </div>



                            </div>
                
            </div>

        </div>
    )
}

export default Home
