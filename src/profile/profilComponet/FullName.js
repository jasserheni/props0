import React from 'react'


   const FullName = props => {
   console.log(this,props)
   const{
     esm,about
   } = props
   return (
        <div>
            
        <title>PROFIL</title>
        
        <header className="head">
          <h1 className = "name">{esm.props} </h1>
          <ul className="navmenu">
            <li ><a href="#">{about.props}</a></li>
            <li ><a href="#">Projects</a></li>
            <li ><a href="#">Contact</a></li>
          </ul>
        </header>
        </div>
    )
}

export default  FullName;