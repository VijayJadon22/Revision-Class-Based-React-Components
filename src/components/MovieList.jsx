import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
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
  render() {
    // const { title, desc, price, poster, rating, star, fav, inCart } =
    //   this.state;
    return (
      <div className="container">
        <MovieCard
          movieDetails={this.state}
          toggleFavorite={this.toggleFavorite}
          toggleInCart={this.toggleInCart}
        />
      </div>
    );
  }
}

export default MovieList;
