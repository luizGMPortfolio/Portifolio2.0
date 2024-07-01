import './Menu.css'

import { NavLink } from "react-router-dom";


const Menu = () => {

  return (
    <ul className='menu'>
         <NavLink to='/' activeClassName='active' className={'item'} >About</NavLink>
         <NavLink to='/Skills' activeClassName='active' className={'item'}>Skills</NavLink>
         <NavLink to='/Jorney' activeClassName='active' className={'item'}>Jorney</NavLink>
         <NavLink to='/Courses' activeClassName='active' className={'item'}>Courses</NavLink>
         <NavLink to='/Project' activeClassName='active' className={'item'}>Project</NavLink>
         <NavLink to='/Repository' activeClassName='active' className={'item'}>Git</NavLink>
    </ul>
  )
}

export default Menu