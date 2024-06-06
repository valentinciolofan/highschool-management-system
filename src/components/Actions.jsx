import React, { useState } from 'react'

const Actions = ({ data, exams }) => {
    const [showActions, setShowActions] = useState(true);
    const [showStudents, setShowStudents] = useState(false);
    const [showAttendance, setShowAttendance] = useState(false);
    const [showExams, setShowExams] = useState(false);
    const [showGrades, setShowGrades] = useState(false);

    console.log(setShowExams);
    const handleBack = () => {
        setShowActions(true);
        setShowStudents(false);
        setShowAttendance(false);
        setShowExams(false);
        setShowGrades(false);
    }
    const handleStudentsQuickAction = async () => {
        setShowActions(false);
        setShowStudents(true);
    }
    const handleAttendanceQuickAction = () => {
        setShowActions(false);
        setShowAttendance(true);
    }
    const handleExamsQuickAction = () => {
        setShowActions(false);
        setShowExams(true);
    }
    const handleGradesQuickAction = () => {
        setShowActions(false);
        setShowGrades(true);
    }
    return (
        <>
            <h1>test </h1>
            <div class="card-with-data">
                <div class="card-with-data-wrapper">
                    <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"></path></svg>

                    {showActions ?
                        <div className='quick-actions-container'>
                            <div className='quick-actions-wrapper'>
                                <div className='quick-actions'>
                                    <div className='action' onClick={handleStudentsQuickAction}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32"><path fill="currentColor" d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3zm18 7c-1.456 0-2.608-.198-3.521-.513c.432-.7.68-1.375.82-1.92a6.4 6.4 0 0 0 .193-1.196l.004-.107l.001-.042V21a4.48 4.48 0 0 0-1.145-3h8.241A2.406 2.406 0 0 1 30 20.406S30 25 23 25" /></svg>
                                        <small>Students</small>
                                    </div>
                                    <div className='action' onClick={handleAttendanceQuickAction}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42l-6.59 6.59l-2.58-2.57l-1.42 1.41l4 3.99z"></path></svg>
                                        <small>Attendance</small>

                                    </div>
                                    <div className='action' onClick={handleExamsQuickAction}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 9.25V6L8 2.75L1.75 6L8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5"></path></svg>
                                        <small>Exams</small>

                                    </div>
                                    <div className='action' onClick={handleGradesQuickAction}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.16L64 208.94l28.42 14.22a8 8 0 0 0 7.16 0L128 208.94l28.42 14.22a8 8 0 0 0 7.16 0L192 208.94l28.42 14.22A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176Zm-155.58-35.9a8 8 0 0 0 10.74-3.58L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 3.58 10.74M96 113.89L107.06 136H84.94ZM136 128a8 8 0 0 1 8-8h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1-8-8"></path></svg>
                                        <small>Grades</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''

                    }

                    {showStudents ?
                        <table>
                            <thead>
                                <tr>
                                    <th>Nume</th>
                                    <th>Prenume</th>
                                    <th>Clasa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(student => {
                                    return (
                                        <tr key={student.nrmatricol}>
                                            <td >{student.nume} </td>
                                            <td>{student.prenume}</td>
                                            <td>{student.denclasa}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        : ''
                    }


                    {showAttendance ?
                        <table>
                            <thead>
                                <tr>
                                    <th>Nume</th>
                                    <th>Prenume</th>
                                    <th>Prezente</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(student => {
                                    return (
                                        <tr key={student.nrmatricol}>
                                            <td >{student.nume} </td>
                                            <td>{student.prenume}</td>
                                            <td>{student.status}</td>
                                        </tr>
                                    );

                                })}
                            </tbody>
                        </table >

                        : ''
                    }

                    {
                        showExams ?
                            <table>
                                <thead>
                                    <tr>
                                    <th>Clasa</th>
                                    <th>Profil</th>
                                    <th>Specializare</th>
                                    <th>Disciplina</th>
                                    <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {exams.map(exam => {
                                    let formattedTime;

                                    if (exam.exam_start_time !== null) {
                                        formattedTime = `${exam.exam_start_time.substring(0, 5)}-${exam.exam_end_time.substring(0, 5)}` ;
                                    }
                                    return (
                                        <tr key={exam.id}>
                                            <td>{exam.denclasa}</td>
                                            <td>{exam.profil}</td>
                                            <td>{exam.specializare}</td>
                                            <td >{exam.name} </td>
                                            <td>{formattedTime}</td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                            : ''
                    }

                    {
                        showGrades ? <li>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nume</th>
                                        <th>Prenume</th>
                                        <th>Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map(student => {
                                    return (
                                        <tr key={student.nrmatricol}>
                                            <td >{student.nume} </td>
                                            <td>{student.prenume}</td>
                                            <td>{student.denclasa}</td>
                                        </tr>
                                    );
                                })}
                                        
                                </tbody>
                            </table>
                        </li>
                            : ''
                    }
                </div >

            </div >
        </>
    );

}

export default Actions;