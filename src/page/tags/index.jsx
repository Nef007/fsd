import React from "react";
import { Title } from "shared/ui/Title";

import { Table } from "shared/ui/table";
import Button from "shared/ui/buttons";
import { SearchEntity } from "../../features/entity-searcher";

const TagsPage = () => {
  return (
    <div className="page-content page-content_contacts">
      <Title>Теги</Title>
      <div className="contacts-table-container">
        <div className="col-md-12">
          <div className="panel panel-default panel-table">
            <div className="panel-heading">
              <div className="row">
                <div className="col col-sm-6 col-12 text-sm-center gy-2">
                  <SearchEntity />
                </div>
                <div className="col col-sm-6 text-end col-12 gy-2">
                  <Button.Primary>Выбрать все</Button.Primary>{" "}
                  <Button.Delete disabled={true} />{" "}
                  <Button.Primary>Создать</Button.Primary>
                </div>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
