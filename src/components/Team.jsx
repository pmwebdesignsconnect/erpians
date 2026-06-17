import React from 'react';
import '../styles/Team.css';

function Team() {
  const teamMembers = [
    {
      avatar: '👨‍💼',
      name: 'Matti Jittu',
      position: 'Chief Executive Officer (CEO)',
      bio: 'Visionary leader driving business strategy, growth, and innovation in SAP consulting services.'
    },
    {
      avatar: '👩‍💼',
      name: 'Pooja',
      position: 'Managing Director',
      bio: 'Oversees operations, client relationships, and ensures successful delivery of SAP solutions.'
    }
  ];

  return (
    <section className="team">
      <div className="container">
        <h1>Our Team</h1>
        <p className="section-subtitle">
          Meet the experts behind Addition Consulting Service
        </p>

        <div className="team-grid">
          {teamMembers.length > 0 ? (
            teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))
          ) : (
            <p>Our Dynamic Team</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Team;