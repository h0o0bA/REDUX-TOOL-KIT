import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const UserInfo = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ margin: "0 auto" }}>
      <h1 className="h1 text-center mb-4">Get a Quote</h1>

      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" style={{ margin: "0 auto" }}>
            <form
              name="basic"
              labelCol={{
                span: 2,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div>
                <MDBInput
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  className="grey-text"
                  label="Business Name"
                  name="businessName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your business name!",
                    },
                  ]}
                />
                <MDBInput
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  label="Contact Email"
                  name="contactEmail"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                />
              </div>
              <div className="text-center">
                <MDBBtn
                  type="primary"
                  htmlType="submit"
                  onClick={() => {
                    navigate("user_details");
                  }}
                  color="primary"
                >
                  Next
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default UserInfo;
