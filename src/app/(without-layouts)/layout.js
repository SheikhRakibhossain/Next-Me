import Nav from '@/components/Header/Nav';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
        </div>
    );
};

export default layout;