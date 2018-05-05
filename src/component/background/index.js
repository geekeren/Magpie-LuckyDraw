import React, { Component } from 'react';
import Particles from 'react-particles-js'
import logo from './bg.jpeg';

class Background extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
                value_area: 3200
              }
            },
            color: {
              value: "#0FF"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: 1,
                speed: 10,
                opacity_min: .5,
                sync: !1
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: !1,
                speed: 20,
                size_min: 1,
                sync: true
              }
            },
            line_linked: {
              enable: !0,
              distance: 120,
              color: "#FF0",
              opacity: .6,
              width: 1,
            },
          },
        }}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover'
        }}
      />
    );
  }
}

export default Background;
