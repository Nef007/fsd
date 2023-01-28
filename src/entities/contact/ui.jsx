import Tagify from "shared/ui/Tagifi";
import React from "react";
import Button from "shared/ui/buttons";

export const columnsContact = [
  {
    name: <em className="fa fa-cog"></em>,
    render: () => (
      <>
        <Button.Edit /> <Button.Delete size="xl" />
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
    dataIndex: "name",
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
        value={record.tags.map((item) => ({
          id: item.id,
          value: item.text,
          style: "--tag-bg:" + item.color,
        }))}
      />
    ),
  },
];
