import React from "react";

class StudentCard extends React.Component {
  render() {
    const { name, marks } = this.props;
    return (
      <>
        <h3>Hi {name}</h3>
        <h3>Marks: {marks}</h3>
      </>
    );
  }
}

export default StudentCard;
