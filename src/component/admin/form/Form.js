import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postdata } from '../../../action/post'
function Form() {
    const [title, settitle] = useState()
    const [content1, setcontent1] = useState()
    const [content2, setcontent2] = useState()
    const [content3, setcontent3] = useState()
    const [subheadone, setsubheadone] = useState()
    const [subheadtwo, setsubheadtwo] = useState()
    const [productPic, setpic] = useState([])
    const [piclist, setpiclist] = useState([])
    // const form = ({
    //     "title":title.title,
    //     "content":content.content,
    //     "pic":pic.productPic
    // })
    console.log("list",piclist)
    const dispatch = useDispatch()
    // console.log(form)
    // const submit =(e)=>{
    //     e.preventDefault()

    // }
    const form = new FormData();
    form.append('title', title)
    form.append('content1', content1)
    form.append('content2', content2)
    form.append('content3', content3)
    form.append('subhead1', subheadone)
    form.append('subhead2', subheadtwo)
    for (let pic of productPic) {
        form.append('productPic', pic)
    }
    const submitimg = (e)=>{
        // e.preventDefault()
        // productPic.map((v,i)=>{
            const data = new FormData()
            data.append("file", e)
            data.append("upload_preset", "insta-clone")
            data.append("cloud_name", "sannu")
            fetch("https://api.cloudinary.com/v1_1/sannu/image/upload", {
                method: "post",
                body: data
            }).then(res =>
                res.json())
                .then(data => {
                    // dispatch(editProduct(val._id,{name:editname,price:editprice,pimg:data.url,type:type,stock:stock,detail:detail,type:type} ))
                    setpiclist([...piclist,data.url])
                    
                }).catch(err => console.log(err))
        // })
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(postdata({title,content1,content2,content3,subhead1:subheadone,subhead2:subheadtwo,productPic:piclist}))
        settitle("")
        setcontent1('')
        setcontent2('')
        setcontent3('')
        setsubheadone('')
        setsubheadtwo('')
        setpic('')
        // setpic(null)
    }
    const clear =()=>{
        settitle("")
        setcontent1('')
        setcontent2('')
        setcontent3('')
        setsubheadone('')
        setsubheadtwo('')
        setpic('')
    }
    return (
        <div className="mt-5 shadow form">
            <form onSubmit={submit}>
                <input type="text" class="form-control" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)} />
                <textarea class="form-control" placeholder="Paragraph-1" value={content1} onChange={(e) => setcontent1(e.target.value)} />
                <input type="text" class="form-control" placeholder="Sub-heading 1(optional)" value={subheadone} onChange={(e) => setsubheadone(e.target.value)} />
                <textarea class="form-control" placeholder="Paragraph-2" value={content2} onChange={(e) => setcontent2(e.target.value)} />
                <input type="text" class="form-control" placeholder="Sub-heading 2(optional)" value={subheadtwo} onChange={(e) => setsubheadtwo(e.target.value)} />
                <textarea class="form-control" placeholder="Paragraph-3" value={content3} onChange={(e) => setcontent3(e.target.value)} />
                {
                    piclist.length > 0 ?
                        piclist.map((val, index) => {
                            return <p><span className="imgspan">Image for {index+1}st para:</span>{val}</p>
                        }) : null
                }
                <input type="file" class="form-control" placeholder="choose pic" onChange={(e) => submitimg(e.target.files[0])} />
                <button type="submit" class="btn btn-danger" onClick={clear}>Clear</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
