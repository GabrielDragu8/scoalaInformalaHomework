import React from "react";

const ListItem = ({ name, jobTitle, imageLink }) => {
  return (<div className="ListItem">
    <div className="divImage"><img className="empImage" src={imageLink}/></div>
    <div className="divText"><p className="name">{name}</p>
    <p className="jobTitle">{jobTitle}</p></div>
  </div>
  );
}

export default ListItem;