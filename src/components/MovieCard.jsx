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
    };
  }
  render() {
    return (
      <div className="main">
        <div className="left">
          <img src="" alt="movie-image" />
        </div>
        <div className="right">
          <div className="movie-title">{this.state.title}</div>
          <div className="movie-description">{this.state.desc}</div>
          <div className="movie-prive">{this.state.price}</div>

          {/* footer */}
          <div className="footer">
            <div>Rating:{this.state.rating}</div>

            <div>
              <span className="btn"> + </span>
              <span className=""> * </span>
              <span className="btn"> - </span>
              <span>{this.state.star}</span>
            </div>

            <div style={{ display: "flex" }}>
              <button style={{ padding: "5px" }}>Favorite</button>
              <button style={{ marginLeft: "10px", padding: "5px" }}>
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
