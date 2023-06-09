import React from 'react';

const CouseCardSekleton = () => {
    return (
        <div>
            <div className="shadow-lg animate-pulse dark:bg-gray-800 w-full max-w-xl overflow-hidden flex-col md:flex-row  rounded-lg shadow-lg p-11">
                <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

                <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    );
};

export default CouseCardSekleton;