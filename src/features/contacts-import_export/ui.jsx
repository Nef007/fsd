import React from "react";
import { Button } from "react-bootstrap";

export const ExportImportContacts = () => {
  return (
    <form>
      <div className="mb-3">
        <div className="input-group input-group-sm">
          <Button
            variant="btn btn-outline-secondary"
            // onClick={onUploadFile}
            type="submit"
          >
            Загрузить
          </Button>
          <input
            required
            // onChange={(e) => onChangeInput(e)}
            type="file"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
          <Button
            variant="btn btn-outline-secondary"
            //  onClick={onDownloadFile}
          >
            Выгрузить
          </Button>
          {/*</form>*/}
        </div>
      </div>
    </form>
  );
};
