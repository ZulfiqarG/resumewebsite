import React from "react";
import "../Styles/HeadingTemp.css";

const HeadingTemp = (props) => {
  return (
    <div>
      {/* Render the heading title with color specified by props.color */}
      <h2
        style={{ color: props.color }}
        className="professional-experience-heading"
      >
        {props.title}
      </h2>
      
      {/* Render a horizontal line with background color specified by props.color */}
      <hr
        style={{ backgroundColor: props.color }}
        className="vertical-line"
      />
    </div>
  );
};

export default HeadingTemp;
