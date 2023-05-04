import React from 'react'
import star from '../assets/icon-star.svg'

const Star = () => {
    return (
        <React.Fragment>
            <div className='circle'>
                <img src={star} />
            </div>
        </React.Fragment>
    )
}

export default Star