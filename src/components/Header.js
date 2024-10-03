import React, {Component} from "react"

class Header extends Component {
  render() {
    return (
    <div id="header">
      <div id="name">
        <h1>{this.props.personInfo.name}</h1>
        <h1 id="field">{this.props.personInfo.field}</h1>
      </div>
      <div id="info">
        <p>Email: {this.props.contactInfo.email}</p>
        <p>Web: <a href={this.props.contactInfo.website}>{this.props.contactInfo.website}</a></p>
        <p>Mobile: {this.props.contactInfo.mobile}</p>
      </div>
    </div>
    );
  }
}

export default Header;