import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconGlobe = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-globe" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2568_25950"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect y="0.500488" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2568_25950)">
          <path
            d="M12 22.0004C10.6974 22.0004 9.46825 21.7508 8.3125 21.2514C7.15673 20.752 6.14872 20.0722 5.28845 19.212C4.4282 18.3517 3.7484 17.3437 3.24905 16.1879C2.74968 15.0322 2.5 13.803 2.5 12.5005C2.5 11.1876 2.74968 9.95592 3.24905 8.80529C3.7484 7.65466 4.4282 6.64921 5.28845 5.78894C6.14872 4.92869 7.15673 4.24889 8.3125 3.74954C9.46825 3.25017 10.6974 3.00049 12 3.00049C13.3128 3.00049 14.5445 3.25017 15.6952 3.74954C16.8458 4.24889 17.8512 4.92869 18.7115 5.78894C19.5718 6.64921 20.2516 7.65466 20.7509 8.80529C21.2503 9.95592 21.5 11.1876 21.5 12.5005C21.5 13.803 21.2503 15.0322 20.7509 16.1879C20.2516 17.3437 19.5718 18.3517 18.7115 19.212C17.8512 20.0722 16.8458 20.752 15.6952 21.2514C14.5445 21.7508 13.3128 22.0004 12 22.0004ZM12 20.4793C12.5102 19.8024 12.9397 19.1197 13.2885 18.4312C13.6372 17.7427 13.9211 16.9902 14.1404 16.1735H9.85958C10.0916 17.0158 10.3788 17.7812 10.7211 18.4697C11.0634 19.1582 11.4897 19.828 12 20.4793ZM10.0635 20.2043C9.68014 19.6543 9.33591 19.029 9.03078 18.3283C8.72564 17.6277 8.48846 16.9094 8.31922 16.1735H4.92688C5.45509 17.212 6.16343 18.0844 7.0519 18.7909C7.94038 19.4973 8.94424 19.9684 10.0635 20.2043ZM13.9365 20.2043C15.0557 19.9684 16.0596 19.4973 16.9481 18.7909C17.8365 18.0844 18.5449 17.212 19.0731 16.1735H15.6807C15.4794 16.9158 15.2262 17.6373 14.9211 18.338C14.616 19.0386 14.2878 19.6607 13.9365 20.2043ZM4.29805 14.6736H8.01538C7.95256 14.3018 7.90705 13.9373 7.87885 13.5803C7.85065 13.2232 7.83655 12.8633 7.83655 12.5005C7.83655 12.1376 7.85065 11.7777 7.87885 11.4206C7.90705 11.0636 7.95256 10.6992 8.01538 10.3274H4.29805C4.2019 10.6671 4.12818 11.0203 4.0769 11.387C4.02562 11.7537 3.99998 12.1248 3.99998 12.5005C3.99998 12.8761 4.02562 13.2473 4.0769 13.6139C4.12818 13.9806 4.2019 14.3338 4.29805 14.6736ZM9.51535 14.6736H14.4846C14.5474 14.3018 14.5929 13.9405 14.6212 13.5899C14.6494 13.2393 14.6635 12.8761 14.6635 12.5005C14.6635 12.1248 14.6494 11.7617 14.6212 11.411C14.5929 11.0604 14.5474 10.6992 14.4846 10.3274H9.51535C9.45253 10.6992 9.40702 11.0604 9.3788 11.411C9.3506 11.7617 9.3365 12.1248 9.3365 12.5005C9.3365 12.8761 9.3506 13.2393 9.3788 13.5899C9.40702 13.9405 9.45253 14.3018 9.51535 14.6736ZM15.9846 14.6736H19.7019C19.7981 14.3338 19.8718 13.9806 19.9231 13.6139C19.9743 13.2473 20 12.8761 20 12.5005C20 12.1248 19.9743 11.7537 19.9231 11.387C19.8718 11.0203 19.7981 10.6671 19.7019 10.3274H15.9846C16.0474 10.6992 16.0929 11.0636 16.1211 11.4206C16.1493 11.7777 16.1634 12.1376 16.1634 12.5005C16.1634 12.8633 16.1493 13.2232 16.1211 13.5803C16.0929 13.9373 16.0474 14.3018 15.9846 14.6736ZM15.6807 8.82741H19.0731C18.5384 7.77611 17.8349 6.90366 16.9625 6.21006C16.09 5.51648 15.0814 5.04212 13.9365 4.78699C14.3198 5.36904 14.6608 6.00558 14.9596 6.69661C15.2583 7.38765 15.4987 8.09791 15.6807 8.82741ZM9.85958 8.82741H14.1404C13.9083 7.99151 13.6163 7.22131 13.2644 6.51681C12.9125 5.81233 12.491 5.14726 12 4.52161C11.5089 5.14726 11.0875 5.81233 10.7356 6.51681C10.3836 7.22131 10.0916 7.99151 9.85958 8.82741ZM4.92688 8.82741H8.31922C8.50128 8.09791 8.74167 7.38765 9.0404 6.69661C9.33912 6.00558 9.68014 5.36904 10.0635 4.78699C8.91219 5.04212 7.90193 5.51809 7.03268 6.21489C6.16344 6.91169 5.46151 7.78253 4.92688 8.82741Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconGlobe;
