import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h2 className='text-6xl font-bold'>Hello Dashbpard page</h2>
            {children}
        </div>
    );
};

export default layout;