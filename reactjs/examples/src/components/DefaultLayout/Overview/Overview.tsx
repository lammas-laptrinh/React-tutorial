import React, { useState } from 'react';

import './Overview.css'

const Overview = (props: { overview: string }) => {
  return (
    <div className="overview_container">
      <div className='overview-span'>
        <span>{props.overview}</span>
      </div>
    </div>
  );
}
export default Overview;


