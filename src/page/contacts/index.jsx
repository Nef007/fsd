import React from "react";
import { Title } from "shared/ui/Title";

import { Table } from "shared/ui/table/Table";
import { ExportImportContacts } from "features/contacts-import_export";
import Button from "shared/ui/buttons";
import { SearchEntity } from "features/entity-searcher";

import { columnsContact, contactModel } from "entities/contact";
import { useStore } from "effector-react";

const ContactsPage = () => {
  const [activeCheckBox, setActiveCheckBox] = React.useState([]);

  const contacts = useStore(contactModel.$contacts);
  const loading = useStore(contactModel.$contactListLoading);

  console.log(contacts);

  React.useEffect(() => {
    contactModel.effects.getContactListFx({ limit: 10 });
  }, []);

  const onChangeTable = (item) => {
    console.log(item);
  };

  return (
    <div className="page-content page-content_contacts">
      <Title>База контактов</Title>
      <div className="contacts-table-container">
        <div className="col-md-12">
          <div className="panel panel-default panel-table">
            <div className="panel-heading">
              <div className="row">
                <div className="col col-sm-6 col-12 text-sm-center gy-2">
                  <ExportImportContacts />
                  <SearchEntity />
                </div>
                <div className="col col-sm-6 text-end col-12 gy-2">
                  <Button.Primary>Выбрать все</Button.Primary>{" "}
                  <Button.Delete disabled={true} />{" "}
                  <Button.Primary>Создать</Button.Primary>
                </div>
              </div>
            </div>
            <Table
              data={contacts}
              loading={loading}
              columns={columnsContact}
              onChange={onChangeTable}
              activeCheckBox={activeCheckBox}
              setActiveCheckBox={setActiveCheckBox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
