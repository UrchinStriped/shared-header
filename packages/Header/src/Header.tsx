import React, {MouseEvent, ReactNode} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Header.styles';
import Logo from './logo.png';
import {IMainNavLink} from './types';
import { NavLink } from 'react-router-dom';

interface Props {
  links: IMainNavLink[];
  classes: { [name: string]: string };
  rightSide?: ReactNode;
  logoDoubleClick: (e: MouseEvent<HTMLImageElement>) => void;
}

interface Link extends IMainNavLink {
  classes: { [name: string]: string };
}

const MainNavLink = (props: Link) => {
  const { to, modifier, clicked, badge, label, icon, classes } = props;
  return (
    <NavLink
      to={to}
      className={`${classes.navLink} ${modifier || ''}`}
      activeClassName={`${classes.navLink}--active`}
      onClick={clicked}
    >
      <div className={`${classes.navLink}__icon`}>
        {icon}
        {badge}
      </div>
      <div className={`${classes.navLink}__text`}>
        {label}
      </div>
    </NavLink>
  );
}

const Header = (props: Props) => {
  const renderLinks = () => {
    if(!props.links.length) {
      return null;
    }

    return props.links
      .filter(l => l.isVisible)
      .map((link: IMainNavLink, i: number) => {
        return (
          <MainNavLink
            {...link}
            classes={props.classes}
            key={i} />
        );
    });

  };

  return (
    <header className={props.classes.header}>
      <img
        className="main-nav-logo"
        src={Logo}
        alt="Universal Weather and Aviation, Inc."
        onDoubleClick={event => props.logoDoubleClick(event)}
      />
      <div className={props.classes.navLinks}>
        {renderLinks()}
      </div>
      <div className={props.classes.rightSide}>
        {props.rightSide}
      </div>
    </header>
  );
}

Header.defaultProps = {
  logoDoubleClick: () => {},
  links: []
};

export default withStyles(styles)(Header);
