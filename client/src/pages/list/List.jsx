import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css";

const List = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="lsTitle">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input type="text"/>
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <input type="text"/>
              </div>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List