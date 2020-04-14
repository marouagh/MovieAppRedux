import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux';
import {addMovie} from '../Js/actions/actions'
import {v4 as uuidv4} from 'uuid'


class AddMovie extends Component {
  state = {
    show :false,
    newMovie: {
      
                 image:'',
                 rate:1,
                 title:'',
                 year:''
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
    handelAddMovie = event => {
      event.preventDefault();
      if(Object.values(this.state.newMovie).indexOf("") === -1)
      {
        this.props.addMovie({...this.state.newMovie, id:uuidv4()});
        this.setState({newMovie: { ...this.state.newMovie,image:'', rate:'', title:'', year:'' }});
        //this.setState({show:false})
      } else {alert("all fields are required")}
    };
   
  render() {
    return (
      <div>
        
        <Button className={this.props.Loading ? 'add-btn-disp':'add-btn'} onClick={() =>{this.handleModal()}} >+</Button>
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
          <Button onClick={(event)=>this.handelAddMovie(event)}>Add Movie</Button>
          <Button onClick={this.handleModal}>close</Button>
          </Modal.Footer>
        </Modal>
       
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    moviesData: state.moviesData,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMovie: payload => dispatch(addMovie(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)