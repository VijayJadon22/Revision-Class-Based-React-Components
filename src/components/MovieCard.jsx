import React from "react";
import "../App.css";
class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      desc: "The newest additon to marvel universe",
      price: 300,
      poster:
        "https://th.bing.com/th/id/OIP.vEkljgJ1qVoCcf2DRqSRnwHaLH?rs=1&pid=ImgDetMain",
      rating: 8.5,
      star: 0,
      fav: false,
      inCart: false,
    };
    this.addStar = this.addStar.bind(this); //if we want to use normal fucntion (not arrow function then we need to bind that function with this to access state) but no need for arrow functions
  }

  addStar() {
    if (this.state.star == 5) {
      return;
    }
    this.setState({ star: this.state.star + 1 }); //this.setState will re-render the ui when we make changes to state
    console.log("Star added", this.state.star);
  }

  toggleFavorite = () => {
    this.setState({ fav: !this.state.fav });
  };

  toggleInCart = () => {
    this.setState({ inCart: !this.state.inCart });
  };

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
      this.state;
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
              <button onClick={this.toggleFavorite} style={{ padding: "5px" }}>
                {fav ? "UnFavorite" : "Favorite"}
              </button>
              <button
                onClick={this.toggleInCart}
                style={{ marginLeft: "10px", padding: "5px" }}
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
