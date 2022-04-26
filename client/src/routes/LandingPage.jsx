import logo from "../assets/fbLoginLogo.svg";
import { useState } from "react";
import { getToken } from "../assets/api";

const LandingPage = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Checks if we are using a test account or not.
      let token = await getToken(account);
      // Saves new token from log-in, refreshes webpage, and allows app to detect and log in user provided the saved token.
      localStorage.setItem("token", token);
      window.location.reload();
    } catch (error) {
      // Catch and display any login errors from API
      setErrors(true);
    }
  };

  return (
    <div className="SignIn">
      <aside>
        <img src={logo} alt="" />
        <p>Connect with friends and the world around you on Facebook.</p>
      </aside>

      <form onSubmit={(e) => handleLogin(e, false)}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={account.email}
          onChange={(e) =>
            setAccount({ ...account, [e.target.id]: e.target.value })
          }
          minLength="4"
          maxLength="100"
          autoComplete="off"
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={account.password}
          onChange={(e) =>
            setAccount({ ...account, [e.target.id]: e.target.value })
          }
          minLength="4"
          maxLength="100"
          autoComplete="off"
          required
        />
        <button className="login-btn" type="submit">
          Log In
        </button>
        {errors ? (
          <p style={{ color: "red" }}>Invalid username or password</p>
        ) : null}
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