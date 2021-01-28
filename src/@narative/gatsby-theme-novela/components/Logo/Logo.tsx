import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="192"
        height="25"
        viewBox="0 0 192 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        {/* Gavin 20200719: Changed SVG logo to text */}
        <text x="0" y="11" dx fontFamily="Helvetica Neue" fontWeight="bold" textAnchor="start" fill={fill}>
          The Noesis
        </text>
        <defs>
          <clipPath id="clip0">
            <rect width="191.156" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="18"
        height="25"
        viewBox="0 0 18 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <text x="0" y="11" dx fontFamily="Helvetica Neue" fontWeight="bold" textAnchor="start" fill={fill}>
          The Noesis
        </text>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;