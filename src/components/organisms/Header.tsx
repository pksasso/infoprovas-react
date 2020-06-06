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
      <HorizontalMenu items={items} />
      <div className="columns is-mobile is-centered">
        <div className="column is-6-mobile is-3-tablet is-3-desktop is-3-widescreen is-2-fullhd">
          <Logo className="image is-3by2" imageSource={logo} />
        </div>
      </div>
    </div>
  );
};
