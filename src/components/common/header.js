import React from 'react';

export default function Header(props){
    const { heading } = props;
    return (
          <div className="header-bar">
              <h2> {heading}</h2>
          </div>
    )
}