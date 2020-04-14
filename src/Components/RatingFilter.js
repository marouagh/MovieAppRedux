import React from 'react'
import Rating from './Rating'
import {connect} from 'react-redux'
import {searchRatingMovie} from'../Js/actions/actions'

const RatingFilter = ({stars, handleChangeRating =()=>{}}) => (
    <div className="rating-filter">
        <span><Rating stars={stars} handleChangeRating={(myRating) => {handleChangeRating(myRating)}}/></span>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
      
       handleChangeRating : payload => dispatch (searchRatingMovie (payload))
  
    }
  }
  
export default connect(null, mapDispatchToProps)(RatingFilter);
