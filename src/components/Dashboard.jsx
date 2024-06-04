import React from 'react'
import Menu from './Menu';
import Stats from './Stats';
import Actions from './Actions';

const Dashboard = () => {

    return (
        <>
            <div>
                <header>
                    <h1>Constantin Brancoveanu Highschool</h1>
                </header>
                <Stats />
                <Actions />
                <Menu>
                    <p>Dashboard</p>
                    <p>Messages</p>
                    <p>My classes</p>
                    <p>Students</p>

                    <p>Main Settings</p>
                    <p>Notifications</p>
                </Menu>



            </div>
        </>
    );

}

export default Dashboard;