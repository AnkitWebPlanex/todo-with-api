import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blogs from '../components/Blogs';
import Swal from "sweetalert2";

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useState('');

  const getBlogs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/blogs');
    setBlogs(response.data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const deleteBlog = (id) => {

    Swal.fire({
      title: "Do you want to delete this item?",
      icon: "success",
      confirmButtonText: "OK",
      showCancelButton: true,
    }).then(function (e) {

      if (e.isConfirmed) {
        setLoading(true);
        axios.delete('http://127.0.0.1:8000/api/blogs/' + id);
        Swal.fire('Deleted 😊', '', 'success');

        let newBlogs = blogs.filter(((blog) => {
          return blog.id != id;
        }));

        setBlogs(newBlogs);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    });
  }

  const editBlog = async (id) => {
    let response = await axios.get('http://127.0.0.1:8000/api/blogs/' + id + '/edit');
    setBlogs([response.data]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            <h3>All Blogs</h3>
          </div>
          <div className="col-md-3" >
            <input type="search" className='form-control form-control-sm' placeholder='Search by title...' value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
          </div>
        </div>
        <Blogs blogs={blogs} loading={loading} deleteBlog={deleteBlog} searchParam={searchParam} editBlog={editBlog} />
      </div>
    </>
  )
}

export default Home