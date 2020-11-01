import React from 'react';

import { SelectLanguage, EnterNick, UserInfo } from './components';

import './style.scss';

function WelcomeView() {
  return (
    <section className='welcome-view container'>
      <div className='row d-flex justify-content-center'>
        <SelectLanguage />
      </div>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'>
          <EnterNick />
        </div>
      </div>
      <UserInfo />
    </section>
  );
}

export default WelcomeView;
