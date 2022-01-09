import React from "react";
import CreateApplicant from "../../components/create";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdbreact";

const UserDetails = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>User Details</h1>
      <MDBBtn
        type="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </MDBBtn>
      <CreateApplicant />
    </>
  );
};

export default UserDetails;
