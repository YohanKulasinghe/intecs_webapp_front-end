import React, { Component } from "react";

//Styling
import "./Event.scss";

//Components
import Heading from "../../components/headingBanner/banner";
import EventPagination from "../../components/pagination/EventPagination";
import RightSideBar from "../../components/sidebar/rightsidebar/Rightsidebar";
import LeftSideBar from "../../components/sidebar/leftsidebar/LeftSideBar";

export class Event extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="event-container">
        <Heading />
        <div className="row w-100 ml-0 mr-0">
          <div className="col-md-3 pl-1 pr-1 order-3 order-md-1">
            <LeftSideBar />
          </div>
          <div className="col-md-9 col-lg-6 order-1 order-md-2">
            <EventPagination />
          </div>
          <div className="col-lg-3 order-2 order-md-3">
            <RightSideBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
