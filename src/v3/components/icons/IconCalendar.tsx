import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconCalendar = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-calendar" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2473_21944"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2473_21944)">
          <path
            d="M5.3077 22.0006C4.80257 22.0006 4.375 21.8256 4.025 21.4756C3.675 21.1256 3.5 20.698 3.5 20.1929V6.80833C3.5 6.3032 3.675 5.87563 4.025 5.52563C4.375 5.17563 4.80257 5.00063 5.3077 5.00063H6.69233V2.88525H8.23075V5.00063H15.8077V2.88525H17.3076V5.00063H18.6923C19.1974 5.00063 19.625 5.17563 19.975 5.52563C20.325 5.87563 20.5 6.3032 20.5 6.80833V20.1929C20.5 20.698 20.325 21.1256 19.975 21.4756C19.625 21.8256 19.1974 22.0006 18.6923 22.0006H5.3077ZM5.3077 20.5006H18.6923C18.7692 20.5006 18.8397 20.4686 18.9038 20.4045C18.9679 20.3403 19 20.2698 19 20.1929V10.8083H4.99997V20.1929C4.99997 20.2698 5.03202 20.3403 5.09612 20.4045C5.16024 20.4686 5.23077 20.5006 5.3077 20.5006ZM4.99997 9.30835H19V6.80833C19 6.7314 18.9679 6.66087 18.9038 6.59675C18.8397 6.53265 18.7692 6.5006 18.6923 6.5006H5.3077C5.23077 6.5006 5.16024 6.53265 5.09612 6.59675C5.03202 6.66087 4.99997 6.7314 4.99997 6.80833V9.30835Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCalendar;
