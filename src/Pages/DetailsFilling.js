import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import FillDetails from "../Components/FillDetails";
import Qualification from "../Components/Qualification";
import AddSkills from "../Components/KeySkills";
import PersonalDetails from "../Components/PersonalDetails";
import TemplatePreview from "../Components/TemplatePreview";
import FillWork from "../Components/WorkExperience";
import "../Styles/DetailsFilling.css";

const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <FillDetails tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalDetails setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <AddSkills setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <FillWork setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <Qualification setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <TemplatePreview setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
