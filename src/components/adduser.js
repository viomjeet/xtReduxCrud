import React from 'react'

export default function Adduser({ userInput, addRow, user }) {
    return (
        <form onSubmit={addRow}>
            <h5>Add User</h5>
            <hr />
            <div className="form-group">
                <input type="text" className="form-control form-control-sm" placeholder="Name..."
                    name="name"
                    value={user.name}
                    onChange={userInput}
                    required />
            </div>
            <div className="form-group">
                <input type="email" className="form-control form-control-sm" placeholder="Email..."
                    name="email"
                    value={user.email}
                    onChange={userInput}
                    required />

            </div>
            <div className="form-group">
                <hr />
                <button type="submit" className="btn btn-success btn-sm">Add User</button>
            </div>
        </form>
    )
}

