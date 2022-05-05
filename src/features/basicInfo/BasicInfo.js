import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import getIconByName, { getBackgroundByIconName } from "../icons/icons";
import "./BasicInfo.scss";
import { selectIcon } from "../weatherSlice";
import { selectAdress } from "../positionSlice";
import "./BasicInfo.scss";

export default function BasicInfo() {
  const adresa = useSelector(selectAdress, shallowEqual);
  const icon = useSelector(selectIcon, shallowEqual);
  return (
    <div className="container basic-info" style={getBackgroundByIconName(icon)}>
      <div className="row basic-info">
        <div className="col-6">
          <p style={{ marginTop: "10px" }}>{adresa?.toString()}</p>
        </div>
        <div className="col-6">
          <span>{getIconByName(icon, "60px", "45px")}</span>
        </div>
      </div>
    </div>
  );
}
