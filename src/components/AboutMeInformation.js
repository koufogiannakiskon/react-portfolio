import React from "react";
import WorkExperience from "./WorkExperience";
import { Typography } from "@mui/material";

function AboutMeInformation() {
  return (
    <div className="row second_row">
      <Typography paragraph>
        My interest in programming started in my freshman year, as a Physics
        student. There, I was intrigued by the course <i>Computer Science I</i>
        so I decided to follow the specialization on Computers, Electronics,
        Automation & Telecommunications. During my studies, I excelled in
        courses such as Computer Science II, Computer Systems, Signals and
        Systems. My biggest academic achievement was my diploma thesis "Dynamic
        Programming and its Application to Problems (with python)". Since then,
        I am continuously working to expand and strengthen my skill set.
      </Typography>
      <WorkExperience />
    </div>
  );
}

export default AboutMeInformation;
