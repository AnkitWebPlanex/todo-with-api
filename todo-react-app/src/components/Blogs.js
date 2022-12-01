import React from 'react'
const Blogs = ({ blogs, loading, deleteBlog, searchParam }) => {
    return (
        <>
            {loading ? (
                <div colSpan='6' className="text-center"><p></p>
                    <div className="loader5"></div>
                </div>
            ) : blogs && blogs.length ? blogs.filter((blog) => {
                if (searchParam == '') {
                    return blog;
                } else if (blog.title.toLowerCase().includes(searchParam.toLowerCase())) {
                    return blog;
                }
            }).map((blog) => (
                <div className="card mb-2" key={blog.id}>
                    <div className="card-header">
                        {blog.title}
                        <button className="btn btn-danger text-white btn-sm float-end" onClick={() => deleteBlog(blog.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{blog.description}</p>
                            <footer className="blockquote-footer">{blog.author}</footer>
                        </blockquote>
                    </div>
                </div>
            )) : 'No data found'}
        </>
    )
}

export default Blogs