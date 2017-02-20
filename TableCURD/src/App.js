import React, { Component } from 'react';
import logo from './logo.svg';
import {Table,Button} from 'react-bootstrap';
import './App.css';
class App extends Component {
  constructor(props){
    super(props)
  //  this.state={value: ''}
    this.state={table:""}

    this.save=this.save.bind(this)

  }
  save(){
    console.log(this.refs.tbl.rows.length)
    let i=this.refs.tbl.rows.length
    console.log(this.refs.num.value)
    let num=this.refs.num.value
    let row = this.refs.tbl.insertRow(i-1); // i is now dynamic
    let cell0 = row.insertCell(0);
    cell0.innerHTML = num;
    this.refs.num.value=''

    console.log(this.refs.fname.value)
    let fname=this.refs.fname.value
    let cell1 = row.insertCell(1);
    cell1.innerHTML = fname;
    this.refs.fname.value=''

    console.log(this.refs.lname.value)
    let lname=this.refs.lname.value
    let cell2 = row.insertCell(1);
    cell2.innerHTML = lname;
    this.refs.lname.value=''

    console.log(this.refs.mail.value)
    let mail=this.refs.mail.value
    let cell3 = row.insertCell(3);
    cell3.innerHTML = mail;
    this.refs.mail.value=''

    let cell4 = row.insertCell(4);
    cell4.innerHTML = "<Button bsStyle='primary' ref='one' onclick={this.edit}> Edit </Button>";
    i++
  }

  render() {
    return (
      <div className="App">
        <h3>Table CRUD Operations</h3>
          <Table striped bordered condensed hover>
     <thead>
       <tr>
         <th>#</th>
         <th>First Name</th>
         <th>Last Name</th>
         <th>E-mail</th>
       </tr>
     </thead>
     <tbody ref="tbl">
       <tr>
         <td>1</td>
         <td>Mark</td>
         <td>Otto</td>
         <td>mark@mdo</td>
           <td>
               <ButtonToolbar>
               <Button bsStyle="primary" onClick={this.edit}>Edit</Button>
               <Button bsStyle="danger" onClick={this.delete}>Delete</Button>
               </ButtonToolbar>
              </td>
       </tr>
       <tr>
         <td>2</td>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>Jacob@fat</td>
           <td>
               <ButtonToolbar>
               <Button bsStyle="primary" onClick={this.edit}>Edit</Button>
               <Button bsStyle="danger" onClick={this.delete}>Delete</Button>
               </ButtonToolbar>
              </td>
       </tr>
       <tr>
         <td><input type="text" ref="num" placeholder="Enter #" value={this.state.value}></input> </td>
        <td> <input type="text" ref="fname" placeholder="Enter First Name"></input></td>
          <td><input type="text" ref="lname" placeholder="Enter Last Name"></input> </td>
         <td> <input type="email" ref="mail" placeholder="Enter email"></input></td>
         <td><Button bsStyle="primary" onClick={this.save}>Save</Button></td>
       </tr>
     </tbody>
   </Table>
      </div>
    );
  }
}

export default App;
