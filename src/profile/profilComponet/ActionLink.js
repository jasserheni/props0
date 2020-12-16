
import React from 'react'
 const ActionLink = (props) => {
    const handleclick = e =>{
        e.preventDefault();
        alert (props.alert);
 console.log(this,props)
    }  ;
 return (
<a href=" " onClick ={handleclick}>click me </a>
    );
};

export default  ActionLink ;