import { Container } from "@mui/system";
import React from "react";
import "../Styles/ExperienceTemp.css";

const ExperienceTemp = (props) => {
  return (
    <Container className="experience-temp">
      {/* Render a list item */}
      <li className="experience-temp">
        {/* Render the experience details */}
        <h3 className="experience-heading">
          {/* Render the job title */}
          {props.experience.jobTitle}{" "}
          {/* Render the organization name */}
          <span className="experience-org-name">
            {props.experience.organizationName}
          </span>
          {/* Render the start and end year */}
          <span className="experience-start-end">
            ({props.experience.startYear} - {props.experience.endYear})
          </span>
        </h3>
      </li>
    </Container>
  );
};

export default ExperienceTemp;
