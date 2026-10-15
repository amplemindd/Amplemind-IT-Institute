import "../css/Team.css";

const teamMembers = [
  {
    id: 1,
    name: "ABC",
    role: "Founder",
    // image:,
  },
  {
    id: 2,
    name: "XYZ",
    role: "Trainer",
    // image:,
  },
  {
    id: 3,
    name: "123",
    role: "UI/UX Designer",
    // image:,
  },
];

function Team() {
  return (
    <>
    {/* <div id="t-main">
        <p>OUR TEAM MEMBERS</p>
        <p>Meet the people behind our succes</p>
    </div> */}
    <section className="team-section">
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />

              <div className="overlay"></div>

              <div className="share-btn">
                <i className="fas fa-share-alt"></i>
              </div>
            </div>

            <div className="team-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Team;