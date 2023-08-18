import React from 'react';
import data from '../../db'
import './style.scss'
const index = () => {
    return (
        <div>
              
            <div className="container">
                <Breadcrumb className='py-4' items={[
                    {
                        title: (
                            <NavLink
                                to="/"
                            >
                                Home
                            </NavLink>
                        ),
                    },
                    {
                        title: (
                            <NavLink
                                to="/plants"
                            >
                                Plants
                            </NavLink>
                        ),
                    },]}
                />
            </div>

        </div>
    );
};

export default index;