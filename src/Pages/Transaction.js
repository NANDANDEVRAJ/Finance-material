import React from "react";
import "../App.css"
import WidgetLg from "./WidgetLg/WidgetLg";
import WidgetSm from "./WidgetSm/WidgetSm";
import Payouts from "./Payouts";


export default function Transaction() {
  return (
    <div className="left">
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
        <Payouts/>
    </div>
  );
}
