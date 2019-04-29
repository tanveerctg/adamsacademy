import React, { Component } from 'react'
import classes from './Home.module.scss';

export default class Home extends Component {

  render() {
    return (
      <div className={classes.home} >
        <div className={classes.img1Container}>
         <img src="https://www.adamsacademy.com/wp-content/uploads/revslider/inspirationheader/header_penpot.png" style={{width:'100%'}}/>
        </div>
        <div className={classes.img2Container}>
          <img src="https://www.adamsacademy.com/wp-content/uploads/revslider/inspirationheader/header_flowerpot.png" style={{width:'100%'}}/>
        </div>
      </div>
    )
  }
}
