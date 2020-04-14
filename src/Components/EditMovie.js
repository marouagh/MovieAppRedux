import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'


export default class EditMovie extends Component {
  state = {
    show :false,
    newMovie: {
                 
                 ...this.props.oldmovie
    }
  }
 
  handleModal =() =>{
    this.setState({show : !this.state.show})
   
  }
  handleChange = event =>{
    this.setState({
      newMovie: { ...this.state.newMovie, [event.target.name]: event.target.value }
    });
  }
    handelAddNewMovie = event => {
      event.preventDefault();
      if(Object.values(this.state.newMovie).indexOf("") === -1)
      {
        this.props.editMovie(this.state.newMovie);
        this.setState({show:false})
      } else {alert("all fields are required")}
    }
   
  render() {
    return (
      <div>
        
        <Button variant="primary" size="sm" onClick={() =>{this.handleModal()}} >Edit</Button>
        <Modal show={this.state.show}>
          <Modal.Header>Modal Head Part</Modal.Header>
          <Modal.Body>
          <form className='modal-form'>
            <label>Movie Image</label>
            <input type="url" name="image"  value={this.state.newMovie.image} onChange={this.handleChange}/>
            <label>Movie Rate</label>
            <input type="number" max="5" min="1" name="rate"  value={this.state.newMovie.rate} onChange={this.handleChange}/>
            <label>Movie Name</label>
            <input type="text" name="title"  value={this.state.newMovie.title} onChange={this.handleChange}/>
            <label>Released Year</label>
            <input  type="text" name="year"  value={this.state.newMovie.year} onChange={this.handleChange}/>
            </form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={(event)=>this.handelAddNewMovie(event)}>Add Movie</Button>
          <Button onClick={this.handleModal}>close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
