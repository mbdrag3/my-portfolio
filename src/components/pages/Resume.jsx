import React from 'react';
import '../../styles/resume.css';

function Resume() {

    const experienceData = [
        {
            id: 1,
            date: 'August 2025 - Present',
            title: 'eCommerce DevOps Engineer',
            company: 'Sarnova',
            responsibilities: [
                'Manage and support multiple eCommerce platforms (WooCommerce, Magento, Shift4), ensuring site stability, accurate product data, and seamless user experiences across all storefronts.',
                'Collaborate with designers and stakeholders to implement frontend components (HTML, CSS, JavaScript), including full homepage redesigns and revenue-driving landing pages.',
                'Develop and maintain custom PHP applications and features to extend platform functionality, enhance usability, and streamline internal operations.',
                'Integrate and optimize third-party tools and services, enhancing out-of-the-box capabilities and improving overall system performance.',
                'Utilize GitHub for version control and collaborative development, ensuring clean deployment processes and efficient code reviews.',
                'Work with tools such as VS Code, phpMyAdmin (SQL), Trello, Jira, and Figma to support end-to-end project delivery, from planning to deployment.',
                'Monitor platform performance and implement continuous updates to improve stability, user experience, and security compliance.'
            ]
        },
        {
            id: 2,
            date: 'April 2023 - August 2025',
            title: 'Marketing, Technology and Operations Specialist',
            company: 'One Beat Medical, Miramar, FL',
            responsibilities: [
                'Manage all integrations and new software implementations.',
                'Utilize innovative problem-solving techniques to address any systems or reporting challenges within the company, ensuring efficient workflows and optimal solutions.',
                'Manage NetSuite ERP and HubSpot CRM system administration responsibilities, ensuring optimal functionality and efficiency.',
                'Create and manage website content including new products, product descriptions, landing pages, and email newsletters.',
                'Create detailed reports analyzing campaign performance and business operations against set objectives.',
                'Develop and implement successful digital marketing campaigns to increase brand awareness and customer engagement.',
                'Coordinated and managed open projects for a digital marketing team, maintaining detailed notes to track progress and ensure success, while leveraging Trello to organize tasks effectively.'
            ]
        },
        {
            id: 3,
            date: 'May 2019 - April 2023',
            title: 'Biomedical Engineer',
            company: 'One Beat Medical, Miramar, FL',
            responsibilities: [
                'Inspected, tested, and repaired Automated External Devices (AEDs)',
                'Maintained data base of all inspected equipment',
                'Assisted customers with equipment issues or queries to resolve issues and educate them regarding device functionality',
                'Participated in live webinars/training sessions to demo devices for customers',
                'Performed onsite inspections and accessory replacement of equipment for contracted customers',
                'Assisted warehouse personnel with order processing and invoicing when needed'
            ]
        },
        {
            id: 4,
            date: 'August 2018 - January 2019',
            title: 'Mechanical Engineering Intern',
            company: 'Arconic, Niles, OH',
            responsibilities: [
                'Responsible for managing orders from vendors and working with machine handlers to grind titanium parts to customer specification',
                'Worked 50-60 hours per week to ensure that my department kept pace with orders',
                'Maintained mechanical products, documentation and product databases through engineering change process.',
                'Assisted in transitioning new products and revised products for production.',
                'Identified and debugged issues using appropriate testing techniques.',
            ]
        },
        {
            id: 5,
            date: 'May 2016 - August 2016',
            title: 'Warehouse Associate',
            company: 'One Beat Medical, Miramar, FL',
            responsibilities: [
                'Processed orders for shipment throughout the United States for a large AED wholesale distributor',
                'Received inventory from manufacturers',
                'Invoiced orders for customers',
            ]
        }
    ]

    const educationData = [
        {
            id: 1,
            date: 'September 2024',
            name: 'Certification in Coding Bootcamp Candidate',
            school: 'University of Miami, Coral Gables, FL, US'
        },
        {
            id: 2,
            date: 'December 2022',
            name: 'Bachelor of Science (B.S.) in Mathematics',
            school: 'Florida International University, Miami, FL, US'
        },
        {
            id: 3,
            date: 'Expected graduation September 2024',
            name: 'High School Diploma',
            school: 'Chaminade-Madonna College Preparatory, Hollywood, FL, US'
        }
    ]

    return (
        <div>
            
            <div className='resume'>
                <div className='resume-left'>
                    <h1>Michael Drag</h1>
                    <h3>Contact</h3>
                    <ul>
                        <li>(954) 907-2449</li>
                        <li>mbdrag3@gmail.com</li>
                        <li>Fort Lauderdale, FL</li>
                    </ul>
                    <h3>Skills</h3>
                    <ul>
                        <li>Front End Development | HTML •
                        CSS • JavaScript • Bootstrap •
                        Materialize</li>
                        <li>Back End Development | Node.js • Express.js • ReactJS • SQL • Handlebars.js • Sequelize • MongoDB</li>
                        <li>NetSuite</li>
                        <li>WooCommerce</li>
                        <li>Magento</li>
                        <li>Shift4</li>
                        <li>Figma</li>
                        <li>Hubspot</li>
                        <li>Software | Acrobat • Dreamweaver • Github • Photoshop • VS Code • Trello</li>
                        <li>Microsoft Office</li>
                        <li>Project Management</li>
                        <li>Technical Reporting</li>
                    </ul>
                </div>
                <div className='resume-right'>
                    <div className='objective'>
                        <h2>Objective</h2>
                        <p>As a highly skilled and motivated professional with a strong foundation in both frontend and back-end development, I am seeking to continue my career as a software developer. With expertise in technologies such as HTML, CSS, JavaScript, Node.js, ReactJS, and SQL, along with practical experience in managing integrations and software implementations, I am eager to leverage my problem-solving abilities and technical expertise to contribute to innovative and impactful software projects. I am dedicated to continuous learning and committed to delivering efficient, scalable, and user-focused solutions.</p>
                    </div>
                    <div className='experience'>
                        <h2>Experience</h2>
                        <ul>
                            {experienceData.map((experience) => (
                                <li className= "experience-li" key={experience.id}>
                                    <p className='experience-date'>{experience.date}</p>
                                    <h3>{experience.title}</h3>
                                    <p>{experience.company}</p>
                                    <ul className='responsibilities-li'>
                                        {experience.responsibilities.map((responsibility, index) => (
                                            <li key={index}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='education'>
                        <h2>Education</h2>
                            {educationData.map((education) => (
                                <div key={education.id} className='education-entry'>
                                    <p>{education.date}</p>
                                    <h3>{education.name}</h3>
                                    <p>{education.school}</p>
                                </div>
                            ))}

                    </div>
                    <div className='certifications'>
                        <h2>Certifications</h2>
                        <ul>
                            <li>University of Miami Coding Bootcamp</li>
                            <li>NetSuite Suitefoundation</li>
                            <li>CPR/AED</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className='resume-footer'>
                <h1>Click the button here to dowload my resume</h1>
                <a href="/Michael_Drag_Resume_sept_2025.pdf" download>
                    <button>Download Resume</button>
                </a>
            </div>
        </div>
    );
}

export default Resume
