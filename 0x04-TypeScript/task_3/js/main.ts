import {RowID, RowElement} from "./interface";
import * as CRUD from "./crud";
import {insertRow} from "./crud";

const row : RowElement = {
    firstName: "Gary", lastName: "Wambua"
}

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement ={
    firstName: "Gary", lastName: "Wambua", age: 23
};
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);