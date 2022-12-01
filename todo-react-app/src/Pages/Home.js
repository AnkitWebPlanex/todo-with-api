import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blogs from '../components/Blogs';

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

  const deleteBlog = async (id) => {
    setLoading(true);
    await axios.delete('http://127.0.0.1:8000/api/blogs/' + id);

    let newBlogs = blogs.filter(((blog) => {
      return blog.id != id;
    }));

    setBlogs(newBlogs);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    getBlogs();
  }, [])

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-9">
          <h3>All Blogs</h3>
        </div>
        <div className="col-md-3 float-end">
          <input type="search" className='form-control form-control-sm' placeholder='Search by title...' value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
        </div>
      </div>
      <Blogs blogs={blogs} loading={loading} deleteBlog={deleteBlog} searchParam={searchParam} />
    </div>
  )
}

export default Home