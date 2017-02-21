import React, { Component } from 'react';
import axios from 'axios';
import {Table,Button} from 'react-bootstrap';
import './App.css';


class TableCrudd extends Component {
  constructor(props){
    super(props)
    this.state={data:[]}
    let self=this
    axios.get('./data.json')
    .then(function (response) {
      self.setState({data: response.data})
    })
    .catch(function(error) {
      console.log(error);
    });
    this.save = this.save.bind(this)
  }
  edit(item){
    this.refs.id.value = item.id
    this.refs.fName.value = item.fName
    this.refs.lName.value = item.lName
    this.refs.email.value = item.email
  }
  delete(item){
    var data=this.state.data
    for(var i=0;i<data.length;i++){
      if(data[i].id === item.id){
        delete data[i]
      }
    }
    this.setState({data:data})
  }
  save(){
    console.log(this.refs.tbl.rows.length)
    console.log(this.refs.name.value)
  }
  render() {
    const data = this.state.data
    return (
      <div className="App">
        <h3>Table CRUD Operations</h3>
          <Table striped bordered condensed hover>
     <thead>
       <tr>
         <th>#</th>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Email</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody ref="tbl">
    {data && data.length>0 ?
    data.map((item,i) => (
      <tr key={i}>
        <td></td>
        <td>{item.fName}</td>
        <td>{item.lName}</td>
        <td>{item.email}</td>
        <td><Button onclick={this.edit.bind(this,item)}>Edit</Button>
            <Button onclick={this.delete.bind(this,item)}>Delete</Button>
        </td>
      </tr>
    ))
  :null
}
</tbody>
<tfoot>
       <tr>
         <td><input type="hidden" ref="id" value="" id="id"></input> </td>
        <td> <input type="text" ref="fname" placeholder="Enter First Name"></input></td>
          <td><input type="text" ref="lname" placeholder="Enter Last Name"></input> </td>
         <td> <input type="email" ref="mail" placeholder="Enter email"></input></td>
         <td><Button bsStyle="primary" onClick={this.save}>Save</Button></td>
       </tr>
     </tfoot>
   </Table>
      </div>
    );
  }
}

export default TableCrudd;
