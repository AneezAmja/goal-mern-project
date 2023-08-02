import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData; //destructuring

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const onSubmit = (e) => {
    e.preventDefault()

    console.log("hey");
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please create an account</p>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="from-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="from-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
