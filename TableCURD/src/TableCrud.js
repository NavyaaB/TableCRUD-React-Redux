import React, { Component } from 'react';
import axios from 'axios';
import {Table,Button} from 'react-bootstrap';
import './App.css';


class TableCrud extends Component {
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
    this.search=this.search.bind(this)
    this.update=this.update.bind(this)
  }
  edit(item){
    this.refs.id.value = item.id
    this.refs.fname.value = item.fname
    this.refs.lname.value = item.lname
    this.refs.mail.value = item.mail
  }
  update(){

  let id =  this.refs.id.value
  let fName =   this.refs.fname.value
  let lname =   this.refs.lname.value
  let mail =  this.refs.mail.value


  var data=this.state.data
  for(var i=0;i<data.length;i++){
    if(data[i].id == id){
      data[i].fname = fName
      data[i].lname = lname
      data[i].mail = mail
    }
  }
  this.setState({data: data})
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
    console.log(this.refs.fname.value)
    let id =  this.refs.id.value
    if(id != ""){
      var data= this.state.data
      let id =  this.refs.id.value
      let fName =   this.refs.fname.value
      let lname =   this.refs.lname.value
      let mail =  this.refs.mail.value
      for(var i=0;i<data.length;i++){
        if(data[i].id == id){
          data[i].fname = fName
          data[i].lname = lname
          data[i].mail = mail
        }

    }
  } else {
    var data= this.state.data
    data.push({"id":data.length,"fname":this.refs.fname.value,"lname":this.refs.lname.value,"mail":this.refs.mail.value})
    this.setState({"data":data})
    this.refs.fname.value = ''
    this.refs.lname.value=''
    this.refs.mail.value=''
  }
    this.setState({data:data})

  }
  search(){
    console.log(this.refs.searchK.value)
  }
  render() {
    const data = this.state.data

    return (
      <div className="App">
        <h3>Table CRUD Operations</h3>
          <div className="form-group pull-left">
  	    <input type="text" ref="searchK" className="search form-control" onKeyUp={this.search} placeholder="Search.."></input>
  	</div>

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
        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.mail}</td>
        <td><Button onClick={this.edit.bind(this,item)}>Edit</Button>
            <Button onClick={this.delete.bind(this,item)}>Delete</Button>
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
         <td><Button bsStyle="primary" onClick={this.save}>Save</Button>
         <Button bsStyle="primary" onClick={this.update}>Update</Button></td>

       </tr>
     </tfoot>
   </Table>
      </div>
    );
  }
}

export default TableCrud;
