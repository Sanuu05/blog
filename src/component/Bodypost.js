import React from 'react'
import {NavLink} from 'react-router-dom'

function Bodypost({val}) {
    const htp = "https://devoblogweb.herokuapp.com/upload"
    
    return (
        <div>
            <div class="card bodypost" >
            <div class="card-body  text-capitalize pt-2 pb-2">
                    <h5 class="card-title">{val.title}</h5>
                    {/* <p class="card-text">{val.content}</p> */}
                    {/* <a href="#" class="btn btn-primary">Learn More</a> */}
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    {/* <div class="carousel-item active">
                                <img src={`http://localhost:8888/upload/${val.productPic[0].img}`}  class="d-block w-100 " alt="..." />
                            </div> */}
                        {
                            val.productPic.map((value,index)=>{
                                // console.log("vl",value)
                                return <div key={index} class={ index===0? 'carousel-item active':'carousel-item'}>
                                <img src={value} class="d-block w-100  " alt="..." />
                            </div>
                            })
                        }
                        
                        
                        {/* <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div> */}
                        {
                            val.productPic.length>1?<>
                              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                            </>:null
                        }
                    </div>
                    
                </div>
                <div class="card-body">
                    {/* <h5 class="card-title">{val.title}</h5> */}
                    <p class="card-text">{val.content1}</p>
                    <div classname="mainpostbtn">
                    <NavLink className="postd" to={`post/${val._id}`}>
                                 
                                 <button  className="postbtn">Learn More</button>
                            </NavLink>
                         
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Bodypost
