import React from 'react'
import './Header.css'
import { HeatMapOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to="/" className="link">
                <div className="header-elts">
                    <div>
                        <HeatMapOutlined />
                    </div>
                    <h1>Pizza Reeflex</h1>
                </div>
            </Link>
        </header>
    )
}

export default Header
