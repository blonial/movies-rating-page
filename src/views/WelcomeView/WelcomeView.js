import React from 'react';

import { SelectLanguage, SelectTheme, EnterNick, UserInfo } from './components';

import './style.scss';

function WelcomeView() {
  return (
    <section className='welcome-view container'>
      <div className='row'>
        <div className='col-sm-12 col-lg-6 d-flex justify-content-center'>
          <SelectLanguage />
        </div>
        <div className='col-sm-12 col-lg-6 d-flex justify-content-center'>
          <SelectTheme />
        </div>
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
