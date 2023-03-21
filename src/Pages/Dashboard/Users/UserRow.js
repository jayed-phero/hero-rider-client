import React from 'react';

const UserRow = ({ data }) => {
    const { role, personalPhoto, name, email, _id } = data
    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">
                    <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                    <span>#{_id.slice(15, 25)}</span>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                {
                    role === "rider" ?
                        <p class="px-3 py-1 text-sm text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60 flex items-center justify-center">{role}</p>
                        :
                        <p class="px-3 py-1 text-sm text-emerald-500 rounded-full dark:bg-gray-800 bg-emerald-100/60 flex items-center justify-center">{role}</p>
                }
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <div class="flex items-center gap-x-2">
                    <img class="object-cover w-8 h-8 rounded-full" src={personalPhoto} alt="" />
                    <div>
                        <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{name}</h2>
                        <p class="text-xs font-normal text-gray-600 dark:text-gray-400">{email}</p>
                    </div>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Monthly subscription</td>
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-6">
                    <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                        Archive
                    </button>

                    <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Download
                    </button>
                </div>
            </td>
        </tr>

    );
};

export default UserRow;