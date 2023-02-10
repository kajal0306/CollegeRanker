import React from "react";
import "../css/collegeInfo.css";
const CollegeInfo = (props) => {
  const { fees, user_review_rating } = props;

  return (
    <div class="college-info">
      <div class="fee-info">
        <div class="text-group">
          <p class="text-class"> {fees} </p>B.E/B.tech first year fee
        </div>
        <div class="text-group">
          <p class="text-class"> {user_review_rating} </p>Based on 415 reviews
        </div>
      </div>
      <div>
        <div class="ranking-info">
          <p>Ranked 50 out of 100 NIRF</p>
        </div>

        <div class="ranking-info">
          <p>Ranked 25 out of 216 this week</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;
