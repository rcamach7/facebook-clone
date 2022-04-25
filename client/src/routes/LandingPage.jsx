import logo from "../assets/fbLoginLogo.svg";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const LandingPage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="LandingPage">
      {user ? <Navigate to="/facebook-clone/home" /> : <SignInForm />}
    </div>
  );
};

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="SignIn" onSubmit={(e) => handleSignIn(e)}>
      <aside>
        <img src={logo} alt="" />
        <p>Connect with friends and the world around you on Facebook.</p>
      </aside>

      <form>
        <input
          type="text"
          placeholder="Email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Log In
        </button>
        <button className="login-btn" type="button" onClick={handleTestAccount}>
          Use test account
        </button>
        <button type="button"> Forgot password?</button>
        <button className="newAccount-btn" type="button">
          Create new account
        </button>
      </form>
    </div>
  );
};
export default LandingPage;
