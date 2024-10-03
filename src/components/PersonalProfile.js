import React, {Component} from "react"

class PersonalProfile extends Component {
  render() {
    return (
    <div class="inner-flex">
      <h2><em>Personal Profile</em></h2>
      <p>{this.props.personalProfile}</p>
    </div>
    );
  }
}

export default PersonalProfile