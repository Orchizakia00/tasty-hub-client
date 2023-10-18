import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-10'>All Users</h2>
            <div className="overflow-x-auto lg:ml-28">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold text-xl">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedUsers.map(user =>
                                <tr key={user._id} className="text-lg">
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photo} alt={user.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-lg">{user.email}</span>
                                    </td>
                                    <td>{user.createdAt}</td>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;