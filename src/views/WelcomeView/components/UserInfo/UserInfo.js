import React from 'react';

import { useLanguage } from '../../../../hooks';

function UserInfo() {
  const language = useLanguage('welcomeView.userInfo');

  return (
    <div className='user-info row'>
      {Object.keys(language).map((userInfo) => (
        <div
          key={userInfo}
          className='user-info-description col-12 mb-3'
          dangerouslySetInnerHTML={{ __html: language[userInfo] }}
        />
      ))}
    </div>
  );
}

export default UserInfo;
