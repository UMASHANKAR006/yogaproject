import React from 'react';
import './InstructionalVideosPage.css';
import Navbar from './Navbar';
import Footer from '../footer/footer';

const InstructionalVideosPage = () => {
  return (
      <>
      <Navbar/>


    <div className="instructional-videos-page-container">
      <h1>Instructional Videos</h1>

      <div className="video-grid">
        <div className="video-card">
          <div className="video-thumbnail">
            <img src="https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.2.1205036737.1688965289&semt=sph" alt="Video Thumbnail" />
          </div>
          <h2 className='black'> Yoga Pose Tutorial 1</h2>
          <p>A step-by-step guide to mastering the perfect yoga pose.</p>
          <a href="https://youtu.be/Fky9YEwDUvw" target="_blank" rel="noopener noreferrer" className='watch'>Watch Video</a>
        </div>

        <div className="video-card">
          <div className="video-thumbnail">
            <img src="https://img.freepik.com/premium-vector/yoga-day-creative-template_1396-463.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.2.1205036737.1688965289&semt=ais" alt="Video Thumbnail" />
          </div>
          <h2 className='black'>Yoga Pose Tutorial 2</h2>
          <p>A step-by-step guide to mastering another yoga pose.</p>
          <a href="https://youtu.be/JqyHToMWl3E" target="_blank" rel="noopener noreferrer" className='watch'>Watch Video</a>
        </div>

        <div className="video-card">
          <div className="video-thumbnail">
            <img src="https://img.freepik.com/premium-photo/fitness-sport-people-healthy-lifestyle-concept-woman-making-yoga-meditation-lotus-pose-mat-infinity-edge-pool-hotel-resort-background_380164-118251.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.2.1205036737.1688965289&semt=ais" alt="Video Thumbnail" />
          </div>
          <h2 className='black'>Breathing Techniques 1</h2>
          <p>Learn different breathing techniques for relaxation and focus.</p>
          <a href="https://youtu.be/0KVtGlvpzFU" target="_blank" rel="noopener noreferrer" className='watch'>Watch Video</a>
        </div>

        <div className="video-card">
          <div className="video-thumbnail">
            <img src="https://img.freepik.com/free-vector/meditation-concept-with-woman_23-2147850862.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.2.1205036737.1688965289&semt=ais" alt="Video Thumbnail" />
          </div>
          <h2 className='black'>Breathing Techniques 2</h2>
          <p>Explore more breathing techniques for mindfulness.</p>
          <a href="https://youtu.be/Uyt1lKizBI8" target="_blank" rel="noopener noreferrer"  className='watch'>Watch Video</a>
        </div>

        <div className="video-card">
          <div className="video-thumbnail">
            <img src="https://img.freepik.com/premium-vector/international-yoga-day-june-21st-celebrations-world-yoga-day_156779-913.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.2.1205036737.1688965289&semt=ais" alt="Video Thumbnail" />
          </div>
          <h2 className='black'>Yoga Flow for Beginners</h2>
          <p>A gentle flow sequence to introduce beginners to yoga.</p>
          <a href="https://youtu.be/VzY6XuOSoHw" target="_blank" rel="noopener noreferrer" className='watch'>Watch Video</a>
        </div>

        <div className="video-card">
          <div className="video-thumbnail">
            <img src="https://img.freepik.com/premium-photo/human-sitting-meditation-position-tree-light-particles-art_827343-152.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.2.1205036737.1688965289&semt=sph" alt="Video Thumbnail" />
          </div>
          <h2 className='black'>Meditation Techniques</h2>
          <p>Learn various meditation techniques for mental clarity and peace.</p>
          <a href="https://youtu.be/Kk7--moip1w" target="_blank" rel="noopener noreferrer"  className='watch'>Watch Video</a>
        </div>

        {/* Add more video cards as needed */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default InstructionalVideosPage;
