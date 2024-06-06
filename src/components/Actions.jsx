import React, { useState } from 'react'

const Actions = ({ data, exams }) => {
    const [showActions, setShowActions] = useState(true);
    const [showStudents, setShowStudents] = useState(false);
    const [showAttendance, setShowAttendance] = useState(false);
    const [showExams, setShowExams] = useState(false);
    const [showGrades, setShowGrades] = useState(false);

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
            <h1>test</h1>
            <div className="card-with-data">
                <div className="card-with-data-wrapper">
                    <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"></path></svg>
                    <button onClick={()=>  window.print()}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M4 10c0-1.886 0-2.828.586-3.414C5.172 6 6.114 6 8 6h8c1.886 0 2.828 0 3.414.586C20 7.172 20 8.114 20 10v2c0 .943 0 1.414-.293 1.707C19.414 14 18.943 14 18 14h-.7c-.141 0-.212 0-.256-.044C17 13.912 17 13.841 17 13.7V13c0-.943 0-1.414-.293-1.707C16.414 11 15.943 11 15 11H9c-.943 0-1.414 0-1.707.293C7 11.586 7 12.057 7 13v.7c0 .141 0 .212-.044.256C6.912 14 6.841 14 6.7 14H5c-.471 0-.707 0-.854-.146C4 13.707 4 13.47 4 13z"></path><path fill="currentColor" fillOpacity={0.25} d="M7 20.262V13c0-.943 0-1.414.293-1.707C7.586 11 8.057 11 9 11h6c.943 0 1.414 0 1.707.293c.293.293.293.764.293 1.707v7.262c0 .334 0 .501-.11.576c-.11.074-.265.012-.576-.112l-1.628-.652a.53.53 0 0 0-.186-.055a.53.53 0 0 0-.186.055l-2.128.852a.53.53 0 0 1-.186.055a.53.53 0 0 1-.186-.055l-2.128-.852a.53.53 0 0 0-.186-.055a.53.53 0 0 0-.186.055l-1.628.652c-.311.124-.466.186-.576.112c-.11-.075-.11-.242-.11-.576"></path><path stroke="currentColor" strokeLinecap="round" d="M9.5 14.5h4m-4 3h5"></path><path fill="currentColor" d="M7 4.74c0-.693 0-1.039.164-1.288a1 1 0 0 1 .288-.288C7.702 3 8.047 3 8.739 3h6.522c.692 0 1.038 0 1.288.164a1 1 0 0 1 .287.288c.164.25.164.595.164 1.287c0 .104 0 .156-.025.193a.149.149 0 0 1-.043.043C16.895 5 16.842 5 16.74 5H7.261c-.104 0-.156 0-.193-.025a.15.15 0 0 1-.043-.043C7 4.895 7 4.842 7 4.74"></path></g></svg></button>
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
                            <table id="printableArea">
                                <thead>
                                    <tr>
                                        <th>Nume</th>
                                        <th>Prenume</th>
                                        <th>Nota</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map(student => {
                                    return (
                                        <tr key={student.nrmatricol}>
                                            <td >{student.nume} </td>
                                            <td>{student.prenume}</td>
                                            <td>{student.nota}</td>
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