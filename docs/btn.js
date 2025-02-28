import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Btn({icon, color}){
    return(
        <button className={"button button--sm button--"+color} style={{padding:"0.5rem"}}><FontAwesomeIcon icon={icon} size="lg"/></button>
      )
  }