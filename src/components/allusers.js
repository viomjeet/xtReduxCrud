import React from 'react'

export default function Allusers({ store, editRow, deleteRow, hideEdit, show }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-sm small">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {store.allusers.map((items, index) => (
                        <tr key={index}>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>
                                {show ?
                                    <React.Fragment>
                                        <button type="button" onClick={() => editRow(items)} className="btn btn-xs btn-success"><i className="fa fa-edit"></i></button>&nbsp;
                                <button type="button" onClick={() => deleteRow(items)} className="btn btn-xs btn-danger"><i className="fa fa-trash"></i></button>
                                    </React.Fragment> :
                                    <button type="button" onClick={hideEdit} className="btn btn-xs btn-warning"><i className="fa fa-times"></i> Cancel</button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
