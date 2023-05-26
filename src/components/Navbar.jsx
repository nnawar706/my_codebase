import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navs } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');

  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 
    fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>

          <img src={ logo } alt="logo" className="mt-6 h-9 w-19"/>

          <br/>

          {/* <p className="text-white text-[18px] font-bold cursor-pointer">
            Nafisa Nawar <span className="sm:block hidden">| CodeArc</span>
          </p> */}
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navs.map((link) => (
              <li key={ link.id } className={
                `${
                  active === link.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`
              } onClick={() => setActive(link.id)}>
                <a href={`#${ link.id }`}>{ link.title }</a>
              </li>
            ))
          }
        </ul>

        {/* for small screens */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          
          <img src={ !toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" 
          onClick={() => setToggle(!toggle)}></img>
        
          <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`
          }>

            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {
              navs.map((link) => (
                <li key={ link.id } className={
                  `${
                    active === link.id ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`
                } onClick={() => 
                  {
                    setActive(link.id);
                    setToggle(!toggle);
                  }
                }>
                  <a href={`#${ link.id }`}>{ link.title }</a>
                </li>
              ))
            }
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar