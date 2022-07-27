import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { createUser } from "../../data/api";
import { useDispatch } from "react-redux";
import { updateToken } from "../../features/jwt/jwtSlice";

function CreateAccountForm({ setShowCreateAccountForm }) {
  const [account, setAccount] = useState({
    fullName: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [formErrors, setFormErrors] = useState({
    errorsExist: false,
    errorMessage: "",
  });
  // Will show any API errors after submission.
  const [badRequest, setBadRequest] = useState([]);
  const dispatch = useDispatch();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (!isFormInputValid()) return;

    try {
      const token = await createUser(account);
      dispatch(updateToken(token));
    } catch (error) {
      setBadRequest(error.response.data.errors);
    }
  };

  const isFormInputValid = () => {
    if (account.password !== account.passwordConfirm) {
      // Display form error
      setFormErrors({
        errorsExist: true,
        errorMessage: "Passwords do not match",
      });

      return false;
    } else if (containsSpecialCharacters(account)) {
      setFormErrors({
        errorsExist: true,
        errorMessage:
          "No special characters allowed in your name, or username!",
      });

      return false;
    }
    return true;
  };

  const containsSpecialCharacters = (account) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (
      specialChars.test(account.fullName) ||
      specialChars.test(account.username)
    )
      return true;
    return false;
  };

  // Update state by pulling the ID and value of the input being changes and updating our state.
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAccount({
      ...account,
      // Sanitize inputs based on field.
      [id]: sanitizeInput(id, value),
    });
  };

  const sanitizeInput = (id, value) => {
    if (id === "password" || id === "passwordConfirm") {
      return value;
    } else if (id === "username") {
      return value.trim().toLowerCase();
    } else {
      return value;
    }
  };

  return (
    <div className="formBackdrop">
      <form
        action=""
        className="CreateAccountForm"
        onSubmit={(e) => handleCreateAccount(e)}
      >
        <p
          className="close-icon"
          onClick={() => setShowCreateAccountForm(false)}
        >
          {<FontAwesomeIcon icon={faClose} />}
        </p>
        <p>Create Account</p>
        <input
          value={account.fullName}
          type="text"
          id="fullName"
          onChange={handleInputChange}
          placeholder="Full name"
          minLength="4"
          maxLength="100"
          required
        />

        <input
          value={account.username}
          type="text"
          id="username"
          onChange={handleInputChange}
          placeholder="Username"
          minLength="4"
          maxLength="100"
          required
        />

        <input
          value={account.password}
          type="password"
          id="password"
          onChange={handleInputChange}
          placeholder="Password"
          minLength="4"
          maxLength="100"
          required
        />
        <input
          value={account.passwordConfirm}
          type="password"
          id="passwordConfirm"
          onChange={handleInputChange}
          placeholder="Confirm password"
          minLength="4"
          maxLength="100"
          required
        />
        {/* If passwords don't match on submission - ask user to fill again */}
        {formErrors.errorsExist ? (
          <p className="submissionError">{formErrors.errorMessage}</p>
        ) : null}
        {/* Prints any errors generated from API */}
        {badRequest.map((submissionError, i) => {
          return (
            <p key={i} className="submissionError">
              {submissionError.msg}
            </p>
          );
        })}
        <input type="submit" className="btn" />
      </form>
    </div>
  );
}

export default CreateAccountForm;
