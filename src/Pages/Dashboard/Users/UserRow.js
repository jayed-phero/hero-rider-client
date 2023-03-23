import React, { useContext } from 'react';
import { AuthProvider } from '../../../Context/AuthContext';
import useAdmin from '../../../hooks/useAdmin';

const UserRow = ({ data, handleCheckBoxChange, item }) => {
    const { user } = useContext(AuthProvider)
    const { role, personalPhoto, name, email, _id, age, nid, drivingLicence, phone } = data
    const [isAdmin] = useAdmin(user?.email)
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <input type="checkbox"
                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                        checked={item.action}
                        onChange={(e) => handleCheckBoxChange(e, item._id)}
                    />

                    <span>#{_id.slice(15, 25)}</span>
                </div>
            </td>
            <td className="px-4 py-4 text-sm font-semibold text-blue-500 dark:text-gray-300 whitespace-nowrap ">{age}</td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                {
                    role === "admin" ?
                        <p className="px-3 py-1 text-sm text-emerald-500 rounded-full dark:bg-gray-800 bg-emerald-100/60 flex items-center justify-center border-2 border-green-500">{role}</p>
                        :
                        <>
                            {
                                role === "rider" ?
                                    <p className="px-3 py-1 text-sm text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60 flex items-center justify-center">{role}</p>
                                    :
                                    <p className="px-3 py-1 text-sm text-emerald-500 rounded-full dark:bg-gray-800 bg-emerald-100/60 flex items-center justify-center">{role}</p>
                            }
                        </>
                }
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <img className="object-cover w-8 h-8 rounded-full" src={personalPhoto} alt="" />
                    <div>
                        <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{name}</h2>
                        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{email}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap flex items-center gap-3">
                <img
                    src={nid}
                    className="h-11 w-20 rounded-md"
                />
                {
                    drivingLicence ?
                        <img
                            src={drivingLicence}
                            className="h-11 w-20 rounded-md"
                        />
                        :
                        undefined
                }
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <p className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                        {phone}
                    </p>

                    <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Download
                    </button>
                </div>
            </td>
        </tr>

    );
};

export default UserRow;