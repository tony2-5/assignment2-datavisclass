import React, {Component} from "react"

class Education extends Component {
  render() {
    return (
      <div id="last-inner-flex" class="inner-flex">
        <h2><em>Education</em></h2>
        <div id="education">
          <div>
            <h3>{this.props.education.education1.school}</h3>
            {this.props.education.education1.info.map(schoolInfo=>{return <p>{schoolInfo}</p>})}
          </div>
          <div class="bottom-section-div">
            <h3>{this.props.education.education2.school}</h3>
            {this.props.education.education2.info.map(schoolInfo=>{return <p>{schoolInfo}</p>})}
          </div>
        </div>
      </div>
    );
  }
}

export default Education