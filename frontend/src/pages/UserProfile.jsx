import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfileById } from '../features/auth/authSlice';

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Access the viewedUserProfile from the users slice
  const viewedUserProfile = useSelector((state) => state.users.viewedUserProfile);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserProfileById(id));
    }
  }, [id, dispatch]);

  if (!viewedUserProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="w-full px-6 md:px-16 py-6 mx-auto  text-gray-200 font-display">
      <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words shadow-blur rounded-2xl bg-gray-700 mb-4 bg-opacity-50">
    <div className="flex flex-wrap justify-between">
    <div className=" w-auto max-w-full px-3">
      <div className="text-size-base h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition  delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-green-500 duration-200">
        <img
          src={viewedUserProfile.avatarPic}
          alt="avatar pic"
          className="w-20 h-20 shadow-soft-sm rounded-full animate-[pulse_1s_ease-in-out_1]"
        />
        <div className="w-auto max-w-full ml-10 flex-col ">
          <p className="py-1 ml-5">{viewedUserProfile.name}</p>
          <p className="py-1 ml-5">{viewedUserProfile.bio}</p>
          
        </div>
      </div>
    </div>
  </div>
  </div>
      </div>
    </>
  );
};

export default UserProfile;


