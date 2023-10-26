const UserTable = ({setCrudData, crudData, setFEdit, setFAdd}) => {

    const fEditTrue = (data) => {
        document.getElementById("name").value = data.name;
        document.getElementById("username").value = data.username;
        document.getElementById("id").value = data.id;
        setFAdd(false);
        setFEdit(true);
    }

    const deleteData = (id) => {
        document.querySelector("form").reset();
        setFEdit(false);
        setFAdd(true);
        setCrudData(crudData.filter(data => data.id !== id));
    }

    return (
        <table className="table-auto border-collapse border border-slate-500">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {crudData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td className="border border-slate-600">{data.name}</td>
                        <td className="border border-slate-600">{data.username}</td>
                        <td className="border border-slate-600">
                            <button onClick={() => fEditTrue(data)} className="border-2 border-gray-500">Edit</button>
                            <button onClick={() => deleteData(data.id)} className="border-2 border-gray-500">Delete</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )

}

export default UserTable;