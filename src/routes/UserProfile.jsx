import React from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export const UserProfile = () => {
  const params = useParams();
  const { user } = useUserContext();
  return <div>UserProfile of {params.username}</div>;
};
