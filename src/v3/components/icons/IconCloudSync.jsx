import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconCloudSync = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2621_40478"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2621_40478)">
          <path
            d="M4.32692 19.673V18.1731H7.23462C6.21154 17.2859 5.45833 16.332 4.975 15.3115C4.49167 14.291 4.25 13.2 4.25 12.0384C4.25 10.2871 4.76698 8.72945 5.80095 7.36536C6.83492 6.00126 8.15125 5.07818 9.74995 4.59613V6.17685C8.57047 6.63199 7.60893 7.39289 6.86535 8.45955C6.12175 9.52624 5.74995 10.7192 5.74995 12.0384C5.74995 12.9961 5.94675 13.8782 6.34035 14.6846C6.73393 15.491 7.35766 16.2718 8.21153 17.0269V14.2884H9.7115V19.673H4.32692ZM15 19.7499C14.2436 19.7499 13.5961 19.4807 13.0577 18.9423C12.5192 18.4038 12.25 17.7564 12.25 17C12.25 16.2641 12.501 15.6326 13.0029 15.1057C13.5048 14.5788 14.1429 14.2987 14.9173 14.2654C15.1814 13.6718 15.583 13.1875 16.1221 12.8125C16.6612 12.4375 17.2872 12.25 18 12.25C18.8513 12.25 19.5881 12.5295 20.2106 13.0884C20.833 13.6474 21.2013 14.3679 21.3154 15.25H21.4692C22.0987 15.25 22.6362 15.466 23.0817 15.8981C23.5272 16.3301 23.75 16.8557 23.75 17.475C23.75 18.1044 23.5323 18.641 23.0971 19.0846C22.6618 19.5281 22.1295 19.7499 21.5 19.7499H15ZM18.15 10.8653C18.0077 10.1435 17.7554 9.47815 17.3933 8.86918C17.0311 8.2602 16.4961 7.63134 15.7884 6.9826V9.71148H14.2885V4.3269H19.673V5.82685H16.7653C17.6551 6.61405 18.3243 7.41983 18.773 8.24418C19.2217 9.06855 19.5192 9.94226 19.6654 10.8653H18.15ZM15 18.25H21.5C21.7038 18.25 21.8798 18.1759 22.0279 18.0279C22.176 17.8798 22.25 17.7038 22.25 17.5C22.25 17.2961 22.176 17.1201 22.0279 16.9721C21.8798 16.824 21.7038 16.7499 21.5 16.7499H20V15.75C20 15.1961 19.8051 14.7243 19.4154 14.3346C19.0256 13.9448 18.5538 13.7499 18 13.7499C17.4461 13.7499 16.9791 13.9304 16.599 14.2913C16.2189 14.6522 16.0224 15.0871 16.0096 15.5961V15.7499H15C14.6525 15.7499 14.3573 15.8714 14.1144 16.1144C13.8714 16.3573 13.75 16.6525 13.75 17C13.75 17.3474 13.8714 17.6426 14.1144 17.8856C14.3573 18.1285 14.6525 18.25 15 18.25Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconCloudSync.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconCloudSync;
