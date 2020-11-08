import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';

import { useLanguage } from '../../../../hooks';
import { getUserNick } from '../../../../selectors/user.selectors';

function Header() {
  const language = useLanguage('moviesView.header');

  const nick = useSelector(getUserNick);

  const handleReset = useCallback(() => {
    $('#abortRatingModal').modal('show');
  }, []);

  return (
    <div className='d-flex justify-content-between mb-1'>
      <span>
        {language.hello} {nick}!
      </span>
      <button className='btn btn-danger' onClick={handleReset}>
        {language.reset}
      </button>
    </div>
  );
}

export default Header;
