import { Link } from 'react-router-dom';

import cn from 'classnames';
import LogoIcon from '../LogoIcon';

import classes from './index.module.css';

function Logo({ colorLogo, className }) {
  const color = colorLogo === 'white' ? 'white' : 'black';

  return (
    <div className={classes.container}>
      <Link to="/">
        <LogoIcon className={cn(className, classes.icon, classes[color])} />
      </Link>
    </div>
  );
}

export default Logo;
