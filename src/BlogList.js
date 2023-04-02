import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete }) => {

    //const blogs = props.blogs
    return (
        <div className="blog-list">
            {blogs.map((blog) => {
                return <div className="blog-preview" key={blog.id}>
                    <Link>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    </Link>
                </div>
            })}
        </div>
    );
}

export default BlogList;