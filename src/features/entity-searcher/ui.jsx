import React from "react";

export const SearchEntity = () => {
  return (
    <form>
      <div className="input-group input-group-sm">
        <input
          // value={valueSearch}
          // onChange={(e) => setValueSearch(e.target.value)}
          type="text"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
        />
        <button
          //  onClick={onSearch}
          type="submit"
          className="btn btn-outline-secondary"
        >
          Поиск
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              Фильтр 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Фильтр 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Фильтр 3
            </a>
          </li>
        </ul>
      </div>
    </form>
  );
};
