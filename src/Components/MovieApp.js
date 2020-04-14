import React, { Component} from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";
import RatingFilter from "./RatingFilter";
import NameFilter from "./NameFilter";
import AddMovie from "./AddMovie";
import WithLoading from "./WithLoading";


const MovieListWithLoading = WithLoading(MovieList);
class MovieApp extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  };

  render() {
    return (
      <div>
        <div className="input-group">
          <NameFilter/>
          <span className="input-group-text" id="basic-addon2">
            <RatingFilter
              stars={this.props.rateSearch}
              
            />
          </span>
        </div>
      
        <MovieListWithLoading
          isLoading={this.state.isLoading}
          movies={this.props.moviesData
            .filter((el) => el.rate >= this.props.rateSearch)
            .filter((elt) =>
              elt.title
                .toLowerCase()
                .includes(this.props.nameSearch.toLowerCase().trim())
            )}
        />

        <AddMovie Loading={this.state.isLoading} />
      
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    moviesData: state.moviesData,
    rateSearch:state.rateSearch,
    nameSearch:state.nameSearch
  }
}
export default connect(mapStateToProps)(MovieApp);
