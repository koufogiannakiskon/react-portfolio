import React from "react";
import { jobItems } from "../utils/workExperienceArray.js";

function WorkExperience() {
  return (
    <>
      {jobItems.map((item) => (
        <article className="experience_paragraph" key={item.name}>
          <span className="date">
            {item.position} |&nbsp;
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: `${item.color}` }}
            >
              {item.company}
            </a>
            &nbsp;| {item.date}
          </span>
          <p>{item.details}</p>
        </article>
      ))}
    </>
  );
}

export default WorkExperience;
