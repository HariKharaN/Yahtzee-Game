import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 6
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const {disabled} = this.props;
    let classes = `Die fas fa-dice-${
      this.props.numberWords[this.props.val - 1]
    } fa-5x `;
    if (this.props.locked) classes += "Die-locked ";
    if (this.props.rolling) classes += "Die-rolling ";
    return <i className={classes} onClick={this.handleClick} disabled={disabled} ></i>;
  }
}

export default Die;
