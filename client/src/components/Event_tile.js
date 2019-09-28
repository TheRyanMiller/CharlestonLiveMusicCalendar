import React from 'react';
import './Event_tile.css';

const eventTile = (props) =>{
  let tile = (<div className="content-row"></div>);
  if(props.event.title){
    tile = (
        <div className={"content-row " + (props.event.isRsvpd ? "rsvpd" : "")} onClick={props.click}>
          <div className="col1">
            <span className="xlarge">{props.event.dateDD}</span><br />
            <span className="xsmall">{props.event.dateMMM+", "+props.event.dateYYYY}</span>
          </div>
          <div className="col2">
              <b>{props.event.title ? props.event.title : ""}</b><br />
              {props.event.location ? props.event.location : ""}
          </div>
      </div>
    )
  }
  return (
    <span> {tile} </span>
  )
}

export default eventTile;