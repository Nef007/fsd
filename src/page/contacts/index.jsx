import React from "react";
import { Title } from "shared/ui/Title";
import { ExportImportContacts } from "features/contacts-import_export";
import Button from "shared/ui/buttons";
import { SearchEntity } from "features/entity-searcher";
import { ContactsTable } from "widget/contacts-table";
import { ContactCreate } from "features/contacts-create";
import { useToggle } from "react-use";

const ContactsPage = () => {
  const [activeCreate, setActiveCreate] = useToggle(false);

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
                  <Button.Primary onClick={setActiveCreate}>
                    Создать
                  </Button.Primary>
                </div>
              </div>
            </div>
            <ContactsTable />
          </div>
        </div>
      </div>
      <ContactCreate active={activeCreate} setActive={setActiveCreate} />
    </div>
  );
};

export default ContactsPage;
