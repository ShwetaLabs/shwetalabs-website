import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { blogData } from "../data/blog"

export function BlogPage() {
    const params = useParams();
    const blog = blogData.blogSearch.blogs[Number(params.blogId)]
    const [blogContent, setBlogContent] = useState("");
    useEffect(() => {
        fetch(blog.data)
            .then(r => r.text())
            .then(data => setBlogContent(data))
    }
        , [blog]
    )
    if (blogContent == null) return <div />
    return <div style={{ padding: "0px 10%" }}>
        <div style={{ padding: "0px 17%", marginBottom:'30px' }}>
            <div
                className='row'
                style={{ justifyContent: 'space-between' }}
            >
                <p className='offwhite fs-smaller stripped'>{blog.date}</p>
                <p className='offwhite fs-smaller stripped clocked'>{blog.length}</p>
            </div>
            <div className='fw-bold fs-x-large' style={{ lineHeight: "100%" }}> {blog.title} </div>
        </div>
        <div style={{marginBottom:"30px"}}>
            <img src={blog.image} style={{ objectFit: "contain", width: "100%" }} />
        </div>
        <div className="color-dont-change" style={{ padding: "0px 17%"}}>
			<div dangerouslySetInnerHTML={{__html: blogContent}} />
        </div >
    </div>
}
