import { Button, Modal as ModalRB } from "react-bootstrap";

export const Modal = ({ active, onClose, title, children, form }) => {
  return (
    <ModalRB show={active} onHide={onClose}>
      <ModalRB.Header closeButton>
        <ModalRB.Title>{title}</ModalRB.Title>
      </ModalRB.Header>
      <ModalRB.Body>{children}</ModalRB.Body>
      <ModalRB.Footer>
        <Button variant="secondary" onClick={onClose}>
          Закрыть
        </Button>
        <Button form={form} variant="primary" type="submit">
          Сохранить
        </Button>
      </ModalRB.Footer>
    </ModalRB>
  );
};
