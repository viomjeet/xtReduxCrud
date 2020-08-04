import React from 'react'

export default function Edituser({ edituser, edituserInput, saveEditUser, hideEdit }) {
    return (
        <form onSubmit={saveEditUser}>
            <h5>Edit User</h5>
            <hr />
            <div className="form-group">
                <input type="text" className="form-control form-control-sm" placeholder="Name..."
                    name="name"
                    value={edituser.name}
                    onChange={edituserInput}
                    required />
            </div>
            <div className="form-group">
                <input type="email" className="form-control form-control-sm" placeholder="Email..."
                    name="email"
                    value={edituser.email}
                    onChange={edituserInput}
                    required />

            </div>
            <div className="form-group">
                <hr />
                <button type="submit" className="btn btn-success btn-sm"><i className="fa fa-save"></i> Save</button>&nbsp;
                <button type="button" onClick={hideEdit} className="btn btn-warning btn-sm"><i className="fa fa-times"></i> Cancel</button>
            </div>
        </form>
    )
}

