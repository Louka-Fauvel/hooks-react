import UserTable from "./tables/UserTable.jsx";
import {useState} from "react";
import UserForm from "./forms/UserForm.jsx";

function App() {

    const [fAdd, setFAdd] = useState(true);
    const [fEdit, setFEdit] = useState(false);
    const [crudData, setCrudData] = useState([
        {
            id: 1,
            name: "Louka",
            username: "Fauvel"
        },
        {
            id: 2,
            name: "Iris",
            username: "Sheeban"
        }
    ]);

    console.log("Test", fEdit);

  return (
      <>
          <div className="container mx-auto px-32">
              <h1 className="text-5xl font-bold">CRUD App with Hooks</h1>
              <div className="flex flex-row justify-center space-x-10">
                  <div>
                      {
                          fAdd ? <h2 className="text-4xl font-bold">Add user</h2>
                              : <h2 className="text-4xl font-bold">Edit user</h2>
                      }
                      <UserForm crudData={crudData} setCrudData={setCrudData} fAdd={fAdd} setFAdd={setFAdd} fEdit={fEdit} setFEdit={setFEdit}/>
                  </div>
                  <div>
                      <h2 className="text-4xl font-bold">View users</h2>
                      <UserTable setCrudData={setCrudData} crudData={crudData} setFEdit={setFEdit} setFAdd={setFAdd}/>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App