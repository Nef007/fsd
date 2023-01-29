import React from "react";
import Form from "react-bootstrap/Form";

const Input = ({ label, ...props }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}:</Form.Label>
      <Form.Control autoComplete="disabled" type="text" {...props} />
    </Form.Group>
  );
};

const Field = ({ label, children }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}:</Form.Label>
      {children}
    </Form.Group>
  );
};

Field.Input = Input;

export default Field;
