import PropTypes from 'prop-types';
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from '../redux/appSlice';

const Email = ({email}) => {
  const { _id, subject, message,createdAt } = email || {};
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${_id}`);
  };
  return (
    <div
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="text-gray-300">
          <MdCropSquare size={"20px"} />
        </div>
        <div className="text-gray-300">
          <RiStarLine size={"20px"} />
        </div>
        <div className="font-semibold">
          <h1>{subject} </h1>
        </div>
      </div>

      <div className="flex-1 ml-4">
        <p>
        {message}
        </p>
      </div>

      <div className="flex-none text-gray text-sm">
        <p>{createdAt? new Date(createdAt).toLocaleDateString():'unknown Date'}</p>
      </div>
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.shape({
    _id: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default Email;
