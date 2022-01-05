import React from "react";
import "../App.css";


export default function Dashboard() {
  return (
    <div className="left">
      <div>
         <div className="Topic">
          <h1 className="DashTitle">Dashboard</h1>
          <h3 style={{color: "#757575"}}><i className="bi bi-activity text-danger"></i> Compared to last month</h3>
        </div> 
        <div className="container">
          <div className="item i-one">
            <div>
              <h5>Total Subscription</h5>
              <h2 class="bi bi-person-plus-fill"></h2>
            </div>
            <div>
              <h3>52,125</h3>
              <span>48.4%<i class="bi bi-arrow-up-circle-fill"></i></span>
            </div>
          </div>
          <div className="item i-two">
            <div>
              <h5>Order Status</h5>
              <h2 className="bi bi-cart2"></h2>
            </div>
            <div>
              <h3>45,415</h3>
              <span>11.4%<i class="bi bi-arrow-up-circle-fill"></i></span>
            </div>
          </div>
          <div className="item i-three">
            <div>
              <h5>Monthly Earnings</h5>
              <h2 className="bi bi-person-fill"></h2>
            </div>
            <div>
              <h3>52,453,48</h3>
              <span className="last">+2.4%<i class="bi bi-arrow-up-circle-fill"></i></span>
            </div>
          </div>
        </div>
        <div className="second">
      <div className="second_box">
        <h3 className="second_box_title">Monthly Earnings</h3>
        <div className="data_val">
          <div>3654
            <div className="Light">Market Place</div>
          </div>
          <div>954
            <div className="Light">Last Week</div>
          </div>
          <div>8464
            <div className="Light">Last Month</div>
          </div>
        </div>
        </div>
      
      </div>
      </div>

    </div>
  );
}
