import React from "react";
import Form from "./data/form.js";
import Persons from "./data/persons.js";

function EditProfile() {
  return (
    <div className="editprofile-data">
      <Persons />
      <Form />
    </div>
  );
}

export default EditProfile;
