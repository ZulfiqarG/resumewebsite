import React from "react";
import "../Styles/EducationTemp.css";

const EducationTemp = (props) => {
  return (
    // Render education details using props
    <h3 className="education-temp-details">
      {props.education.degree} in {props.education.domain}{" "}
      
      {/* Render the university */}
      <span className="education-temp-university">
        {props.education.university}
      </span>
      
      {/* Render the start year and end year */}
      <span className="education-start-end">
        ({props.education.startYear} - {props.education.endYear})
      </span>
    </h3>
  );
};

export default EducationTemp;
