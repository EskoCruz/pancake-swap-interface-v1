import React from "react";
import { Link } from "react-router-dom";
import getExternalLinkProps from "../../utils/getExternalLinkProps";
import { Button } from "../../components/Button";
import { ToastAction as Action } from "./types";

interface ToastActionProps {
  action: Action;
}

const ToastAction: React.FC<ToastActionProps> = ({ action }) => {
  if (action.url.startsWith("http")) {
    return (
      <Button as="a" scale="sm" href={action.url} {...getExternalLinkProps()}>
        {action.text}
      </Button>
    );
  }

  return (
    <Button as={Link} scale="sm" to={action.url}>
      {action.text}
    </Button>
  );
};

export default ToastAction;
