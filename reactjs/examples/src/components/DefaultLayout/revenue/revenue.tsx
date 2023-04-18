import React, { useState } from 'react';

import './revenue.css'

const Revenue = (props: { revenue: string }) => {
  return (
    <div className="revenue_container">
      <div className='revenue-span'>
        <span>{props.revenue}</span>
      </div>
    </div>
  );
}
export default Revenue;


