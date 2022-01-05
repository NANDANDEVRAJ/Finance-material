import React from 'react'
import MaterialTable from "material-table";
import "./Sales.css"

export default function Sales() {
    const columns = [
        { title: 'Image', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> },
        { title: 'Product', field: 'product' },
        { title: 'Price', field: 'price' },
        { title: 'No. of Sales', field: 'Sales', type: 'numeric' },
        {
          title: 'Total Price',
          field: 'Total',
        },
      ];
    const data = [
        { product: 'Air Pods', price: '$122.00', Sales: "2030  items", Total:"$247,660", imageUrl: 'https://manofmany.com/wp-content/uploads/2020/01/Black-Apple-Airpods.jpg' },
        { product: 'Air Pods', price: '$122.00', Sales: "2030  items", Total:"$247,660", imageUrl: 'https://manofmany.com/wp-content/uploads/2020/01/Black-Apple-Airpods.jpg' },
        { product: 'Air Pods', price: '$122.00', Sales: "2030  items", Total:"$247,660", imageUrl: 'https://manofmany.com/wp-content/uploads/2020/01/Black-Apple-Airpods.jpg' },
        { product: 'Air Pods', price: '$122.00', Sales: "2030  items", Total:"$247,660", imageUrl: 'https://manofmany.com/wp-content/uploads/2020/01/Black-Apple-Airpods.jpg' },
        { product: 'Laptop', price: '$122.00', Sales: "2030  items", Total:"$247,660", imageUrl: 'https://manofmany.com/wp-content/uploads/2020/01/Black-Apple-Airpods.jpg' },
        
      ]
    return (
        <div className='left'>
            <div className='sales_data'>
                <div className='sales_one'>
                    <div className="sub_flex-one">
                        <div className='item-1'>350
                        <div className='item-1_title'>
                            Support Requests
                            <br/>
                            <span id="subtitle">Total no. of support request that come in</span>
                            </div>
                        <div className='item-1_title'></div>
                        </div>

                        
                        <div className='buttom'>
                            <div>10 <span>open</span></div>
                            <div>5 <span>Running</span></div>
                            <div>3 <span>solved</span></div>
                        </div>
                    </div>
                    <div className="sub_flex-two">
                    <div className='item-1'>350
                    <div className='item-1_title'>
                            Support Requests
                            <br/>
                            <span id="subtitle">Total no. of support request that come in</span>
                            </div>
                    </div>
                        <div className='buttom'>
                        <div>10 <span>open</span></div>
                            <div>5 <span>Running</span></div>
                            <div>3 <span>solved</span></div>
                        </div>
                    </div>
                </div>
                <div className='sales_two'>
                    <div className='sales_two-1'>
                        <div>$30,200</div><div>All Timmings</div><i className="bi bi-bar-chart"></i>
                    </div>
                    <div className='sales_two-2'>
                        <div>290+</div><div>Page Views</div><i className="bi bi-file-earmark-post-fill"></i>
                    </div>
                    <div className='sales_two-3'>
                        <div>145</div><div>Task</div><i className="bi bi-calendar"></i> 
                    </div>
                    <div className='sales_two-4'>
                        <div>500</div><div>Dowloads</div><i className="bi bi-hand-thumbs-up-fill"></i>
                    </div>
                </div>
            </div>
        <div className='SalesItem'>
            <div className='salesLg'>
            <MaterialTable
      title="Product Details"
      columns={columns}
      data={data}  
      options={{
        paging: false,
        headerStyle: {
          backgroundColor: "#5A67DD",
          fontWeight: 600,
          fontSize: "20px",
          color: "white",
        },
        rowStyle: {
          fontWeight: 600,
        }, 
    }}     
    />
        </div>
        </div>
        </div>
    )
}
