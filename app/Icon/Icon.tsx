import React from "react";

interface IconProps {
  name:
    | "star"
    | "half-star"
    | "star-outline"
    | "search"
    | "hamburger"
    | "close";
  className?: string;
  width?: number;
  height?: number;
}

const Icon = ({ name, className, width, height }: IconProps) => {
  switch (name) {
    case "star":
      return (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0L12.8331 6.10054L19.5106 6.90983L14.5841 11.4895L15.8779 18.0902L10 14.82L4.12215 18.0902L5.41591 11.4895L0.489435 6.90983L7.16687 6.10054L10 0Z"
            fill="#FFC633"
          />
        </svg>
      );
    case "half-star":
      return (
        <svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.81966 19.0211L10 15.5827V0L7.02108 6.41449L0 7.26543L5.18 12.0807L3.81966 19.0211Z"
            fill="#FFC633"
          />
        </svg>
      );
    case "star-outline":
      return (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.18708L12.3796 6.31114L12.4968 6.56344L12.773 6.59691L18.3816 7.27666L14.2437 11.1233L14.0399 11.3127L14.0934 11.5856L15.1801 17.1298L10.2431 14.3831L10 14.2478L9.75691 14.3831L4.8199 17.1298L5.90657 11.5856L5.96008 11.3127L5.75633 11.1233L1.61842 7.27666L7.22703 6.59691L7.50319 6.56344L7.62036 6.31114L10 1.18708Z"
            stroke="#FFC633"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M12.1667 21C17.4134 21 21.6667 16.7467 21.6667 11.5C21.6667 6.25329 17.4134 2 12.1667 2C6.91998 2 2.66669 6.25329 2.66669 11.5C2.66669 16.7467 6.91998 21 12.1667 21Z"
            fill="#272E38"
          />
          <path
            d="M21.9667 22C21.7867 22 21.6067 21.93 21.4767 21.8L19.6167 19.94C19.3467 19.67 19.3467 19.23 19.6167 18.95C19.8867 18.68 20.3267 18.68 20.6067 18.95L22.4667 20.81C22.7367 21.08 22.7367 21.52 22.4667 21.8C22.3267 21.93 22.1467 22 21.9667 22Z"
            fill="#272E38"
          />
        </svg>
      );
    case "hamburger":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_65_131)">
            <path
              d="M3 5H21V6H3V5ZM3 13H21V12H3V13ZM3 20H21V19H3V20Z"
              fill="#1F2328"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_131">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.728 12.7279L21.2133 21.2132"
            stroke="#272E38"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7281 21.2132L21.2134 12.7279"
            stroke="#272E38"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
