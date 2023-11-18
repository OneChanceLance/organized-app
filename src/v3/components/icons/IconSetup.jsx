import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconSetup = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2704_32182"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2704_32182)">
          <path
            d="M9.69245 21.5L9.31168 18.4538C9.04373 18.3641 8.76905 18.2384 8.48763 18.0769C8.20621 17.9153 7.9546 17.7422 7.7328 17.5576L4.91165 18.7499L2.604 14.75L5.04438 12.9058C5.0213 12.757 5.00495 12.6077 4.99533 12.4577C4.98571 12.3077 4.9809 12.1583 4.9809 12.0096C4.9809 11.8673 4.98571 11.7227 4.99533 11.5759C5.00495 11.4291 5.0213 11.2686 5.04438 11.0942L2.604 9.24998L4.91165 5.26925L7.72318 6.45195C7.96421 6.26092 8.22159 6.08623 8.4953 5.9279C8.76904 5.76955 9.03795 5.6423 9.30205 5.54615L9.69245 2.5H14.3078L14.6885 5.55578C14.9885 5.66474 15.26 5.79198 15.503 5.9375C15.7459 6.08302 15.9911 6.2545 16.2386 6.45195L19.0886 5.26925L21.3962 9.24998L19.5462 10.65C19.2629 10.5243 18.9728 10.4166 18.676 10.3269C18.3792 10.2372 18.0687 10.1705 17.7443 10.1269L19.4347 8.84998L18.4501 7.14998L15.9366 8.2096C15.602 7.8519 15.2011 7.53588 14.7338 7.26153C14.2664 6.98716 13.7937 6.79293 13.3155 6.67883L13.0001 3.99998H11.0155L10.6847 6.6692C10.1745 6.78972 9.7033 6.97433 9.27125 7.22305C8.8392 7.47177 8.42703 7.79228 8.03473 8.1846L5.5501 7.14998L4.56548 8.84998L6.7251 10.4596C6.64177 10.6968 6.58344 10.9436 6.5501 11.2C6.51677 11.4564 6.5001 11.7263 6.5001 12.0096C6.5001 12.2699 6.51677 12.525 6.5501 12.775C6.58344 13.025 6.63856 13.2718 6.71548 13.5154L4.56548 15.15L5.5501 16.85L8.0251 15.8C8.32767 16.1025 8.64786 16.3663 8.98568 16.5913C9.32351 16.8163 9.6905 17.0006 10.0867 17.1442C10.1161 17.9852 10.2911 18.7775 10.6117 19.5211C10.9322 20.2647 11.361 20.9243 11.8982 21.5H9.69245ZM10.4867 14.5923C10.5674 14.3423 10.6626 14.1032 10.7722 13.875C10.8818 13.6468 11.0059 13.4263 11.1443 13.2135C10.9482 13.0801 10.7937 12.9077 10.6809 12.6961C10.568 12.4846 10.5116 12.2525 10.5116 12C10.5116 11.5833 10.6575 11.2291 10.9491 10.9375C11.2408 10.6458 11.595 10.5 12.0116 10.5C12.2578 10.5 12.4908 10.5574 12.7107 10.6721C12.9305 10.7868 13.1071 10.9423 13.2405 11.1385C13.4533 11 13.6728 10.8776 13.8991 10.7712C14.1254 10.6647 14.3603 10.5763 14.6039 10.5058C14.3488 10.0494 13.9914 9.68429 13.5318 9.41058C13.0722 9.13686 12.5655 9 12.0116 9C11.1693 9 10.4588 9.29198 9.87993 9.87595C9.3011 10.4599 9.01168 11.1679 9.01168 12C9.01168 12.55 9.1434 13.0557 9.40685 13.5173C9.67032 13.9788 10.0303 14.3371 10.4867 14.5923ZM16.8847 19.625L19.6251 16.8846L16.8847 14.1442L16.2616 14.7673L17.9463 16.4423H14.1347V17.3269H17.9213L16.2616 19.0019L16.8847 19.625ZM16.8847 21.5C15.6104 21.5 14.5225 21.0493 13.6213 20.148C12.72 19.2467 12.2694 18.1589 12.2694 16.8846C12.2694 15.6102 12.72 14.5224 13.6213 13.6212C14.5225 12.7199 15.6104 12.2692 16.8847 12.2692C18.1591 12.2692 19.2469 12.7199 20.1482 13.6212C21.0494 14.5224 21.5001 15.6102 21.5001 16.8846C21.5001 18.1589 21.0494 19.2467 20.1482 20.148C19.2469 21.0493 18.1591 21.5 16.8847 21.5Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconSetup.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconSetup;
