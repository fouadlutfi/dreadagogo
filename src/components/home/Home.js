import React from 'react';

//App components
import Featured from './featured/Featured';
import Tour from './tour/Tour';
import Members from './members/Members';
import EmailList from './email-list/EmailList';

const Home = () => (
    [
        <Featured />,
        <Tour />,
        <Members />,
        <EmailList />
    ]
);

export default Home;