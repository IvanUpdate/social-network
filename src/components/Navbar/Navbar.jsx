import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import "boxicons";

const Navbar = ({ friends }) => {
  return (
    <nav className="pl-4 pt-2 border-solid rounded-[40px] border-green border-2 
    flex flex-col font-navbar font-bold text-3xl min-w-[80px]">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? styles.item_active : styles.item
        }
      >
        <span className={styles.icon}>
          <box-icon size="md" name="home-heart"></box-icon>
        </span>
        <span>Profile</span>
      </NavLink>
      <NavLink
        to={"/dialogs"}
        className={({ isActive }) =>
          isActive ? styles.item_active : styles.item
        }
      >
        <span className={styles.icon}>
          <box-icon size="md" name="envelope"></box-icon>
        </span>
        <span>Messages</span>
      </NavLink>
      <NavLink
        to={"/news"}
        className={({ isActive }) =>
          isActive ? styles.item_active : styles.item
        }
      >
        <span className={styles.icon}>
          <box-icon size="md" name="news"></box-icon>
        </span>
        <span>News</span>
      </NavLink>
      <NavLink
        to={"/music"}
        className={({ isActive }) =>
          isActive ? styles.item_active : styles.item
        }
      >
        <span className={styles.icon}>
          <box-icon size="md" name="music"></box-icon>
        </span>
        <span>Music</span>
      </NavLink>
      <NavLink
        to={"/settings"}
        className={({ isActive }) =>
          isActive ? styles.item_active : styles.item
        }
      >
        <span className={styles.icon}>
          <box-icon size="md" name="cog"></box-icon>
        </span>
        <span>Settings</span>
      </NavLink>
      <NavLink
        to={"/friends"}
        className={({ isActive }) =>
          isActive ? styles.item_active : styles.item
        }
      >
        <span className={styles.icon}>
          <box-icon size="md" name="game"></box-icon>
        </span>
        <span>Friends</span>
      </NavLink>
      <div>
        {friends.slice(0, 4).map((friend) => {
          return (
            <img
              className={styles.image}
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
