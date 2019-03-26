import React from "react";

const Travel = props => (
    <figure>
        <img
        src={props.photo}
        alt={props.destination}
        />
        <figcaption>
        {props.destination} the greatest city in {props.country} is {props.distance} away from Paris.
        </figcaption>
    </figure>
  );

export default Travel;