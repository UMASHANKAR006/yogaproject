import React from 'react';
import './Live.css';
import Navbar from './Navbar';
import Footer from '../footer/footer';
import { Link, useNavigate } from 'react-router-dom';

const LiveSessionPage = () => {
  const sessions = [
    {
      title: 'Morning Flow',
      time: '6:00 AM - 7:00 AM',
      instructor: 'Krishna Chaitanya',
    },
    {
      title: 'Vinyasa Power',
      time: '8:00 AM - 9:00 AM',
      instructor: 'Swami Prabodh Chaitanya',
    },
    {
      title: 'Yin Yoga',
      time: '10:00 AM - 11:00 AM',
      instructor: 'Abin Sur',
    },
    {
      title: 'Gentle Stretch',
      time: '12:00 PM - 1:00 PM',
      instructor: 'Ruchi Phool',
    },
    {
      title: 'Afternoon Flow',
      time: '2:00 PM - 3:00 PM',
      instructor: 'Shobha Bontrapal ',
    },
    {
      title: 'Hatha Yoga',
      time: '4:00 PM - 5:00 PM',
      instructor: 'Lillie Jewell',
    },
    {
      title: 'Restorative Yoga',
      time: '6:00 PM - 7:00 PM',
      instructor: 'Chandrika',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className='btn11'>
    <div className="live-session-page-container">
      <h2>Live Yoga Sessions</h2>

      <div className="session-list">
        {sessions.map((session, index) => (
          <div key={index} className="session-card">
            <div className="session-card-info">
              <h3>{session.title}</h3>
              <p>Time: {session.time}</p>
              <p>Instructor: {session.instructor}</p>
            </div>
            <div className="session-card-actions">
              <button className="join-session-button">
              <Link to="https://meet.google.com/dgi-idhh-ezd">Join Session</Link>

              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default LiveSessionPage;
