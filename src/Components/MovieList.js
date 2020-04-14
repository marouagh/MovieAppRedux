import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { connect } from "react-redux";



class MovieList extends Component {
    render() {
        return (
            <div className="card-columns">
            {this.props.movies.map(el =>
            <MovieCard 
            key={el.id} 
            movie={el}
            /> 
            )}
   
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      moviesData: state.moviesData,
    }
  }
export default connect(mapStateToProps)(MovieList)
