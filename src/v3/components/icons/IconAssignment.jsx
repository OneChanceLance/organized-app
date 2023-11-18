import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconAssignment = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2513_2502"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2513_2502)">
          <path
            d="M5.3077 20.5C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80257 3.5 5.3077 3.5H9.7577C9.83718 2.93847 10.0853 2.46475 10.5019 2.07885C10.9186 1.69295 11.4179 1.5 12 1.5C12.582 1.5 13.0814 1.69295 13.498 2.07885C13.9147 2.46475 14.1628 2.93847 14.2423 3.5H18.6923C19.1974 3.5 19.625 3.675 19.975 4.025C20.325 4.375 20.5 4.80257 20.5 5.3077V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.3077ZM12 4.34613C12.2166 4.34613 12.3958 4.27529 12.5375 4.13363C12.6791 3.99196 12.75 3.81279 12.75 3.59613C12.75 3.37946 12.6791 3.20029 12.5375 3.05863C12.3958 2.91696 12.2166 2.84613 12 2.84613C11.7833 2.84613 11.6041 2.91696 11.4625 3.05863C11.3208 3.20029 11.25 3.37946 11.25 3.59613C11.25 3.81279 11.3208 3.99196 11.4625 4.13363C11.6041 4.27529 11.7833 4.34613 12 4.34613ZM4.99997 18.0423C5.89998 17.159 6.94581 16.4631 8.13748 15.9548C9.32914 15.4465 10.6166 15.1923 12 15.1923C13.3833 15.1923 14.6708 15.4465 15.8625 15.9548C17.0541 16.4631 18.1 17.159 19 18.0423V5.3077C19 5.23077 18.9679 5.16024 18.9038 5.09613C18.8397 5.03203 18.7692 4.99998 18.6923 4.99998H5.3077C5.23077 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V18.0423ZM12 13.0385C12.9025 13.0385 13.6698 12.7224 14.3019 12.0904C14.9339 11.4583 15.25 10.691 15.25 9.78845C15.25 8.8859 14.9339 8.1186 14.3019 7.48655C13.6698 6.8545 12.9025 6.53848 12 6.53848C11.0974 6.53848 10.3301 6.8545 9.69808 7.48655C9.06603 8.1186 8.75 8.8859 8.75 9.78845C8.75 10.691 9.06603 11.4583 9.69808 12.0904C10.3301 12.7224 11.0974 13.0385 12 13.0385ZM6.44225 19H17.5577V18.7885C16.768 18.0833 15.9016 17.5577 14.9587 17.2115C14.0157 16.8653 13.0295 16.6923 12 16.6923C10.9833 16.6923 10.0019 16.8637 9.05573 17.2067C8.10956 17.5497 7.2384 18.0705 6.44225 18.7692V19ZM12 11.5385C11.5192 11.5385 11.1073 11.367 10.7644 11.0241C10.4214 10.6811 10.25 10.2692 10.25 9.78845C10.25 9.30768 10.4214 8.89583 10.7644 8.55288C11.1073 8.20993 11.5192 8.03845 12 8.03845C12.4807 8.03845 12.8926 8.20993 13.2356 8.55288C13.5785 8.89583 13.75 9.30768 13.75 9.78845C13.75 10.2692 13.5785 10.6811 13.2356 11.0241C12.8926 11.367 12.4807 11.5385 12 11.5385Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconAssignment.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconAssignment;
