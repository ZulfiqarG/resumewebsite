import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template1.css";
import TemplateHeader from "../Components/HeaderTemp";
import TemplateHeading from "../Components/HeadingTemp";
import TemplateOneExperienceComponent from "../Components/ExperienceTemp";
import { data } from "../Data/data";
import TemplateEducationComponent from "../Components/EducationTemp";
import TemplateKeySkillComponent from "../Components/KeySkillTemp";

const Template1 = (props) => {
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;
  // console.log(props.index);
  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <TemplateHeader
        primaryColor={"blue"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"blue"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"blue"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"blue"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template1;
