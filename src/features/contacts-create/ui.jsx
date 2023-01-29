import React from "react";
import { ContactForm } from "entities/contact";
import { Modal } from "shared/ui/Modal";
import { useFormik } from "formik";
import { createContactFx } from "entities/contact";

export const ContactCreate = ({ active, setActive }) => {
  let formId = "create_contact";
  let title = "Создание контакта";
  let defaultValue = { firstname: "", email: "", phone: "", tags: [] };

  const form = useFormik({
    initialValues: defaultValue,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      createContactFx(values);
      setActive();
      form.resetForm();
    },
  });

  return (
    <Modal title={title} active={active} onClose={setActive} form={formId}>
      <ContactForm form={form} id={formId} onSubmit={form.handleSubmit} />
    </Modal>
  );
};
