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
                'Manage and support multiple eCommerce platforms (WooCommerce, Magento, Shift4), ensuring site stability, accurate product data, and seamless user experiences across all storefronts',
                'Design and implement custom system integrations and automation workflows to connect internal platforms, third-party services, and APIs, improving operational efficiency and data consistency across systems.',
                'Collaborate with designers and stakeholders to implement frontend components (HTML, CSS, JavaScript), including full homepage redesigns and revenue-driving landing pages.',
                'Develop and maintain custom PHP applications and features to extend platform functionality, enhance usability, and streamline internal operations.',
                'Administer AWS infrastructure and serverless solutions, including EC2 and Lambda, to support application hosting, implement custom business logic, automate workflows, and improve the scalability and reliability of eCommerce systems',
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
        // {
        //     id: 5,
        //     date: 'May 2016 - August 2016',
        //     title: 'Warehouse Associate',
        //     company: 'One Beat Medical, Miramar, FL',
        //     responsibilities: [
        //         'Processed orders for shipment throughout the United States for a large AED wholesale distributor',
        //         'Received inventory from manufacturers',
        //         'Invoiced orders for customers',
        //     ]
        // }
    ]

    const educationData = [
        {
            id: 1,
            date: 'December 2022',
            name: 'Bachelor of Science (B.S.) in Mathematics',
            school: 'Florida International University, Miami, FL, US'
        },
        {
            id: 2,
            date: 'September 2024',
            name: 'Certification in Coding Bootcamp',
            school: 'University of Miami, Coral Gables, FL, US'
        },
        {
            id: 3,
            date: 'January 2026',
            name: 'AWS Cloud Institute',
            school: 'Amazon Web Services'
        }
        // {
        //     id: 4,
        //     date: 'Expected graduation September 2024',
        //     name: 'High School Diploma',
        //     school: 'Chaminade-Madonna College Preparatory, Hollywood, FL, US'
        // }
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
                        <li>Jacksonville, FL</li>
                    </ul>
                    <h3>Skills</h3>
                    <ul>
                        <li>Front End Development | HTML •
                        CSS • JavaScript • Bootstrap •
                        Materialize</li>
                        <li>Back End Development | Python • Node.js • Express.js • ReactJS • SQL • Handlebars.js • Sequelize • MongoDB</li>
                        <li>Cloud Computing | AWS</li>
                        <li>Ecommerce Platforms | WooCommerce • Magento • Shift4 • Kibo</li>
                        <li>ERP Platforms | NetSuite</li>
                        <li>CRM | Hubspot • Microsoft Dynamics 365</li>
                    </ul>
                </div>
                <div className='resume-right'>
                    <div className='objective'>
                        <h2>Objective</h2>
                        <p>Dynamic and results-driven software developer with a robust foundation in front-end and back-end technologies, including HTML, CSS, JavaScript, Python, Node.js, ReactJS, and SQL. Proven expertise in managing integrations and software implementations while automating and streamlining operations to enhance efficiency and reliability. Committed to continuous learning and delivering scalable, user-focused solutions that drive innovation in software projects. Recognized for a collaborative approach, adaptability, and a strong focus on achieving impactful results in fast-paced environments.</p>
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
                            <li>NetSuite SuiteFoundation</li>
                            <li>AWS Certified Cloud Practitioner</li>
                        </ul>
                        
                    </div>
                    <div className='badges'>
                        <h2>Badges</h2>
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="98881f72-1ee8-4c24-97cd-894b38498992" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                    </div>
                </div>
            </div>
            <div className='resume-footer'>
                <h1>Click the button here to dowload my resume</h1>
                <a href="/Michael_Drag_Resume_2026-04-17.pdf" download>
                    <button>Download Resume</button>
                </a>
            </div>
        </div>
    );
}

export default Resume
