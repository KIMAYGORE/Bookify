import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      sendAutoReply(credentials.userName, credentials.email, credentials.password);

      if (!res.ok) {
        toast.success("Already Registered");//alert(result.message);
      } else {
        toast.success("Registered Successfully");
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");

    } catch (err) {
      toast.error(err.message);
      // alert(err.message);
    }
  };


  const sendAutoReply = (userName, email, password) => {

    emailjs
      .send(
        "service_w8gippe",
        "template_u0ge4po",
        {
          username: userName,
          to_email: email,
          password: password,
        },
        "wTamXj6bpgewboYfe"
      )
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          console.log("Email sent successfully", result);
        } else {
          console.log("Email sending failed", result);
        }


        // Optionally show a success toast or message for the auto-reply
      })
      .catch((error) => {
        console.error(error.text);
        console.log("email sent failed");
      });
  };



  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      pattern="^[a-zA-Z\s]{3,20}$"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>

                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>

            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
