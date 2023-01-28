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
}) => {
  const [col, setColumns] = React.useState(columns);
  const [sorter, setSorter] = React.useState({});
  const [pagination, setPagination] = React.useState({ page: 1, pageSize: 10 });

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
  }, [activeCheckBox]);

  const onChangePagination = (pagination) => {
    setPagination(pagination);
    onChange({ pagination, sorter });
  };

  const onChangeSorter = (field) => {
    let sortValue = { field, sort: sorter.sort === "ASC" ? "DESC" : "ASC" };
    setSorter(sortValue);
    onChange({ pagination, sorter: sortValue });
  };

  const onChangeCheckBox = (id) => {
    if (activeCheckBox.includes(id)) {
      setActiveCheckBox((prev) => prev.filter((item) => item !== id));
    } else {
      setActiveCheckBox((prev) => [...prev, id]);
    }
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
                {col.map((item, index) => (
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
                  {col.map((itemColumn, index) => {
                    if (itemColumn.render) {
                      return <td key={index}>{itemColumn.render(itemData)}</td>;
                    }
                    return (
                      <td key={index}>{itemData[itemColumn.dataIndex]}</td>
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
          <div className="col col-12 col-sm-4">Страница 1 из 5</div>
          <div className="col col-12 col-sm-8 text-sm-center ">
            <div className="pagination justify-content-end">
              <PaginationCustom
                onChange={onChangePagination}
                defaultPageSize={pagination.pageSize}
                defaultCurrent={pagination.page}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
