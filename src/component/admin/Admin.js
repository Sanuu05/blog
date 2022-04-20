import React from 'react'
import AdminNavbar from './AdminNavbar'
import Form from './form/Form'
import Posts from './posts/Posts'

function Admin() {
    return (
        <div className="admin">
        <div className="container">
            <AdminNavbar/>
            <div className="row">
                <div className="col-md-8 col-12">
                    <Posts/>
                </div>
                <div className="col-md-4 col-12">
                    <Form/>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Admin
