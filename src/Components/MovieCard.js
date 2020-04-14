import React from 'react'
import {connect} from 'react-redux'
import Rating from './Rating'
import {Card, Button} from 'react-bootstrap'
import EditMovie from './EditMovie'
import {editMovie, deleteMovie} from '../Js/actions/actions'


function MovieCard({ movie,  deleteMovie = () => {}, editMovie = () => {} }) {
    return (
        <div className="container">
        <Card>
            <Card.Img variant="top" src={movie.image}  />
            <Card.Body>
                <Card.Title><h5>{movie.title}</h5></Card.Title>
                {/* <Card.Text>{`Date de Sortie: ${movie.year}`}</Card.Text> */}
           </Card.Body>
           <Card.Footer className='card-footer'>
               <small className="text-muted">
                   <Rating stars={movie.rate}/>
                   <span className='btn-card'>
                   <EditMovie oldmovie={movie} editMovie={editMovie}/>
                   <Button variant="primary" size="sm" onClick={()=> deleteMovie(movie.id)}>Delete</Button>
                   </span>
               </small>   
           </Card.Footer>
       </Card>  
        </div>
    )
}

  const mapDispatchToProps = dispatch => {
    return {
        editMovie: payload => dispatch(editMovie(payload)),
        deleteMovie : (payload)=> dispatch(deleteMovie(payload))

    }
  }
  
  export default connect(null, mapDispatchToProps)(MovieCard)
