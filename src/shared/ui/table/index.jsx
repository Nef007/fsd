import React from "react";
import cn from "classnames";
import { PaginationCustom } from "../Pagination";
import Form from "react-bootstrap/Form";
import Loader from "shared/ui/Loader";

export const Table = ({
  onChange,
  activeCheckBox,
  setActiveCheckBox,
  columns,
  data,
  loading,
  pagination = {
    page: 1,
    pageSize: 10,
    total: 0,
  },
}) => {
  const [columnsTable, setColumns] = React.useState(columns);
  const [sorter, setSorter] = React.useState({});
  const [paginationTable, setPagination] = React.useState(pagination);

  const onChangeCheckBox = React.useCallback(
    (id) => {
      if (activeCheckBox.includes(id)) {
        setActiveCheckBox((prev) => prev.filter((item) => item !== id));
      } else {
        setActiveCheckBox((prev) => [...prev, id]);
      }
    },
    [activeCheckBox, setActiveCheckBox]
  );

  // установка чекбокса каждой строке
  React.useEffect(() => {
    if (setActiveCheckBox && activeCheckBox) {
      setColumns([
        {
          name: <em className="fa fa-check"></em>,
          render: (record) => (
            <Form.Check
              type="checkbox"
              onChange={() => onChangeCheckBox(record.id)}
              checked={activeCheckBox.includes(record.id)}
            />
          ),
          className: "width-5",
        },
        ...columns,
      ]);
    }
  }, [activeCheckBox, columns, onChangeCheckBox, setActiveCheckBox]);

  //изменение пагинации
  React.useEffect(() => {
    setPagination(pagination);
  }, [pagination]);

  const onChangePagination = (pagination) => {
    setPagination(pagination);
    onChange({ pagination, sorter });
  };

  const onChangeSorter = (field) => {
    let sortValue = { field, sort: sorter.sort === "ASC" ? "DESC" : "ASC" };
    setSorter(sortValue);
    onChange({ pagination, sorter: sortValue });
  };

  return (
    <>
      <div className="panel-body table-responsive ">
        <div className="position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            {loading && <Loader />}
          </div>
          <table
            className={cn(
              "table table-striped table-bordered table-list table-hover align-middle contacts-table",
              { "opacity-25": loading }
            )}
          >
            <thead>
              <tr>
                {columnsTable.map((item, index) => (
                  <th key={index} className={item.className}>
                    {item.name}{" "}
                    {item.sorter && (
                      <span
                        onClick={() => onChangeSorter(item.dataIndex)}
                        className="sort-arrow-down "
                      >
                        <em
                          className={`fa fa-arrow-up ${
                            sorter.field === item.dataIndex &&
                            sorter.sort === "ASC"
                              ? ""
                              : "opacity-25"
                          }  `}
                        ></em>
                        <em
                          className={`fa fa-arrow-down ${
                            sorter.field === item.dataIndex &&
                            sorter.sort === "DESC"
                              ? ""
                              : "opacity-25"
                          } `}
                        ></em>
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((itemData) => (
                <tr key={itemData.id}>
                  {columnsTable.map((itemColumn, index) => {
                    if (itemColumn.render) {
                      return (
                        <td key={itemData.id + index}>
                          {itemColumn.render(itemData)}
                        </td>
                      );
                    }
                    return (
                      <td key={itemData.id + index}>
                        {itemData[itemColumn.dataIndex]}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel-footer">
        <div className="row">
          <div className="col col-12 col-sm-4">
            Страница {paginationTable.page} из{" "}
            {Math.ceil(paginationTable.total / paginationTable.pageSize)}
          </div>
          <div className="col col-12 col-sm-8 text-sm-center ">
            <div className="pagination justify-content-end">
              <PaginationCustom
                onChange={onChangePagination}
                defaultPageSize={paginationTable.pageSize}
                defaultCurrent={paginationTable.page}
                total={paginationTable.total}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
