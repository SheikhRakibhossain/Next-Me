import React from 'react';

const CoursesPage = ({params}) => {
    const [year, id]= params.segments;
    return (
        <div>
            I am course page{year}with{id}
            I am course page{year}with{id}
            I am course page{year}with{id}
            I am course page{year}with{id}
            I am course page{year}with{id}
            I am course page{year}with{id}
        </div>
    );
};

export default CoursesPage;