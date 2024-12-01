import nelioPic from '../../assets/nelio-linkedin.jpeg'
import andresPic from '../../assets/andres-linkedin.jpeg'
import '../../styles/rec.css'

function Recommendations() {

    const recommendationData = [
        {
            id: 1,
            profilePic: andresPic,
            name: 'Andres Felipe Jimenez Ferreira',
            linkedinLink: 'https://www.linkedin.com/in/andres-felipe-jimenez-ferreira/',
            role: 'Software Engineer, Web Developer Educator',
            dateWritten: '11/3/2024',
            message: "As Michael's Teaching Assistant, I had the opportunity to observe his solid foundational coding skills firsthand. Michael demonstrates an impressive ability to grasp new programming languages and concepts quickly, adapting to them with ease in a remarkably short timeframe."

        },
        {
            id: 2,
            profilePic: nelioPic,
            name: 'Nelio Contrera',
            linkedinLink: 'https://www.linkedin.com/in/neliocc/',
            role: 'Director of Software Engineering | Full Stack Software Engineer | Mentor',
            dateWritten: '10/18/2024',
            message: "I've had the privilege of teaching Michael, throughout the course he demonstrated a keen eagerness to learn, embraced feedback, and consistently acted on suggestions to enhance his skills. Michael's progression has been remarkable; he now has the skills to tackle intricate web development challenges. I am confident in recommending him as an invaluable asset to any team, where his talent, drive, and positive attitude would undoubtedly contribute to success."
        }

]
return (
    <div>
        {/* <h1 className='title'>Recommendations</h1> */}
        <div className="recommendations-container">
            {recommendationData.map((rec) => (
                <div key={rec.id} className="recommendation-card">
                    <img src={rec.profilePic} alt={`${rec.name} profile`} className="profile-pic" />
                    <div className="recommendation-details">
                        <a href={rec.linkedinLink} target="_blank" rel="noopener noreferrer" className="linkedin-link"><h2>{rec.name}</h2></a>
                        {rec.role && <p className="role">{rec.role}</p>}
                        <p className="date-written">Date Written: {rec.dateWritten}</p>
                        <p className="message">{rec.message}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Recommendations