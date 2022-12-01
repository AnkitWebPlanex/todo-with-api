import React, { useState } from 'react'

const UserComp = ({ users, isFetching }) => {
    const [searchParam, setSearchParam] = useState('');
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-9">
                    <h3>All Users</h3>
                </div>
                <div className="col-md-3 float-end">
                    <input type="search" className='form-control form-control-sm' placeholder='Search....' value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {isFetching ? (
                        <tr style={{ borderBottomColor: '#fff' }}>
                            <td colSpan='6' className="text-center"><p></p>
                                <div className="loader5"></div>
                            </td>
                        </tr>
                    ) : (users && users.filter((user) => {
                        if (searchParam == '') {
                            return user;
                        } else if (user.name.toLowerCase().includes(searchParam.toLowerCase())) {
                            return user;
                        }
                    }).map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <a href={user.website}>{user.website}</a>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    )
}

export default UserComp