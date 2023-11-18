import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconReportToBranch = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2513_2798"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2513_2798)">
          <path
            d="M7.23576 14.8915H9.86266L14.9973 9.75689C15.1152 9.63254 15.2037 9.49536 15.2627 9.34536C15.3216 9.19536 15.3511 9.04793 15.3511 8.90306C15.3511 8.7582 15.3191 8.61589 15.255 8.47614C15.1909 8.33641 15.105 8.20435 14.9973 8.07999L14.0877 7.12999C13.9697 7.01205 13.8367 6.9236 13.6886 6.86461C13.5405 6.80565 13.3889 6.77616 13.2338 6.77616C13.089 6.77616 12.9415 6.80565 12.7915 6.86461C12.6415 6.9236 12.5044 7.01205 12.38 7.12999L7.23576 12.2646V14.8915ZM8.42803 13.6992V12.7492L11.4146 9.76266L11.8954 10.2319L12.355 10.7223L9.37803 13.6992H8.42803ZM11.8954 10.2319L12.355 10.7223L11.4146 9.76266L11.8954 10.2319ZM12.5358 14.8915H18.8511V13.3916H14.0357L12.5358 14.8915ZM3.54346 22.1222V5.39156C3.54346 4.88643 3.71846 4.45886 4.06846 4.10886C4.41846 3.75886 4.84602 3.58386 5.35116 3.58386H20.7357C21.2408 3.58386 21.6684 3.75886 22.0184 4.10886C22.3684 4.45886 22.5434 4.88643 22.5434 5.39156V16.7761C22.5434 17.2812 22.3684 17.7088 22.0184 18.0588C21.6684 18.4088 21.2408 18.5838 20.7357 18.5838H7.08191L3.54346 22.1222ZM6.44346 17.0838H20.7357C20.8126 17.0838 20.8832 17.0518 20.9473 16.9877C21.0114 16.9236 21.0434 16.853 21.0434 16.7761V5.39156C21.0434 5.31463 21.0114 5.2441 20.9473 5.17999C20.8832 5.11589 20.8126 5.08384 20.7357 5.08384H5.35116C5.27422 5.08384 5.2037 5.11589 5.13958 5.17999C5.07548 5.2441 5.04343 5.31463 5.04343 5.39156V18.4685L6.44346 17.0838Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconReportToBranch.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconReportToBranch;
