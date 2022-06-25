import React, { useState } from "react";
import { updateName } from "../../assets/api";
import { setUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

export default function EditNameForm({ setShowEditNameForm, fullName }) {
  const dispatch = useDispatch();
  const [newFullName, setNewName] = useState({
    fullName: fullName,
  });

  const handleNameChange = async (e) => {
    e.preventDefault(e);
    // Avoid making a request if there are no changes to user's name.
    if (fullName !== newFullName.fullName) {
      try {
        const user = await updateName(newFullName.fullName);
        setShowEditNameForm(false);
        dispatch(setUser(user));
      } catch (error) {
        console.log(error);
        alert(`Error occurred while changing name`);
      }
    }
    setShowEditNameForm(false);
  };

  return (
    <form className="EditNameForm" onSubmit={(e) => handleNameChange(e)}>
      <input
        type="text"
        value={newFullName.fullName}
        id="fullName"
        onChange={(e) =>
          setNewName({
            [e.target.id]: e.target.value,
          })
        }
        autoComplete="false"
        minLength="4"
        required
      />
      <input id="submitBtn" type="submit" />
    </form>
  );
}
