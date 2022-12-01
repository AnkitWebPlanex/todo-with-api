import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateBlog = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const getUsers = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  useEffect(() => {
    let API = 'https://jsonplaceholder.typicode.com/users';
    getUsers(API);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      title: title,
      description: description,
      author: author
    }

    axios.post('http://127.0.0.1:8000/api/blogs', data).then(res => {
      navigate("/");
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-3">
        <h3>Create Blog</h3>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input type="text" placeholder='Enter title' className='form-control form-control-sm' onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className="input-group mb-3">
              <textarea className='form-control form-control-sm' rows="5" placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            </div>
            <div className="input-group mb-3">
              <select className="form-control form-control-sm" onChange={(e) => setAuthor(e.target.value)}>
                <option value="">Select Author</option>
                {users && users.map(user => (
                  <option key={user.id} value={user.name}>{user.name}</option>
                ))}
              </select>
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
              <button className='btn btn-outline-success'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBlog