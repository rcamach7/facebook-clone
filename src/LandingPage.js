import "./styles/SignIn.css";
import { getFirebaseConfig } from "./data/config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import logo from "./assets/fbLoginLogo.svg";
import { Navigate } from "react-router-dom";

const firebaseApp = initializeApp(getFirebaseConfig());
const auth = getAuth(firebaseApp);

const LandingPage = () => {
  const [user, setUser] = useState();
  const firebaseApp = initializeApp(getFirebaseConfig());
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <div className="LandingPage">
      {user ? <Navigate to="/facebook-clone/home" /> : <SignInForm />}
    </div>
  );
};

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
  };

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
        <button type="button"> Forgot password?</button>
        <button className="newAccount-btn" type="button">
          Create new account
        </button>
      </form>
    </div>
  );
};
export default LandingPage;
