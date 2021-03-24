import React, { useEffect, useState } from "react";

function ProgressiveBarGroup({ name, percent }) {
  return (
    <div className="progress-wrapper">
      <div className="name">{name}</div>
      <div className="bar" data-size={`${percent}`}>
        {percent}%
      </div>
    </div>
  );
}

export default ProgressiveBarGroup;
