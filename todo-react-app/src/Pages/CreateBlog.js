import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { createBlogSchema } from '../schemas/create_blog';

const initialValues = {
  title: "",
  description: "",
  author: ""
};

const CreateBlog = () => {
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: createBlogSchema,
    onSubmit: (values) => {
      let data = {
        title: values.title,
        description: values.description,
        author: values.author
      }

      axios.post('http://127.0.0.1:8000/api/blogs', data).then(res => {
        navigate("/");
      }).catch(function (error) {
        console.log(error);
      });
    }
  });

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  useEffect(() => {
    let API = 'https://jsonplaceholder.typicode.com/users';
    getUsers(API);
  }, [])

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-3">
        <h3>Create Blog</h3>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input type="text" placeholder='Enter title' className='form-control form-control-sm' name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} />
              {errors.title && touched.title ?
                (<div className="invalid-feedback">
                  {errors.title}
                </div>) : ''
              }
            </div>
            <div className="input-group mb-3">
              <textarea className='form-control form-control-sm' rows="5" placeholder='Description' name="description" value={values.description} onChange={handleChange} onBlur={handleBlur}></textarea>
              {errors.description && touched.description ?
                (<div className="invalid-feedback">
                  {errors.description}
                </div>) : ''
              }
            </div>
            <div className="input-group mb-3">
              <select className="form-control form-control-sm" name="author" value={values.author} onChange={handleChange} onBlur={handleBlur}>
                <option value="">Select Author</option>
                {users && users.map(user => (
                  <option key={user.id} value={user.name}>{user.name}</option>
                ))}
              </select>
              {errors.author && touched.author ?
                (<div className="invalid-feedback">
                  {errors.author}
                </div>) : ''
              }
            </div>
            <div className="input-group mb-3 d-flex justify-content-center">
              <button type='submit' className='btn btn-outline-success'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateBlog