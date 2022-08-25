import React from "react";


interface props {
    title: string
    date: string
    content: Array<string>
    url: string
}

const ResumeContent = (props: props) => {

  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"} >
        <b>{props.title}</b>
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
