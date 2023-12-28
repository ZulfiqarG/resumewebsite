import { Paper, Divider, Button } from "@mui/material";
import React, { useState } from "react";
import InputField from "./InputField";
import "../Styles/KeySkills.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import UseButton from "./BackNextBtn";
import { connect } from "react-redux";
import { addNewSkills, deleteSkill, editSkill } from "../Redux/actions";
import { useForm } from "react-hook-form";

// Map Redux state to component props
const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
});

// Map Redux dispatch to component props
const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
});

function KeySkills(props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle preview button click
  const handlePreview = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // Handle back button click
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  // Handle editing a skill
  const onEditSkill = (value, id) => {
    const newSkills = props.skills.map((skill, index) => {
      if (index === id) {
        return value;
      } else return skill;
    });

    props.onEditSkill(newSkills);
  };

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.skills.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                <InputField
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditSkill(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {props.skills.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {props.skills.length >= 6 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}
          >
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
        <UseButton
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(KeySkills);
