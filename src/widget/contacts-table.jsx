import { Table } from "shared/ui/table";
import {
  $contactsModel,
  columnsContact,
  getContactListFx,
} from "entities/contact";
import React from "react";
import { useStore } from "effector-react";

export const ContactsTable = () => {
  const [activeCheckBox, setActiveCheckBox] = React.useState([]);

  const { contacts, loading, pagination } = useStore($contactsModel);

  React.useEffect(() => {
    getContactListFx(pagination);
  }, []);

  const onChangeTable = ({ pagination, sorter }) => {
    getContactListFx(pagination);
  };

  // console.log(contacts, loading, pagination);

  return (
    <Table
      data={contacts}
      loading={loading}
      columns={columnsContact()}
      onChange={onChangeTable}
      activeCheckBox={activeCheckBox}
      setActiveCheckBox={setActiveCheckBox}
      pagination={pagination}
    />
  );
};
