import React from "react";
import "../App.css";
class MovieCard extends React.Component {
  //   addStar = () => {
  //     // this.state.star += 1; //this wont re-render the component and hence wont updater on ui

  //     if (this.state.star == 5) {
  //       return;
  //     }
  //     this.setState({ star: this.state.star + 1 }); //this.setState will re-render the ui when we make changes to state
  //     console.log("Star added", this.state.star);
  //   };
  render() {
    const { title, desc, price, poster, rating, star, fav, inCart } =
      this.props.movieDetails;
    return (
      <div className="main">
        <div className="left">
          <img src={poster} alt="movie-image" />
        </div>
        <div className="right">
          <div className="movie-title">{title}</div>
          <div className="movie-description">{desc}</div>
          <div className="movie-prive">{price}</div>

          {/* footer */}
          <div className="footer">
            <div>Rating:{rating}</div>

            <div>
              <span className="btn" onClick={this.addStar}>
                {" "}
                +{" "}
              </span>
              <span className=""> * </span>
              <span className="btn"> - </span>
              <span>{star}</span>
            </div>

            <div style={{ display: "flex" }}>
              <button
                onClick={this.props.toggleFavorite}
                style={{ padding: "5px" }}
              >
                {fav ? "UnFavorite" : "Favorite"}
              </button>
              <button
                onClick={this.props.toggleInCart}
                style={{
                  marginLeft: "10px",
                  padding: "5px",
                  backgroundColor: inCart ? "red" : "green",
                }}
              >
                {inCart ? "Remove" : "Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
