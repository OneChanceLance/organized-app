import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconRefreshSchedule = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3175_70025"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3175_70025)">
          <path
            d="M5.3077 21.5C4.80257 21.5 4.375 21.325 4.025 20.975C3.675 20.625 3.5 20.1974 3.5 19.6923V6.30772C3.5 5.80259 3.675 5.37502 4.025 5.02502C4.375 4.67502 4.80257 4.50002 5.3077 4.50002H6.69232V2.38464H8.23075V4.50002H15.8077V2.38464H17.3076V4.50002H18.6922C19.1974 4.50002 19.625 4.67502 19.975 5.02502C20.325 5.37502 20.5 5.80259 20.5 6.30772V12.1538H19V10.3077H4.99997V19.6923C4.99997 19.7692 5.03202 19.8397 5.09612 19.9038C5.16024 19.9679 5.23077 20 5.3077 20H12.1442V21.5H5.3077ZM19 23.8461C17.8602 23.8461 16.857 23.4958 15.9904 22.7952C15.1237 22.0945 14.5609 21.2141 14.3019 20.1538H15.5442C15.7865 20.8936 16.2182 21.4952 16.8394 21.9587C17.4606 22.4221 18.1807 22.6538 19 22.6538C20.0115 22.6538 20.8734 22.2978 21.5856 21.5856C22.2977 20.8734 22.6538 20.0115 22.6538 19C22.6538 17.9884 22.2977 17.1266 21.5856 16.4144C20.8734 15.7022 20.0115 15.3461 19 15.3461C18.4525 15.3461 17.9352 15.4641 17.448 15.7C16.9608 15.9359 16.5365 16.2538 16.175 16.6538H17.8461V17.8461H14.1538V14.1538H15.3461V15.7904C15.8089 15.2994 16.3564 14.9039 16.9884 14.6038C17.6205 14.3038 18.291 14.1538 19 14.1538C20.3384 14.1538 21.4807 14.6269 22.4269 15.5731C23.3731 16.5192 23.8461 17.6615 23.8461 19C23.8461 20.3384 23.3731 21.4808 22.4269 22.4269C21.4807 23.3731 20.3384 23.8461 19 23.8461ZM4.99997 8.80774H19V6.30772C19 6.23079 18.9679 6.16026 18.9038 6.09614C18.8397 6.03204 18.7692 5.99999 18.6922 5.99999H5.3077C5.23077 5.99999 5.16024 6.03204 5.09612 6.09614C5.03202 6.16026 4.99997 6.23079 4.99997 6.30772V8.80774Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconRefreshSchedule.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconRefreshSchedule;
