import React from "react";
import { useCreateCommercialApplicantMutation } from "../../services/commercialApplicant";
import { MDBBtn } from "mdbreact";
const CreateApplicant = () => {
  const [createApplicant, responseInfo] =
    useCreateCommercialApplicantMutation();
  console.log("Response Information", responseInfo);
  console.log("Data: ", responseInfo.data);
  console.log("Success:", responseInfo.isSuccess);
  return (
    <>
      <MDBBtn
        type="primary"
        onClick={() => {
          createApplicant({
            buisnessName: "ABC Consulting",
            contactEmail: "myemail@email.com",
            grossAnnualSales: 50000,
            annualPayroll: 250000,
            numEmployess: 2,
            industryId: "10537",
            locations: [
              {
                zip: "45202",
              },
            ],
          });
        }}
      >
        Create Applicant
      </MDBBtn>
    </>
  );
};

export default CreateApplicant;
