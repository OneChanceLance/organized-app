import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconMoveForward = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3094_85706"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3094_85706)">
          <path
            d="M11.5 16.1442L15.1442 12.5L11.5 8.85578L10.4558 9.89998L12.3058 11.75H7.75V13.25H12.3058L10.4558 15.1L11.5 16.1442ZM11.5016 22C10.1877 22 8.95268 21.7506 7.79655 21.252C6.6404 20.7533 5.63472 20.0765 4.7795 19.2217C3.92427 18.3669 3.24721 17.3616 2.74833 16.206C2.24944 15.0504 2 13.8156 2 12.5017C2 11.1877 2.24933 9.95268 2.748 8.79655C3.24667 7.6404 3.92342 6.63472 4.77825 5.7795C5.6331 4.92427 6.63834 4.24721 7.79398 3.74833C8.94959 3.24944 10.1844 3 11.4983 3C12.8122 3 14.0473 3.24933 15.2034 3.748C16.3596 4.24667 17.3652 4.92342 18.2205 5.77825C19.0757 6.6331 19.7527 7.63834 20.2516 8.79398C20.7505 9.94959 21 11.1844 21 12.4983C21 13.8122 20.7506 15.0473 20.252 16.2034C19.7533 17.3596 19.0765 18.3652 18.2217 19.2205C17.3669 20.0757 16.3616 20.7527 15.206 21.2516C14.0504 21.7505 12.8156 22 11.5016 22ZM11.5 20.5C13.7333 20.5 15.625 19.725 17.175 18.175C18.725 16.625 19.5 14.7333 19.5 12.5C19.5 10.2666 18.725 8.37498 17.175 6.82498C15.625 5.27498 13.7333 4.49998 11.5 4.49998C9.26664 4.49998 7.37498 5.27498 5.82498 6.82498C4.27498 8.37498 3.49998 10.2666 3.49998 12.5C3.49998 14.7333 4.27498 16.625 5.82498 18.175C7.37498 19.725 9.26664 20.5 11.5 20.5Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconMoveForward.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconMoveForward;
