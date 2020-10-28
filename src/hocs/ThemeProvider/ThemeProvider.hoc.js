import React from 'react';
import { useSelector } from 'react-redux';
import { node } from 'prop-types';

import { getTheme } from '../../selectors/theme.selectors';

function ThemeProvider({ children }) {
  const theme = useSelector(getTheme);

  return <main className={theme}>{children}</main>;
}

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export default ThemeProvider;
