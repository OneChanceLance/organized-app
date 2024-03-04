import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconCloudOff = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-cloud_off" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2621_40480"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2621_40480)">
          <path
            d="M20.1269 22.735L17.3808 20.0004H6.49998C5.10127 20.0004 3.91827 19.5168 2.95095 18.5495C1.98365 17.5821 1.5 16.3991 1.5 15.0004C1.5 13.7491 1.90225 12.662 2.70675 11.7389C3.51123 10.8158 4.50001 10.2671 5.67308 10.0928C5.70384 9.90172 5.76346 9.68281 5.85193 9.43601C5.94039 9.18919 6.03848 8.96194 6.14618 8.75426L2.1308 4.73888L3.18463 3.68506L21.1808 21.6812L20.1269 22.735ZM6.49998 18.5004H15.8616L7.2923 9.93113C7.20127 10.1594 7.12979 10.4081 7.07788 10.6773C7.02594 10.9465 6.99998 11.2209 6.99998 11.5004H6.49998C5.53331 11.5004 4.70831 11.8421 4.02498 12.5254C3.34164 13.2087 2.99998 14.0337 2.99998 15.0004C2.99998 15.9671 3.34164 16.7921 4.02498 17.4754C4.70831 18.1587 5.53331 18.5004 6.49998 18.5004ZM21.2538 18.9042L20.1692 17.8504C20.4397 17.6107 20.6458 17.3376 20.7875 17.0313C20.9291 16.7249 21 16.3813 21 16.0004C21 15.3004 20.7583 14.7087 20.275 14.2254C19.7916 13.7421 19.2 13.5004 18.5 13.5004H17V11.5004C17 10.1171 16.5125 8.93791 15.5375 7.96291C14.5625 6.98791 13.3833 6.50041 12 6.50041C11.55 6.50041 11.1166 6.55458 10.7 6.66291C10.2833 6.77124 9.88331 6.94208 9.49998 7.17541L8.41538 6.08121C8.99871 5.70684 9.57788 5.43313 10.1529 5.26006C10.7279 5.08698 11.3436 5.00043 12 5.00043C13.8107 5.00043 15.3467 5.63109 16.608 6.89241C17.8693 8.15371 18.5 9.68971 18.5 11.5004V12.0004H18.8077C19.8615 12.0825 20.7403 12.5062 21.4442 13.2716C22.148 14.037 22.5 14.9466 22.5 16.0004C22.5 16.5542 22.3958 17.0783 22.1875 17.5725C21.9791 18.0667 21.6679 18.5106 21.2538 18.9042Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconCloudOff;
