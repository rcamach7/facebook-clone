import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getToken } from "../data/api";
import { CreateAccountForm } from "../components/forms/";
import { useDispatch } from "react-redux";
import { updateToken } from "../features/jwt/jwtSlice";

const LandingPage = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);

  const [loadingUx, setLoadingUx] = useState(false);
  const [errors, setErrors] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e, useTestAccount) => {
    e.preventDefault();
    setLoadingUx(true);
    try {
      let token = await getToken(
        // Checks if we are using a test account or not.
        useTestAccount ? { username: "foobar", password: "test" } : account
      );
      dispatch(updateToken(token));
    } catch (error) {
      // Catch and display any login errors from API
      setLoadingUx(false);
      setErrors(true);
    }
  };

  return (
    <div className="SignIn">
      <aside>
        <img
          src="https://res.cloudinary.com/de2ymful4/image/upload/v1650948572/facebook/assets/fbLoginLogo_yxu1bn.svg"
          alt=""
        />
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
        {/* Populate errors, if any */}
        {errors && <p style={{ color: "red" }}>Invalid username or password</p>}

        <button className="login-btn" type="submit">
          Log In
        </button>

        <button
          className="login-btn"
          type="button"
          onClick={(e) => handleLogin(e, true)}
        >
          Use test account
        </button>

        <button type="button" disabled>
          Forgot password?
        </button>

        <button
          className="newAccount-btn"
          type="button"
          onClick={() => setShowCreateAccountForm(true)}
        >
          Create new account
        </button>

        {/* UX Loading spinner */}
        {loadingUx && (
          <div className="loadingUx">
            <FontAwesomeIcon icon={faSpinner} className="loadingIcon" />
          </div>
        )}
      </form>

      {/* Popup form to create account */}
      {showCreateAccountForm && (
        <CreateAccountForm
          setShowCreateAccountForm={setShowCreateAccountForm}
        />
      )}
    </div>
  );
};
export default LandingPage;
