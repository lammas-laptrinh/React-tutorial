import React from "react";
import { SideBarProps } from "./types";
import SideBarItem from "./SideBarItem";

export default function SideBar(props: SideBarProps) {
  return (
    <div className="side-bar-container">
      <div className="sideBarHeader">
        <SideBarItem id={0} name="Header" icon="" />
      </div>
      <div className="sideBarItemSection">
        <SideBarItem id={1} name="Test1" icon="" />
        <SideBarItem id={2} name="Test1" icon="" />
      </div>
    </div>
  );
}
