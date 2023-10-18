import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";

const Navbar = ({ friends }) => {
  return (
    <nav className="pl-4 pt-2 border-solid rounded-[40px] border-green border-2 
    flex flex-col font-navbar font-bold text-3xl xl:min-w-[200px] max-xl:max-w-[80px]">
      {[
        ['Profile', '/','home-heart'],
        ['Messages', '/dialogs','envelope'],
        ['News', '/news','news'],
        ['Music', '/music','music'],
        ['Settings', '/settings','cog'],
        ['Friends', '/friends','game']
      ].map(([title, url, icon]) => (
        <NavLink
        to={url}
        className={({ isActive }) =>
          isActive ? 'text-active-nav-link text-4xl' : 'text-nav-link'
        }
      >
        <span className="xl:hidden">
          <box-icon size="md" name={icon}></box-icon>
        </span>
        <span className="max-xl:hidden">{title}</span>
      </NavLink>
      ))}
      <div>
        {friends.slice(0, 4).map((friend) => {
          return (
            <img
              className='w-[30px] h-[30px] m-[5px] rounded-full'
              src={friend.image}
              alt="avatar"
              key={friend.id}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
