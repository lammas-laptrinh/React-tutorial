import React from 'react'
import Revenueleft from './Revenueleft'
import Revenueright from './Revenueright'

function Revenue() {
    return (
        <div className='Revenue'>
            <div>
                <Revenueleft />
            </div>
            <div>
                <Revenueright />
            </div>
        </div>
    )
}

export default Revenue