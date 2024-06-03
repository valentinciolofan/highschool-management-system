import React from 'react'
import Menu from './Menu';

const Dashboard = () => {

    return (
        <>
            <div>
                <header>
                    <h1>Constantin Brancoveanu Highschool</h1>
                </header>
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