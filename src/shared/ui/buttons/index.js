import React from "react";
import { Button as ButtonRB } from "react-bootstrap";

const Primary = ({ children, ...props }) => {
  return (
    <ButtonRB variant="primary" size="sm" {...props}>
      {children}
    </ButtonRB>
  );
};

const Edit = ({ children, ...props }) => {
  return (
    <ButtonRB variant="primary" {...props}>
      <em className="fa fa-pencil"></em>
    </ButtonRB>
  );
};

const Delete = ({ children, ...props }) => {
  return (
    <ButtonRB variant="danger" size="sm" {...props}>
      <em className="fa fa-trash"></em>
    </ButtonRB>
  );
};

const Button = ({ children, ...props }) => {
  return <ButtonRB {...props}>{children}</ButtonRB>;
};

Button.Primary = Primary;
Button.Delete = Delete;
Button.Edit = Edit;

export default Button;
