import React, { useState } from 'react'
export default function List(props) {
    const data = props.list_data;
  return (
      <div>
          {
            data.map((item)=>{
                return(
                    <div className='list'>
                        <img src={item.image} />
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.age} years</li>
                        </ul>
                    </div>
                )  
            })
          }
      </div>
  )
}
