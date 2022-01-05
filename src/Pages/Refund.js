import React,{useState} from 'react'
import MaterialTable from "material-table";
import "./Refund.css"
import { Button } from '@material-ui/core';

export default function Refund() {
    const columns = [
        { title: 'Request ID', field: 'ID' },
        {
          title: 'Product',
          field: 'product',
        },
        { title: 'Refunded Date', field: 'Refunded' },
        { title: 'Refunded Amt', field: 'Amt'},
      ];
    const data = [
        { ID: '123AB1', Refunded: '2 Jun 2021', Amt: "$122.00", product: "Air Pods" },
        { ID: '123AB1', Refunded: '2 Jun 2021', Amt: "$122.00", product: "Air Pods" },
        { ID: '123AB1', Refunded: '2 Jun 2021', Amt: "$122.00", product: "Air Pods" },
        { ID: '123AB1', Refunded: '2 Jun 2021', Amt: "$122.00", product: "Air Pods" },
        { ID: '123AB1', Refunded: '2 Jun 2021', Amt: "$122.00", product: "Air Pods" },
        { ID: '123AB1', Refunded: '2 Jun 2021', Amt: "$122.00", product: "Air Pods" },
        
      ]

    return (
        <div className='Box1'>
        <div className='refundLg'>
            <h3 className='refundLgTitle'>Refund Requests
            </h3>
            <div className='refundTable'></div>
            <MaterialTable
      title="Rufunds"
      columns={columns}
      data={data}
      actions={[
        {
          icon: 'save',
        }
      ]}
      options={{
        paging: false,
        headerStyle: {
          backgroundColor: "#4CAF50",
          fontWeight: 600,
          fontSize: "20px",
          color: "white",
        }, 
        rowStyle: {
            fontWeight: 600,
          },
    }}
      components={{
        Action: props => (
            <>
          <Button
            onClick={() => alert("Approved!")}
            style={{textTransform: 'none',backgroundColor:"#5dfbaf",color:"Black"}}
            size="small"
          >
            Approve
          </Button>

          <Button
            onClick={() => alert("Rejected!")}
            style={{textTransform: 'none',color:"White", backgroundColor:"#ff615c", marginLeft:"5px"}}
            size="small"
          >
            Reject
          </Button>
          </>
        ),
      }}
    />
        </div>
        </div>
    )
}
