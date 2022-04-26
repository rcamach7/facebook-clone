import logo from "../assets/fbLoginLogo.svg";
import { useState } from "react";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="SignIn">
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
        <button className="login-btn" type="button">
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
