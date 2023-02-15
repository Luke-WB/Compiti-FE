import { Component } from "react";
import CardMovie from "./CardMovie";
import { Link } from "react-router-dom";

class SecondCard extends Component {
  state = {
    cover: [],
  };
  componentDidMount = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=fa8d42b&type=movie&s=Marvel&plot=full");
      if (response.ok) {
        const data = await response.json();
        this.setState({ cover: data.Search });
        console.log(this.state.cover);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <>
        <h4 className="my-4">Marvel Saga</h4>
        <div className="d-flex  flex-wrap flex-lg-nowrap justify-content-between">
          <Link to="/movie-details/:movieId">
            {this.state.cover.map((mov) => (
              <CardMovie movie={mov} />
            ))}
          </Link>
        </div>
      </>
    );
  }
}

export default SecondCard;
