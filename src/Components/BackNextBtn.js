import { Button, CircularProgress } from "@mui/material";
import React from "react";
import "../Styles/BackNextBtn.css";

const BackNextBtn = (props) => {
  return (
    <div className="use-buttont">
      {/* Render the back button if the tab is not the first one */}
      {props.tab === 0 ? null : (
        <Button
          onClick={props.onBack}
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined">
          {props.backTitle}
        </Button>
      )}
      {/* Render the next button with either a loading indicator or the button text */}
      {props.loading ? (
        <CircularProgress size={25} />
      ) : (
        <Button type="submit" className="contained-btn" variant="contained">
          {props.nextTitle}
        </Button>
      )}
    </div>
  );
};

export default BackNextBtn;
