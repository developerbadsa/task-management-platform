import React from 'react';
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';

const Profile = () => {
      const { user } = useUserInfo()

      console.log(user?.metadata)
      return (
            // <div>
            //       <div className="overflow-hidden ">
            //             <img
            //                   src="https://i.postimg.cc/K8Rq5BCD/pexels-pavel-danilyuk-8381916.jpg"
            //                   alt=""
            //                   className="object-cover object-top w-full h-32"
            //             />
            //       </div>
            //       <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
            //             <img
            //                   src={user?.photoURL}
            //                   alt=""
            //                   className="object-cover object-top w-full h-32 "
            //             />
            //       </div>
            //       <div className="flex justify-center ">
            //             <div>
            //                   <h2 className="text-xl font-semibold dark:text-gray-300 ">{user?.displayName}</h2>
            //                   <span className="text-sm font-medium text-gray-600">{user?.email}</span>
            //             </div>
            //       </div>
            // </div>

            <div className="grid grid-cols-1 mb-6 md:grid-cols-[40%,1fr] border-gray-200 rounded-md border dark:border-gray-800  gap-2">
            <div>
              <img
                src={user?.photoURL}
                alt=""
                className="object-cover w-full rounded-md "
              />
            </div>
            <div className="px-4 py-4 lg:px-2 ">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 dark:text-gray-400 "
              >
               Creattion Time : {user?.metadata.creationTime}
              </a>
              <div className="w-8 pb-1 mb-4 border-b border-gray-600 dark:border-gray-400" />
              <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300 ">
              {user?.displayName}
              </h2>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>
          

      );
};

export default Profile;