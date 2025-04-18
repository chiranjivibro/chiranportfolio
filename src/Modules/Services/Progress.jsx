import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ percentage, text, color }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[150px] h-[150px] ">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={2}  // Change thickness (default is 8)
          styles={buildStyles({
            textColor: color,
            pathColor: color,
            trailColor: "#f0f0f0",
          })}
        />
      </div>
      <p className="mt-5 text-gray-700 font-primary-head font-medium text-[21px] sm:text-[21px] md:text-[21px] lg:text-[23px] xl:text-[23px]">{text}</p>
    </div>
  );
}

export default ProgressBar