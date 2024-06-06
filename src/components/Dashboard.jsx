import React, { useState, useEffect } from 'react'
import Menu from './Menu';
import Stats from './Stats';
import Actions from './Actions';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [exams, setExams] = useState(null);


    useEffect(() => {
        const getData = async () => {
            const data = await fetch('http://www.localhost:3000/students')
            const studentsInfo = await data.json();

            setData(studentsInfo);


            const getExams = await fetch('http://www.localhost:3000/exams');
            const exams = await getExams.json();

            setExams(exams);
        }
        getData();
    }, [])

    return (
            <div>
                <header>
                    <h1>Constantin Brancoveanu Highschool</h1>
                </header>
                <Stats />
                <Actions data={data} exams={exams}/>
                <Menu>
                    <p>Dashboard</p>
                    <p>Messages</p>
                    <p>My classes</p>
                    <p>Students</p>

                    <p>Main Settings</p>
                    <p>Notifications</p>
                </Menu>



            </div>

    );

}

export default Dashboard;