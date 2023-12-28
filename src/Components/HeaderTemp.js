import React from "react";
import "../Styles/HeaderTemp.css";

const HeaderTemp = (props) => {
  return (
    // Render the header with background color specified by props.bgColor
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="header-tem">
        <div className="header-tem-first">
          {/* Render profile image if available */}
          {props.personalInfo.profileImg.length > 0 ? (
            <div className="template-img-cont">
              <img
                className="template-profile-img"
                src={props.personalInfo.profileImg}
                alt="profile-img"
              />
            </div>
          ) : (
            // Render default profile image with background color specified by props.primaryColor
            <div
              style={{ backgroundColor: props.primaryColor }}
              className="template-img-cont"
            >
              <p
                style={{ color: props.bgColor }}
                className="template-img-text"
              >
                AM
              </p>
            </div>
          )}
          <div className="template-user-details-cont">
            {/* Render user name with color specified by props.primaryColor */}
            <h2
              style={{ color: props.primaryColor }}
              className="template-user-name"
            >
              {props.personalInfo.firstName + " " + props.personalInfo.lastName}
            </h2>
            {/* Render user designation with color specified by props.secondaryColor */}
            <p
              style={{ color: props.secondaryColor }}
              className="template-user-designation"
            >
              {props.workExperience[0].jobTitle}
            </p>
          </div>
        </div>
        {/* Render user address with color specified by props.primaryColor */}
        <p
          style={{ color: props.primaryColor }}
          className="header-tem-second"
        >
          {props.personalInfo.address}
        </p>
      </div>
      {/* Render user objective with color specified by props.secondaryColor */}
      <p
        style={{ color: props.secondaryColor }}
        className="template-user-about"
      >
        {props.personalInfo.objective}
      </p>
    </div>
  );
};

export default HeaderTemp;
