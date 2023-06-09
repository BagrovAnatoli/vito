/* eslint-disable react/jsx-props-no-spreading */
import cn from 'classnames';
import Button from '../Button/index';

import classes from './index.module.css';

function ButtonMain({
 colorBtn, content, btnClassName, ...attrs
}) {
  const color = colorBtn === 'white' ? 'white' : 'violet';

  return (
    <Button
      {...attrs}
      className={cn(classes.btn, classes[color], btnClassName)}
    >
      {content}
    </Button>
  );
}

export default ButtonMain;
