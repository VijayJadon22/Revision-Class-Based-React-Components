import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers",
          desc: "The newest additon to marvel universe",
          price: 300,
          poster:
            "https://th.bing.com/th/id/OIP.vEkljgJ1qVoCcf2DRqSRnwHaLH?rs=1&pid=ImgDetMain",
          rating: 8.5,
          star: 0,
          fav: false,
          inCart: false,
        },
        {
          title: "The Liliput",
          desc: "The newest additon to marvel universe",
          price: 300,
          poster:
            "https://th.bing.com/th/id/OIP.vEkljgJ1qVoCcf2DRqSRnwHaLH?rs=1&pid=ImgDetMain",
          rating: 8.5,
          star: 0,
          fav: false,
          inCart: false,
        },
        {
          title: "The Lets go",
          desc: "The newest additon to marvel universe",
          price: 300,
          poster:
            "https://th.bing.com/th/id/OIP.vEkljgJ1qVoCcf2DRqSRnwHaLH?rs=1&pid=ImgDetMain",
          rating: 8.5,
          star: 0,
          fav: false,
          inCart: false,
        },
      ],
      // this.addStar = this.addStar.bind(this); //if we want to use normal fucntion (not arrow function then we need to bind that function with this to access state) but no need for arrow functions
    };
  }

  addStar = (index) => {
    this.setState({
      movies: this.state.movies.map((movie, i) =>
        i === index
          ? { ...movie, star: movie.star < 5 ? movie.star + 1 : movie.star }
          : movie
      ),
    });
  };

  toggleFavorite = (index) => {
    this.setState({
      movies: this.state.movies.map((movie, i) =>
        i === index ? { ...movie, fav: !movie.fav } : movie
      ),
    });
  };

  toggleInCart = (index) => {
    this.setState({
      movies: this.state.movies.map((movie, i) =>
        i === index ? { ...movie, inCart: !movie.inCart } : movie
      ),
    });
  };
  render() {
    // const { title, desc, price, poster, rating, star, fav, inCart } =
    //   this.state;
    return (
      <div className="container">
        {this.state.movies.map((movie, index) => (
          <MovieCard
            key={index}
            index={index}
            movieDetails={movie}
            toggleFavorite={this.toggleFavorite}
            toggleInCart={this.toggleInCart}
            addStar={this.addStar}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
