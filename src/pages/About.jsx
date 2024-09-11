import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div>
                About
            </div>

            <Link to='/about/notre-vision'>Notre Vision</Link>
            <Link to='/about/notre-histoire'>Notre Histoire</Link>
            <Outlet />
        </div>
    );
};

export default About;