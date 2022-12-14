import { Link } from "react-router-dom"
import "./post.css"

export default function Post({post}) {
  const PF="https://blog-site-backend.vercel.app/images/"
  return (
    <div className="post">
    {post.photo && (
      <img className="posting" 
      src={PF+post.photo}
      alt="" />
)}
      <div className="postInfo">
        <div className="postCats">
       { post.categories.map((c) => (
        <span className="postCat">{c.name}</span>
       ) )}
        </div>
<Link to= {`/post/${post._id}`} className="link">
<span className="postTitle">{post.title} </span>
</Link>
       
       
        <hr />
        <span className="postData">{new Date(post.createdAt).toDateString()}</span>
        
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}
