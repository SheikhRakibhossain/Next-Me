import React from 'react';

const VideoPage = ({params}) => {
    const [year, music] = params.hamas || [];
    return (
        <div>
            This video published in the year of {new Date().gateFullYear()} for {hamas}
        </div>
    );
};

export default VideoPage;