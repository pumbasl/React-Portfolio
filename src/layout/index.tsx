import React from 'react';
import { Outlet } from 'react-router-dom';
import { Monsters } from '../components';

import NavigationBar from './Navigation/Navigation';
import { Wrapper } from './style';

export default function Layout(){
    return(
        <Wrapper>
            <NavigationBar />
            <Monsters />
            <Outlet />
        </Wrapper>
    );
}