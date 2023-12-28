import { Container } from "@mui/system";
import React from "react";
import "../Styles/KeySkillTemp.css";

const KeySkillTemp = (props) => {
  return (
    <Container>
      {/* Render a list item with the skill text */}
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default KeySkillTemp;
