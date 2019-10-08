import React, { memo } from "react";

import "./dropdown.styles.css";

const DropDown = ({title, selectedOption, isVisible, showDrop}) => (
  <>
  <div className="dropdown" onClick={showDrop}>
    <div className="d-flex justify-content-between align-items-center">
      <p>{title || selectedOption}</p>
      <svg
        width="12"
        height="10"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.86603 13.5C8.48113 14.1667 7.51888 14.1667 7.13398 13.5L0.20577 1.5C-0.179131 0.833334 0.301994 0 1.07179 0L14.9282 0C15.698 0 16.1791 0.833333 15.7942 1.5L8.86603 13.5Z"
          fill="black"
          fill-opacity="0.6"
        />
      </svg>
    </div>
  </div>
  <div className={isVisible? 'list-item is-visible': 'list-item'}>
    
  </div>
  </>
);

export default memo(DropDown)