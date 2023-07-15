import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Table } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:5000/users";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          users: result,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else {
      return (
        <div className="App">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
         <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
            //  {users.map((user) => (
              //  <tr key={user.id}>
               //   <td>{user.id}</td>
               //   <td>{user.name}</td>
             //   </tr>
          //    ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default App;
