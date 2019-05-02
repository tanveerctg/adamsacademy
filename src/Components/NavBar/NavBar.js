import React from 'react'
import classes from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  return (
    <nav className={classes.navContainer} >
        <div  className={classes.nav}>
            <div  className={classes.adamsacademyLogo}>
                <img src="https://www.adamsacademy.com/wp-content/uploads/2018/01/LOGO-web2.png" style={{width:'100%'}}/>
            </div>
            
            <div className={classes.allCourses}>
                <h3 className={classes.courses}>All Courses</h3>
                    <FontAwesomeIcon
                    icon={['fas','search']}
                    transform="grow-4" 
                    className={classes.fontawesome}
                    />
            </div>
            
            <div className={classes.login}>
                <h3 className={classes.courses}>Log in</h3>
                <FontAwesomeIcon
                icon={['fas','shopping-basket']}
                transform="grow-4" 
                className={classes.fontawesome}
                />
            </div>
        </div>
    </nav>
  )
}

export default NavBar;