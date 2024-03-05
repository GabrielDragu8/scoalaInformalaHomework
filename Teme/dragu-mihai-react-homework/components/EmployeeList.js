import React from "react";
import ListItem from "./EmployeeListitem";

const EmployeeList = () => {
  return <div className="EmployeeList">
    <>
      <ListItem name="James King" jobTitle="President and CEO" imageLink="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"></ListItem>
      <ListItem name="Julie Taylor" jobTitle="VP of Marketing" imageLink="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"></ListItem>
      <ListItem name="Eugene Lee" jobTitle="CFO" imageLink="https://as1.ftcdn.net/v2/jpg/01/92/16/04/1000_F_192160468_2ev2JYmocXi7pxbBiPsfNEVwDqmTTLYL.jpg"></ListItem>
      <ListItem name="John Williams" jobTitle="VP of Engineering" imageLink="https://as1.ftcdn.net/v2/jpg/03/02/88/46/1000_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"></ListItem>
      <ListItem name="Ray Moore" jobTitle="VP of Sales" imageLink="https://as2.ftcdn.net/v2/jpg/03/03/11/75/1000_F_303117590_NNmo6BS2fOBEmDp8uKs2maYmt03t8fSL.jpg"></ListItem>
      <ListItem name="Paul Jones" jobTitle="QA Manager" imageLink="https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"></ListItem>
    </>
  </div>
}

export default EmployeeList;