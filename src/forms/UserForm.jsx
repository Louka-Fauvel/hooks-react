

const UserForm = ({crudData, setCrudData, fAdd, setFAdd, fEdit, setFEdit}) => {

    const fAddTrue = () => {
        document.querySelector("form").reset();
        setFEdit(false);
        setFAdd(true);
    };

    const handleSubmitAdd = (event) => {
        event.preventDefault();
        if(event.target.name.value !== "" && event.target.username.value !== "") {
            const id = crudData.length + 1;
            const name = event.target.name.value;
            const username = event.target.username.value;
            document.querySelector("form").reset();
            setCrudData([...crudData,
                {
                    id: id,
                    name: name,
                    username: username
                }
            ]);
        }
    };

    const handleSubmitUpdate = (event) => {
        event.preventDefault();
        if(event.target.name.value !== "" && event.target.username.value !== "") {
            const id = event.target.id.value;
            const name = event.target.name.value;
            const username = event.target.username.value;

            const newCrudData = crudData.map((data) => {
                if (parseInt(data.id) === parseInt(id)) {
                    return (
                        {
                            ...data,
                            name: name,
                            username: username
                        }
                    );
                } else {
                    return (
                        {...data}
                    );
                }
            });
            setCrudData(newCrudData);
            fAddTrue();
        }
    };

    return (
        <form onSubmit={fAdd ? handleSubmitAdd : handleSubmitUpdate}>
            <div className="grid grid-rows-1 grid-flow-col gap-2">
                <div className="col-start-1">
                    <label className="block">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="block w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-gray-800"
                    />
                </div>
                <div className="col-start-1">
                    <label className="block">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="block w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-gray-800"
                    />
                </div>
                <input id="id" type="text" name="id" hidden/>
                {
                    fAdd ?
                        <div className="col-start-1">
                            <button type="submit" className="block w-full p-2 bg-blue-800 rounded-lg text-white hover:bg-blue-500">Add new user</button>
                        </div>
                        :
                        <div className="col-start-1">
                            <button type="submit" className="block w-full p-2 bg-blue-800 rounded-lg text-white hover:bg-blue-500">Update user</button>
                            <p onClick={fAddTrue} className="block w-full p-2 bg-gray-500 rounded-lg text-white text-center cursor-pointer hover:bg-gray-400">Cancel</p>
                        </div>
                }
            </div>
        </form>
    )

}

export default UserForm;