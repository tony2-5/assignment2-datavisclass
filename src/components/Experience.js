import React, {Component} from "react"

class Experience extends Component {
  render() {
    return (
      <div class="inner-flex">
        <h2><em>Work Experience</em></h2>
        <div id="jobs">
          <div>
            <h3>{this.props.jobs.job1.title}</h3>
            <ul>
              <li>{this.props.jobs.job1.bullet1}</li>
              <ul>
                <li>{this.props.jobs.job1.bullet2}</li>
                <li>{this.props.jobs.job1.bullet3}</li>
              </ul>
            </ul>
            <ul>
              <li>{this.props.jobs.job1.bullet4}</li>
              <ul>
                <li>{this.props.jobs.job1.bullet5}</li>
                <li>{this.props.jobs.job1.bullet6}</li>
              </ul>
            </ul>
          </div>
          <div>
            <h3>{this.props.jobs.job2.title}</h3>
            <ul>
              <li>{this.props.jobs.job2.bullet1}</li>
              <li>{this.props.jobs.job2.bullet2}</li>
            </ul>
          </div>
          <div class="bottom-section-div">
            <h3>{this.props.jobs.job3.title}</h3>
            <ul>
              <li>{this.props.jobs.job3.bullet1}</li>
              <li>{this.props.jobs.job3.bullet2}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience