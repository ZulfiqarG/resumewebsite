import { FormControl, FormHelperText } from "@mui/material";
import React from "react";
import "../Styles/SelectComponent.css";

const SelectComponent = (props) => {
  // Render a select component
  return (
    <div className="select-component">
      {/* Render the title for the select component */}
      <p className="select-title">{props.title}</p>
      
      {/* Wrap the select component with a FormControl */}
      <FormControl fullWidth error={props.error}>
        {props.children}
        
        {/* Render helper text for displaying error message */}
        <FormHelperText>{props.errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
