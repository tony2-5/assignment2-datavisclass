import React, {Component} from "react"

class Skills extends Component {
  render() {
    return (
      <div class="inner-flex">
        <h2><em>Key Skills</em></h2>
        <div id="keyskills">
          <div>
            {this.props.skills.group1.map(skill => {return <p>{skill}</p>})}
          </div>
          <div>
            {this.props.skills.group2.map(skill => {return <p>{skill}</p>})}
          </div>
          <div>
            {this.props.skills.group3.map(skill => {return <p>{skill}</p>})}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills