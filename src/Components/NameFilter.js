import React from 'react'
import { connect } from "react-redux";
import {searchNameMovie} from'../Js/actions/actions'

const NameFilter = ({handleChangeName = () => {}}) => (

          <div>
          <input type="text" 
                 className="form-control" 
                 placeholder="Search..." 
                 onChange={(event) =>handleChangeName(event.target.value)}/>
          
          </div>
)
const mapStateToProps = (state) => {
       return {
         moviesData: state.moviesData,
         rateSearch:state.rateSearch,
         nameSearch:state.nameSearch
       }
     }
     const mapDispatchToProps = dispatch => {
       return {     
              handleChangeName : payload => dispatch (searchNameMovie (payload))
       }
     }
     export default connect(mapStateToProps, mapDispatchToProps)(NameFilter);


