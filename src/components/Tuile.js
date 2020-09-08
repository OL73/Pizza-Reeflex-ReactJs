import React from 'react'
import './Tuile.css'

const Tuile = ({ children, link }) => {
    return (
        <div className="tuile-elts" onClick= { link }>
            {children}
        </div>
    )
}

export default Tuile
