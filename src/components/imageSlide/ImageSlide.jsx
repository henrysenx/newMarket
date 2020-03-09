import React, { Component } from "react";
import "./ImageSlide.scss";
import Card from "../card/Card";
import datas from "../../data/datas";

class ImageSlide extends Component {
  state = {
    properties: datas.properties,
    property: datas.properties[0],
    property1: datas.properties[0],
    test: 0,
    test2: 10
  };
  componentDidMount() {
    setInterval(this.nextProperty, 4000);
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    let vet = this.state.test + 1;
    this.setState({
      property: datas.properties[newIndex],
      test: vet
    });
    if (this.state.property.index === this.state.properties.length - 1) {
      this.setState({
        property: datas.properties[0],
        test: 0
      });
    }
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    let dent = this.state.test2 - 1;
    this.setState({
      property: datas.properties[newIndex],
      test2: dent
    });
    if (this.state.property.index === 0) {
      this.setState({
        property: datas.properties[this.state.properties.length - 1],
        test2: 10
      });
    }
  };
  render() {
    const { properties, property } = this.state;

    return (
      <div className="App">
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlide;
