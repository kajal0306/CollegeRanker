import React from "react";

function LocationInfo(props) {
  const { location } = props;
  return (
    <div class="Location-div">
      <p>{location}</p>
    </div>
  );
}

export default LocationInfo;
