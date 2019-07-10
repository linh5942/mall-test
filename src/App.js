import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Serial", field: "serial", type: "string" },
      { title: "Name", field: "name", type: "string" },
      { title: "Phone", field: "phone", type: "numeric" },
      { title: "Email", field: "email", type: "string" }
    ],

    data: [
      { serial: 1, name: "user1", phone: 123456781, email: "aaa@mail.com" },
      { serial: 2, name: "user2", phone: 123456782, email: "bbb@mail.com" },
      { serial: 3, name: "user3", phone: 123456723, email: "ccc@mail.com" },
      { serial: 4, name: "user4", phone: 123456724, email: "ddd@mail.com" }
    ]
  });

  return (
    <MaterialTable
      title="Mall programming test"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
