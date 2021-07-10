import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import loaderBlue from './img/loader-blue.svg';
import loaderDark from './img/loader-dark.svg';
import loaderLight from './img/loader-light.svg';

import styles from './UiLoading.module.css';

const UiLoading = ({
  theme = 'blue', 
  isShadow = true,
  classes
}) => {
        const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case 'blue': setLoaderIcon(loaderBlue); break;
      case 'dark': setLoaderIcon(loaderDark); break;
      case 'light': setLoaderIcon(loaderLight); break;
      default: setLoaderIcon(loaderBlue);
  
    }
  })
  return (
    <img 
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon} 
      alt="Loader" 
    
    />

  )
}

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  // classes: PropTypes.string,
}

export default UiLoading;
