// example Layout.js
import React, { Component } from "react";

// export default ({ src, autoPlay, loop }) => (
//   <video
//     style={{
//       width: "100%",
//       height: "110vh",
//       // objectFit: "cover"
//     }}
//     autoPlay
//     loop
//     onClick={e => this.refs.vidRef.play()}
//     ref="vidRef"
//   >
//     <source src={src} type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
// );

export default class Video extends Component {
  playVideo() {
    this.refs.vidRef.play();
  }
  // autoPlay

  render() {
    let { src, autoPlay, loop } = this.props
    return (
      <video
        style={{
          width: "100%",
          height: "110vh"
          // objectFit: "cover"
        }}
        loop
        onClick={e => this.playVideo()}
        ref="vidRef"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
}
