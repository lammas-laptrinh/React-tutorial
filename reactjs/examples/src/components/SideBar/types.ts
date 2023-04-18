export interface SideBarProps {
  items: Array<SideBarItemProps>;
}

export interface SideBarItemProps {
  id: string | number;
  name: string;
  icon: string;
}

export interface SideBarTitleProps {
  text: string;
}
