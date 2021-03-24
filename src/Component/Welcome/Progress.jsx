import React from "react";
import ProgressiveBarGroup from "../Common/ProgressBar/progressiveBarGroup";

function Progress() {
  return (
    <>
      <ProgressiveBarGroup name="HTML" percent={90} />
      <ProgressiveBarGroup name="CSS" percent={90} />
      <ProgressiveBarGroup name="SASS" percent={70} />
      <ProgressiveBarGroup name="Javascript" percent={75} />
      <ProgressiveBarGroup name="React" percent={65} />
      <ProgressiveBarGroup name="Redux" percent={65} />
      <ProgressiveBarGroup name="Nodejs" percent={60} />
      <ProgressiveBarGroup name="Express" percent={60} />
      <ProgressiveBarGroup name="MongoDB" percent={60} />
    </>
  );
}

export default Progress;
