import React from 'react';

class CourseOverview extends React.Component{
  render() {
      const styles = {
          courseitem: {
              display: 'flex',
              flexDirection: 'column',
              border: 'solid',
              width: '30%',
              padding: '10px;'
          },
          courseitem_top: {
              display: 'flex'
          },
          courseitem_bottom: {
              display: 'flex'
          },
          courseitem_review: {
              border: "solid",
              marginLeft: "10px",
              padding: "5px"
          }
      }

      return (
          <div style={styles.courseitem} >

              <div style={styles.courseitem_top}>
                  <h3>CPSC 110</h3>
                  &nbsp; &nbsp;
                  <h3>Computation, Programs and Programming</h3>
              </div>
              <div style={styles.courseitem_bottom}>
                  <div><h4>Overall Rating 4/5</h4></div>
                  <div style={styles.courseitem_review}><p>Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world.</p></div>
              </div>
          </div>
      );
  }
}

export default CourseOverview;
