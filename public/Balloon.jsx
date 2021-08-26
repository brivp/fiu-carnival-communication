import * as React from "react";

function Balloon(props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 44 103"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.549 49c9.834 4.555-14.043 39.22 0 53"
        stroke={props.stroke}
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M43 26c0 13.97-9.552 25-21 25S1 39.97 1 26 10.552 1 22 1s21 11.03 21 25z"
        fill={props.fill}
        stroke={props.stroke}
        strokeWidth={2}
      />
      <path
        d="M16 7s-1 2.5 3.5 6.5c-7 4-7.934 3.667-12 14-.85-8.318.177-12.87 8.5-20.5z"
        fill={props.highlight}
      />
    </svg>
  );
}

export default Balloon;
