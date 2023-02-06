import { Component } from "react";

class Immagine extends Component {
  render() {
    return (
      <div>
        <img src={this.props.link} alt={this.props.alt} />
      </div>
    );
  }
}

export default Immagine;
