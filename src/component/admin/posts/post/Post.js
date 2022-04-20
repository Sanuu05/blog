import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletepost, updatepost } from '../../../../action/post'

function Post({ val, index }) {
    const htp = "http://localhost:8888/upload"
    const dispatch = useDispatch()
    const [title, settitle] = useState()
    const [content1, setcontent1] = useState()
    const [content2, setcontent2] = useState()
    const [content3, setcontent3] = useState()
    const [productPic, setpic] = useState([])
    const edit = () => {
        settitle(val.title)
        setcontent1(val.content1)
        setcontent2(val.content2)
        setcontent3(val.content3)
    }
    const form = new FormData();
    form.append('title', title)
    form.append('content1', content1)
    form.append('content2', content2)
    form.append('content3', content3)
    
    const submit = (e) => {
        // e.preventDefault()
        dispatch(updatepost({title,content1,content2,content3}, val._id))
    }
    const clear = () => {
        settitle('')
        setcontent1('')
        setcontent2('')
        setcontent3('')
    }
    return (
        <>
            <tr data-bs-toggle="modal" className="mod " data-bs-target={`#exampleModal${index}`}>
                <td>{index + 1}</td>
                <td>{val.title}</td>
            </tr>
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
           </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id={`exampleModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div>
                            <h4>Title:</h4>
                            <p>{val.title}</p>
                        </div>
                        <div>
                            <h4>Paragraph(1):</h4>
                            <p>{val.content1}</p>
                            <h4>Paragraph(2):</h4>
                            <p>{val.content2}</p>
                            <h4>Paragraph(3):</h4>
                            <p>{val.content3}</p>
                        </div>

                        <div>
                            {
                                val.productPic.map((vali, index) => {
                                    return <img className="postimg" src={vali} alt="sas" />
                                })
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i class="far fa-window-close"></i></button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${val._id}`} onClick={edit}><i class="fas fa-edit"></i></button>
                            <button type="button" className="btn btn-danger" onClick={() => dispatch(deletepost(val._id))} data-bs-dismiss="modal"><i class="fas fa-trash"></i></button>
                        </div>
                        <div className="modal  fade" id={`exampleModal${val._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* <form > */}
                                    <h4>Edit:</h4>
                                    <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)} />
                                    <textarea class="form-control" placeholder="Paragraph-1" value={content1} onChange={(e) => setcontent1(e.target.value)} />
                                    <textarea class="form-control" placeholder="Paragraph-2" value={content2} onChange={(e) => setcontent2(e.target.value)} />
                                    <textarea class="form-control" placeholder="Paragraph-3" value={content3} onChange={(e) => setcontent3(e.target.value)} />
                                    {/* {
                                        productPic.length > 0 ?
                                            productPic.map((val, index) => {
                                                return <p>{val.name}</p>
                                            }) : null
                                    } */}
                                    {/* <input type="file" className="form-control" placeholder="choose pic" onChange={(e) => setpic([...productPic, e.target.files[0]])} /> */}
                                    <div>
                                        <button type="submit" className="btn btn-danger mr-5" onClick={clear}>Clear</button>
                                        <button type="submit" className="btn btn-primary" onClick={submit} data-bs-dismiss="modal" >Submit</button>
                                    </div>

                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Post
