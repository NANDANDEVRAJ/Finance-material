import React from 'react'
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
import "./Payouts.css"

export default function Payouts() {
    const columns = [
        { title: 'Payout ID', field: 'ID' },
        {
          title: 'Created at',
          field: 'created',
        },
        { title: 'Destination', field: 'destination' },
        { title: 'Payout Type', field: 'Type'},
        { title: 'Amount Received', field: 'amount'},
      ];
    const data = [
        { ID: 'payout_id12fel', created: '12 Jan 2021,12:03pm', destination: "ba_1KBKZo5zkcz", Type: "card",amount:"$1100" },
        { ID: 'payout_id12fel', created: '12 Jan 2021,12:03pm', destination: "ba_1KBKZo5zkcz", Type: "card",amount:"$1100" },
        { ID: 'payout_id12fel', created: '12 Jan 2021,12:03pm', destination: "ba_1KBKZo5zkcz", Type: "card",amount:"$1100" },
        { ID: 'payout_id12fel', created: '12 Jan 2021,12:03pm', destination: "ba_1KBKZo5zkcz", Type: "card",amount:"$1100" },
        { ID: 'payout_id12fel', created: '12 Jan 2021,12:03pm', destination: "ba_1KBKZo5zkcz", Type: "card",amount:"$1100" },
      ]
    const btn ="Completed";
    return (
        <div className='PayoutsMain'>
        <div className='Box'>
        <div className='payoutLg'>
<MaterialTable
      title="Payout Details"
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
            backgroundColor: "#FB8C00",
          fontWeight: 600,
          fontSize: "18px",
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
            onClick={() => alert("Rejected!")}
            style={{textTransform: 'none',color:"Black", backgroundColor:"#4FC3F7", marginLeft:"5px"}}
            size="small"
          >
            {btn}
          </Button>
          </>
        ),
      }}
      />
        </div>
        </div>
        </div>
    )
}
