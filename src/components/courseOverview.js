import React from "react";

class courseOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let course: this.props.course
    return (
      <div>
      <p>Overall Rating</p>
      <p>{course.rating}</p>
      <p>{course.code}</p>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return { Course: state.course };
}

export default connect(mapStateToProps, {courseItem })(courseOverview);
