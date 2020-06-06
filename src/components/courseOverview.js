import React from 'react';

class CourseOverview extends React.Component{
  render() {
      return (
          <div className="courseOverview" >

              <div>
                  <h3>CPSC 110</h3>
                  &nbsp; &nbsp;
                  <h3>Computation, Programs and Programming</h3>
              </div>
              <div>
                  <div className="rating"><h3>Overall Rating 4/5</h3></div>
                  <div className="reviewText"><p>Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world.</p></div>
              </div>
          </div>
      );
  }
}

export default CourseOverview;
