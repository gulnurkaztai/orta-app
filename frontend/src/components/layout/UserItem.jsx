import defaultAvatar from "../assets/defaultAvatar.png";
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <Link to={`/profile/${user._id}`}>
      <li className="user-item">
        <div className="flow-root overscroll-y-auto">

            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user.avatarPic || defaultAvatar}
                    alt={user.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {user.bio}
                  </p>
                </div>
                {/* <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                  +
                </div> */}
              </div>
            </li>
        </div>
      </li>
    </Link>
  );
};
export default UserItem;
