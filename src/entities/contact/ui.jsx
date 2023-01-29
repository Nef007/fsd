import Tagify from "shared/ui/Tagifi";
import React from "react";
import Button from "shared/ui/buttons";

import Field from "shared/ui/inputs";
import { Form } from "react-bootstrap";

export const columnsContact = (onEdit = () => {}, onDelete = () => {}) => [
  {
    name: <em className="fa fa-cog"></em>,
    render: (record) => (
      <>
        <Button.Edit onClick={() => onEdit(record)} />{" "}
        <Button.Delete onClick={() => onDelete(record.id)} size="xl" />
      </>
    ),
    className: "width-10",
  },
  {
    name: "ID",
    dataIndex: "id",
    className: "hidden-xs width-10",
    sorter: true,
  },
  {
    name: "Имя",
    dataIndex: "firstname",
    className: "width-10",
    sorter: true,
  },
  {
    name: "Почта",
    dataIndex: "email",
    className: "width-20",
  },
  {
    name: "Телефон",
    dataIndex: "phone",
    className: "width-20",
  },
  {
    name: "Теги",
    className: "width-20",
    render: (record) => (
      <Tagify
        // key={Date.now()}
        key={record.id}
        defaultValue={record.tags}
      />
    ),
  },
];

export const ContactForm = ({ form, id, onSubmit }) => {
  return (
    <Form id={id} onSubmit={onSubmit}>
      <Field.Input
        label="Имя"
        name="firstname"
        onChange={form.handleChange}
        value={form.values.firstname}
      />
      <Field.Input
        label="Почта"
        name="email"
        type="email"
        onChange={form.handleChange}
        value={form.values.email}
      />
      <Field.Input
        label="Телефон"
        name="phone"
        type="tel"
        onChange={form.handleChange}
        value={form.values.phone}
      />
      <Field label="Теги">
        <Tagify
          name="tags"
          onChange={form.handleChange}
          value={form.values.tags}
        />
      </Field>
    </Form>
  );
};
