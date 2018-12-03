import React from 'react';
import './App.css';

const Halendar = ({halendar, deleteHal}) => {
    const halList = halendar.map(hal => {
      return(
        <div className="hal" key={hal.id}>
          <div>Title: {hal.Title}</div>
          <div>Time: {hal.Time} </div>
          <div>Place: {hal.Place}</div>

          <button onClick={() => {deleteHal(hal.id)}}> Delete Hal </button>
        </div>

      )
    })
    return(
      <div className="hal-list">
      {halList}
      </div>
    )
  }

export default Halendar
