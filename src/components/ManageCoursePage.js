import React from "react";

function ManageCoursePage(props) {
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </>
  );
}

export default ManageCoursePage;
