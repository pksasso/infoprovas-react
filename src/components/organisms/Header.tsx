import React from "react";
import { Logo } from "../atoms/Logo";
import { MenuItem } from "../atoms/MenuItem";
import { HorizontalMenu } from "../molecules/HorizontalMenu";

interface HeaderProps {
  logo: string;
  items: MenuItem[];
}
export const Header = ({ logo, items }: HeaderProps) => {
  return (
    <div className="horizontal-menu">
      <div className="horizontal-menu-items-container">
        <HorizontalMenu items={items} />
      </div>
      <Logo className="horizontal-menu-logo" imageSource={logo} />
    </div>
  );
};
