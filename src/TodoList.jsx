import React from 'react';
import { BsFillXCircleFill } from "react-icons/bs";

const ToDOLists = (props) =>{
    
    
    return(
    <>
    <div className='todo_style'>
    <div className='delete_button'>
     <BsFillXCircleFill onClick={() => {
      props.onSelect(props.id);
      }}
    />
     </div>
        <li>{props.text}</li>
     </div>
    </>
  );
}


export default ToDOLists;