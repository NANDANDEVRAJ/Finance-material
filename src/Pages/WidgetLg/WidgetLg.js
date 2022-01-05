import React from "react";
import MaterialTable from "material-table";
import "./WidgetLg.css";
export default function widgetLg() {
//   const Button = ({ type }) => {
//     return <button className={"widgetLgButton " + type}> {type}</button>;
//   };
const columns = [
    { title: 'Image', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> },
    { title: 'Customer', field: 'customer' },
    { title: 'Date', field: 'date' },
    { title: 'Amount', field: 'amount' },
    { title: 'Product', field: 'product'},
    { title: 'Status', field: 'status' },
  ];
const data = [
    { date: '2 Jun 2021', amount: '$122.00', product: "AirPods",status:"Dispatched", imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',customer:"Sushanth" },
    { date: '2 Jun 2021', amount: '$122.00', product: "AirPods",status:"Dispatched", imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',customer:"Sushanth" },
    { date: '2 Jun 2021', amount: '$122.00', product: "AirPods",status:"Dispatched", imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',customer:"Sushanth" },
    { date: '2 Jun 2021', amount: '$122.00', product: "AirPods",status:"Dispatched", imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',customer:"Sushanth" },
  ]
  return (
      
    <div className="widgetLg">
      <div className="widgetLgTable">
        <MaterialTable
          title="Latest transactions"
          columns={columns}
          data={data}
          options={{
            paging: false,
            headerStyle: {
              backgroundColor: "#7B1FA2",
              fontWeight: 500,
              fontSize: "18px",
              color: "white",
            },
            rowStyle: {
              fontWeight: 600,
            },
          }}
        />
      </div>
    </div>
  );
}
