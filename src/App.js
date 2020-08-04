import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, addUser, updateUser } from './index'
import Allusers from './components/allusers'
import Adduser from './components/adduser';
import Edituser from './components/edituser';

function App() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [user, setUser] = useState({ "name": "", "email": "" });
  const [edituser, setEditUser] = useState({ "name": "", "email": "" });
  const userInput = (e) => { setUser({ ...user, "id": store.allusers.length + 1, [e.target.name]: e.target.value }) }
  const hideEdit = () => { setShow(true); }
  const editRow = (item) => {
    setShow(false); setEditUser({ "id": item.id, "name": item.name, "email": item.email })
  }
  const deleteRow = (item) => {
    let c = window.confirm("Are you sure, you want to delete this row?");
    if (c) { dispatch(deleteUser(item)) }
  }
  const addRow = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
    setUser({ ...user, name: "", email: '' });
  }
  const edituserInput = (e) => {
    setEditUser({ ...edituser, [e.target.name]: e.target.value })
  }
  const saveEditUser = event => {
    event.preventDefault();
    dispatch(updateUser(edituser))
    setUser({ ...edituser, name: "", email: '' });
    setShow(true);
  }
  return (
    <div className="App">
      <div className="pageTitle">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <h4>xtReduxCrud <a href="https://viomjeet.net/"><i className="fa fa-home"></i></a></h4>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            {show ? <Adduser editRow={editRow} deleteRow={deleteRow} addRow={addRow} user={user} userInput={userInput} /> : <Edituser edituser={edituser} edituserInput={edituserInput} saveEditUser={saveEditUser} hideEdit={hideEdit} />}
          </Col>
          <Col md={8} className="mx-auto">
            <Allusers store={store} editRow={editRow} deleteRow={deleteRow} hideEdit={hideEdit} show={show} />
          </Col>
        </Row>
      </Container>

      <footer>
        <div className="container">
          <div className="ecart-footer">
            <a className="footer_link" href="https://www.viomjeet.net/" target="_blank">&copy; viomjeet
					<span id="date">&nbsp; {new Date().getFullYear()}</span></a>
            <span>Made with <i className="text-danger fad fa-heart"></i> in india</span>
          </div>
        </div>
      </footer>

    </div >
  );
}

export default App;
