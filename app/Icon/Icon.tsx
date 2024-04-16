import React from "react";

interface IconProps {
  name:
    | "star"
    | "half-star"
    | "star-outline"
    | "search"
    | "hamburger"
    | "close"
    | "youtube"
    | "instagram"
    | "twitter"
    | "facebook"
    | "grafik"
    | "inovation"
    | "idea"
    | "profile"
    | "plus";
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_216_186)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0405 14.88L24 20.925L21 24L14.8875 18.036C13.3458 18.9954 11.5658 19.5026 9.75 19.5C4.365 19.5 0 15.1245 0 9.75C0 4.365 4.3755 0 9.75 0C15.135 0 19.5 4.3755 19.5 9.75C19.5027 11.5628 18.9971 13.3401 18.0405 14.88ZM2.9955 9.678C2.9955 13.398 6.0165 16.428 9.7455 16.428C13.4655 16.428 16.4955 13.4055 16.4955 9.678C16.4955 5.958 13.473 2.928 9.7455 2.928C6.0255 2.928 2.9955 5.949 2.9955 9.678Z"
              fill="#28166F"
            />
          </g>
          <defs>
            <clipPath id="clip0_216_186">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
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

    case "youtube":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17V7.17Z"
            fill="#F8F8F8"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2M7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
            fill="#F8F8F8"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28001 9.09 5.11001 7.38 3.00001 4.79C2.63001 5.42 2.42001 6.16 2.42001 6.94C2.42001 8.43 3.17001 9.75 4.33001 10.5C3.62001 10.5 2.96001 10.3 2.38001 10V10.03C2.38001 12.11 3.86001 13.85 5.82001 14.24C5.19074 14.4122 4.5301 14.4362 3.89001 14.31C4.16162 15.1625 4.69355 15.9084 5.41103 16.4429C6.1285 16.9775 6.99546 17.2737 7.89001 17.29C6.37364 18.4904 4.494 19.1393 2.56001 19.13C2.22001 19.13 1.88001 19.11 1.54001 19.07C3.44001 20.29 5.70001 21 8.12001 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6V6Z"
            fill="#F8F8F8"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.198 21.5H13.198V13.49H16.802L17.198 9.51H13.198V7.5C13.198 7.23478 13.3034 6.98043 13.4909 6.79289C13.6784 6.60536 13.9328 6.5 14.198 6.5H17.198V2.5H14.198C12.8719 2.5 11.6001 3.02678 10.6625 3.96447C9.72479 4.90215 9.198 6.17392 9.198 7.5V9.51H7.198L6.802 13.49H9.198V21.5Z"
            fill="#F8F8F8"
          />
        </svg>
      );
    case "grafik":
      return (
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 44H42.5C43.0304 44 43.5391 43.7893 43.9142 43.4142C44.2893 43.0391 44.5 42.5304 44.5 42C44.5 41.4696 44.2893 40.9609 43.9142 40.5858C43.5391 40.2107 43.0304 40 42.5 40H8.5V6C8.5 5.46957 8.28929 4.96086 7.91421 4.58579C7.53914 4.21071 7.03043 4 6.5 4C5.96957 4 5.46086 4.21071 5.08579 4.58579C4.71071 4.96086 4.5 5.46957 4.5 6V42C4.5 42.5304 4.71071 43.0391 5.08579 43.4142C5.46086 43.7893 5.96957 44 6.5 44Z"
            fill="#28166F"
          />
          <path
            d="M14.5 36C14.8054 35.9992 15.1066 35.9285 15.3805 35.7933C15.6544 35.6581 15.8937 35.462 16.08 35.22L23.22 26L27.54 29.7C27.7397 29.8723 27.9715 30.0034 28.222 30.0858C28.4726 30.1682 28.737 30.2002 29 30.18C29.5282 30.136 30.0173 29.8843 30.36 29.48L44.02 13.34C44.3621 12.9342 44.529 12.4091 44.484 11.8803C44.439 11.3514 44.1858 10.8621 43.78 10.52C43.3742 10.1778 42.8491 10.0109 42.3203 10.0559C41.7914 10.1009 41.3021 10.3542 40.96 10.76L28.6 25.36L24.2 21.6C23.9939 21.4244 23.7543 21.2925 23.4958 21.2122C23.2372 21.132 22.965 21.1051 22.6957 21.1331C22.4265 21.1612 22.1657 21.2436 21.9292 21.3754C21.6927 21.5072 21.4855 21.6857 21.32 21.9L12.88 32.8C12.6561 33.0985 12.5202 33.4536 12.4876 33.8254C12.455 34.1971 12.527 34.5705 12.6955 34.9034C12.8641 35.2363 13.1224 35.5154 13.4413 35.7092C13.7601 35.903 14.1269 36.0037 14.5 36Z"
            fill="#28166F"
          />
        </svg>
      );
    case "inovation":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_160_196)">
            <path
              d="M28.5893 31.7257C28.3388 30.3582 27.0785 29.063 25.7147 28.7863L19.3371 27.4761C20.2185 26.3592 20.9078 25.0079 21.3915 23.6528C22.208 23.3387 23.0245 22.5882 23.2452 21.6296C23.5419 20.3581 23.1866 19.2299 22.39 18.7512L22.3738 17.8524C23.0532 15.6796 23.3674 12.1356 20.0714 10.2881C18.5954 9.46287 17.3862 9.43046 16.4737 9.74211C16.3266 9.37187 16.7417 8.82836 16.7417 8.82836C15.99 8.81714 15.6023 9.22353 15.4415 9.45415C14.4293 9.01036 13.1141 8.83459 11.4387 9.2173C6.06591 10.4439 5.5012 17.5183 6.51593 19.0467C5.75676 19.5578 5.44885 20.6834 5.78418 21.9313C6.04223 22.8912 6.88991 23.6117 7.72014 23.8922C8.23249 25.2086 8.94928 26.515 9.84433 27.5896L7.71515 28.0483L3.77842 28.906C2.41589 29.1952 1.16556 30.5016 0.931201 31.8716L0.0386413 37.0512C-0.0860179 37.763 0.0885049 38.4361 0.523565 38.9522C0.959872 39.4621 1.59563 39.7438 2.31616 39.7426L27.2829 39.6117H27.3166C28.0271 39.5992 28.6504 39.31 29.0718 38.7952C29.4981 38.2778 29.6589 37.6047 29.5268 36.8991L28.5893 31.7257ZM20.8031 28.8125L15.9713 34.5194L15.2296 31.4802L16.1945 30.5864L15.5712 30.0242C16.7006 29.7923 17.6979 29.1864 18.5505 28.3512L20.8031 28.8125ZM8.56408 22.8675C8.12653 22.9684 7.10681 22.4349 6.8924 21.6383C6.67051 20.8293 6.85376 20.0614 7.2938 19.9268C7.4247 19.8906 7.56307 19.9143 7.70144 19.9829L7.68025 18.7637C7.68149 18.7587 7.68523 18.7587 7.68523 18.7525C7.68274 18.7375 7.68025 18.7138 7.67775 18.6951L7.67027 18.2775C7.76003 17.2441 8.7037 15.262 14.1214 16.93C15.9863 17.5084 17.112 16.5223 17.6679 15.2396C19.5017 15.4104 20.757 17.4635 21.2481 18.7363L21.2668 19.7485C21.3329 19.7123 21.4015 19.6862 21.4688 19.6712C21.4675 19.6799 21.4675 19.6974 21.4651 19.7024C21.48 19.7198 21.5074 19.7099 21.5423 19.6762C21.5847 19.6712 21.6259 19.6637 21.6707 19.6762C22.1158 19.7946 22.3252 20.5526 22.1357 21.3753C21.95 22.1706 20.9564 22.7341 20.5176 22.658C20.3381 23.2352 20.0851 23.8635 19.7909 24.4955C18.6802 25.5913 16.7367 25.6648 15.6472 25.6062C15.4914 25.2771 15.161 25.0465 14.7734 25.0465C14.2348 25.0465 13.7998 25.4828 13.7998 26.0201C13.7998 26.5574 14.2373 26.9937 14.7734 26.9937C15.09 26.9937 15.3568 26.8329 15.535 26.601C15.737 26.6147 15.9589 26.6247 16.2107 26.6247C16.9798 26.6247 17.9347 26.5337 18.8335 26.2158C18.5966 26.5686 18.3399 26.9114 18.0619 27.2206C17.9247 27.3702 17.7814 27.5135 17.6355 27.6519C17.4772 27.8015 17.3114 27.9374 17.1419 28.072C16.4076 28.6255 15.5749 28.9808 14.6462 28.9957C13.6951 29.0169 12.8424 28.6866 12.0807 28.1493C11.9037 28.0221 11.7342 27.8887 11.5696 27.7441C11.4175 27.612 11.2717 27.4649 11.1283 27.319C9.9291 26.0612 9.06272 24.3322 8.56408 22.8675ZM10.6621 28.4497C11.5659 29.2874 12.6143 29.8783 13.7935 30.0653L13.2076 30.6051L14.185 31.4889L13.4781 34.5206L8.49552 28.9234L10.6621 28.4497ZM28.2951 38.1494C28.0633 38.4324 27.7117 38.5907 27.3028 38.5932L27.3116 39.1006L27.2841 38.5932L22.4087 38.6194L22.395 35.9467C22.3925 35.665 22.1644 35.4418 21.8827 35.4418C21.8814 35.4418 21.8789 35.4418 21.8752 35.4418C21.5984 35.4493 21.379 35.6762 21.379 35.9517L21.394 38.6269L8.21005 38.6942L8.19509 36.0215C8.19384 35.741 7.96447 35.5129 7.68399 35.5154C7.68399 35.5154 7.68025 35.5154 7.679 35.5154C7.39852 35.5216 7.17912 35.7485 7.17912 36.0265L7.19532 38.7017L2.31492 38.7279C1.90105 38.7303 1.54328 38.5795 1.30268 38.2953C1.06583 38.0123 0.973585 37.6346 1.04339 37.2282L1.93845 32.0474C2.103 31.0875 3.04667 30.1002 4.00031 29.8945L7.35489 29.1677L14.3882 37.0686C14.4866 37.1783 14.625 37.2444 14.7746 37.2407C14.9205 37.2369 15.0601 37.1709 15.1561 37.0587L21.9375 29.0456L25.5078 29.7811C26.4639 29.978 27.415 30.9516 27.5896 31.909L28.537 37.0811C28.613 37.4825 28.527 37.8665 28.2951 38.1494ZM42.6546 16.4089H37.5374V11.1832C40.2761 11.44 42.4489 13.6464 42.6546 16.4089ZM30.9977 17.0484C30.9977 13.9494 33.4822 11.435 36.57 11.3764V17.2653H42.3442C42.232 20.3007 39.7438 22.7291 36.6797 22.7291C33.5395 22.7266 30.9977 20.1823 30.9977 17.0484ZM25.6187 8.25867V25.9665H30.8432V31.6609L36.5376 25.9665H47.9988V8.25867H25.6187ZM46.4281 24.3908H35.8894L32.4176 27.8651V24.3921H27.1944V9.82937H46.4318L46.4281 24.3908Z"
              fill="#28166F"
            />
          </g>
          <defs>
            <clipPath id="clip0_160_196">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "idea":
      return (
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5001 6V8M38.6401 11.86L37.2201 13.28M10.3601 11.86L11.7801 13.28"
            stroke="#FFC66C"
            stroke-width="4.375"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M34.5001 26C34.4929 23.5145 33.5605 21.1208 31.8845 19.2854C30.2085 17.45 27.909 16.3046 25.4344 16.0723C22.9598 15.8401 20.4874 16.5377 18.4992 18.0293C16.511 19.5208 15.1495 21.6992 14.6801 24.14C14.4108 25.5387 14.4502 26.9793 14.7957 28.3611C15.1411 29.7429 15.7842 31.0326 16.6801 32.14C17.8611 33.5767 18.5047 35.3801 18.5001 37.24V40C18.5001 40.5304 18.7108 41.0391 19.0858 41.4142C19.4609 41.7893 19.9696 42 20.5001 42H28.5001C29.0305 42 29.5392 41.7893 29.9143 41.4142C30.2893 41.0391 30.5001 40.5304 30.5001 40V37.24C30.4974 35.4176 31.1264 33.6507 32.2801 32.24C33.7174 30.4782 34.5017 28.2737 34.5001 26Z"
            stroke="#28166F"
            stroke-width="4.375"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "profile":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5 7.063C16.5 10.258 14.57 13 12 13C9.42797 13 7.49997 10.258 7.49997 7.062C7.49997 3.868 9.15997 2 12 2C14.84 2 16.5 3.867 16.5 7.063ZM4.10197 20.142C4.48697 20.6 6.14497 22 12 22C17.855 22 19.512 20.6 19.898 20.143C19.9338 20.0991 19.9602 20.0483 19.9757 19.9938C19.9912 19.9393 19.9954 19.8822 19.988 19.826C19.9 18.944 19.106 15 12 15C4.89397 15 4.09997 18.944 4.01097 19.826C4.00373 19.8823 4.00807 19.9394 4.02372 19.9939C4.03937 20.0484 4.066 20.0982 4.10197 20.142Z"
            fill="white"
          />
        </svg>
      );
    case "plus":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18M12 6V18"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
