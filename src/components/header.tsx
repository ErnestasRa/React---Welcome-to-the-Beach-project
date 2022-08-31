import React from 'react'
import classes from './header.module.scss'
import Link from './link'
import linkClasses from './link.module.scss'

const Header: React.FC = () => 
  (
    <header className={classes.showCase}>
    <h1>Welcome To The Beach</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
    <Link className={linkClasses.link} target='blank' href='/'>Read more</Link>
  </header>
  )


export default Header