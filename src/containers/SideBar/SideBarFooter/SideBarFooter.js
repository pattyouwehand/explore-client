
import React from 'react';
import './SideBarFooter.scss'

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <div>About Explore</div>
        <div>Creators Advertise</div>
        <div>Developers +Explore</div>
        <div>Legal</div>
      </div>
      <div className='footer-block'>
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className='footer-block'>
        <div>All prices include VAT</div>
      </div>
    </React.Fragment>
  );
}