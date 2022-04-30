import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadingUx() {
  return (
    <div className="LoadingUx">
      <FontAwesomeIcon icon={faSpinner} className="loadingUx-icon" />
    </div>
  );
}
