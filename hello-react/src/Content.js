import React from 'react';

function Content(props) {
    return(
      <div>
        <h3> Learn ReactJS Content</h3>
        <p align="center">{props.title}</p>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    );
}

export default Content;
  