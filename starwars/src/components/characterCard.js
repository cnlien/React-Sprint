import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const CharacterCard = (props) =>{
  return (
    <div className="p-3 m-2 rounded">
      <Toast>
        <ToastHeader>{props.name}</ToastHeader>
        <ToastBody><p>{props.gender}| {props.height} | {props.mass}</p></ToastBody>
      </Toast>
    </div>
  )
}

export default CharacterCard;
