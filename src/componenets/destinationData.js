import { Component } from "react";
// import Mountain1 from "../assets/volcano1.jpg";
// import Mountain2 from "../assets/volcano2.jpg";
// import Mountain3 from "../assets/volcano3.jpg";
// import Mountain4 from "../assets/volcano4.jpg";
import "./destinationStyle.css";

class DestenationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="desc-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}

export default DestenationData;
