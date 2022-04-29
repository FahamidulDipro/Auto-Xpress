import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  const from = location?.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  let displayError;
  if (error) {
    displayError = <p className="text-danger text-start">{error?.message}</p>;
  }
  return (
    <div>
      <div
        className="d-flex   justify-content-center w-100 container    p-3"
        style={{ marginTop: "100px" }}
      >
        <section>
          <h1 className="bg-dark text-light mb-0 p-3">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 border border-dark border-3 p-3"
          >
            <input
              {...register("email")}
              type="email"
              required
              placeholder="Email"
              className="form-control  p-2 mt-3"
              style={{ fontSize: "20px", background: "lightgrey" }}
            />
            {displayError}
            <br />
            <input
              {...register("password")}
              type="password"
              required
              placeholder="Password"
              className="form-control  p-2"
              style={{ fontSize: "20px", background: "lightgrey" }}
            />
            <br />

            <input
              type="submit"
              value="Login"
              className="w-100 p-2 bg-danger text-light border-0"
              style={{ fontSize: "20px" }}
            />
            <div className="d-flex justify-content-between">
              <div className="text-start mt-3">
                <Link
                  className="text-danger  text-decoration-none me-3"
                  to="/passwordReset"
                >
                  Forget your password?
                </Link>
              </div>
              <div className="text-end mt-3">
                <p className="text-decoration-none" to="/passwordReset">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-danger">
                    Please Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
