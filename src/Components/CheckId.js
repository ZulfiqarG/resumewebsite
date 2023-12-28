import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

// Map Redux state to component props
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

// Map Redux dispatch to component props
const mapDispatchToProps = (dispatch) => {
  return {};
};

// Component to check if a template is selected
const CheckId = (props) => {
  const selectedId = props.selectedTemplateId;
  // Render the children components if a template is selected
  // Otherwise, navigate to the home page
  return selectedId ? props.children : <Navigate to={"/"} />;
};

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(CheckId);
