import React from 'react'
import MaterialTable from "material-table";
import "./WidgetSm.css"

export default function WidgetSm() {
    const columns = [
        { title: 'Image', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> },
        { title: 'Username', field: 'name' }
      ];
    const data = [
        { imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',name:"Sushanth" },
        { imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',name:"Sushanth" },
        { imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',name:"Sushanth" },
        { imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',name:"Sushanth" },
        
      ]
    return (
        <div className='widgetSm'>
        <MaterialTable
      title="Users"
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
      actions={[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        {
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name)
        }
      ]}
    />
        </div>
    )
}
