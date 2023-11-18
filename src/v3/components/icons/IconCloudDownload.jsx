import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconCloudDownload = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2621_40482"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2621_40482)">
          <path
            d="M6.49998 19.5C5.11794 19.5 3.9391 19.0199 2.96345 18.0596C1.98782 17.0994 1.5 15.9282 1.5 14.5462C1.5 13.3231 1.89167 12.2353 2.675 11.2827C3.45833 10.3302 4.45769 9.76671 5.67308 9.59236C5.89873 8.37313 6.56379 7.23306 7.66828 6.17216C8.77276 5.11126 9.96667 4.58081 11.25 4.58081C11.659 4.58081 12.0112 4.72857 12.3067 5.02409C12.6022 5.31959 12.75 5.67182 12.75 6.08079V12.7462L14.5808 10.9462L15.6346 12L12 15.6346L8.36538 12L9.4192 10.9462L11.25 12.7462V6.08079C9.98973 6.22437 8.96633 6.80321 8.1798 7.81731C7.39325 8.83141 6.99998 9.89231 6.99998 11H6.49998C5.53331 11 4.70831 11.3417 4.02498 12.025C3.34164 12.7083 2.99998 13.5333 2.99998 14.5C2.99998 15.4667 3.34164 16.2917 4.02498 16.975C4.70831 17.6583 5.53331 18 6.49998 18H18.5C19.2 18 19.7916 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7916 13.2417 19.2 13 18.5 13H17V11C17 10.1872 16.8166 9.43495 16.45 8.74329C16.0833 8.05162 15.6 7.47053 15 7.00001V5.24236C16.0859 5.79364 16.9407 6.58723 17.5644 7.62311C18.1881 8.65901 18.5 9.78464 18.5 11V11.5H18.8077C19.8615 11.5821 20.7403 12.0058 21.4442 12.7712C22.148 13.5366 22.5 14.4462 22.5 15.5C22.5 16.6154 22.1121 17.5609 21.3365 18.3365C20.5609 19.1122 19.6153 19.5 18.5 19.5H6.49998Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconCloudDownload.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconCloudDownload;
