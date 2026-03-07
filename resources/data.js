const portfolioData = {
    // Personal Details
    name: "SOMENATH SAU",
    role: "Cloud & Data Professional",
    subtitle: "Focused on cloud infrastructure, analytics, and problem-solving.",
    heroImage: "resources/media/Somenath_Sau.jpg",
    resumeLink: "resources/media/somenathCV.pdf",
    email: "somenathsau@gmail.com",

    // Typing Effect Skills
    typingSkills: ["Cloud Engineer", "Data Analyst"],

    // Social Links
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/somenathsau/",
        github: "https://github.com/somenathsau/",
        email: "mailto:somenathsau@gmail.com"
    },

    // Hero Highlights
    heroHighlights: [
        "🌐 Cloud Engineer",
        "📊 Data Analyst"
    ],

    // Hero Skills Ticker (Deprecated/Fallback)
    heroSkills: ["SQL", "Python", "AWS", "Excel", "Power BI", "Linux"],

    // About Me
    about: {
        description: [
            "Hey! I'm <span class='highlight'>Somenath Sau</span>, I've been close to a computer since an early age, and been passionate about it ever since.",
            "I am a <span class='highlight'>Data & Cloud Enthusiast</span> and I really liked to crafting seamless digital experiences, from <span class='highlight'>Data Analysis</span> to <span class='highlight'>Cloud Infrastructure</span>. I do programming in various <span class='highlight'>Languages</span> and technologies.",
            "\"I bring a comprehensive approach to building scalable and efficient systems\" and had the privilege to worked in a <span class='highlight'>Recruitment Company</span> and a <span class='highlight'>SaaS Company</span>.",
            "I'm interested in building something awesome with code and currently focused on <span class='highlight'>Data Science</span>, <span class='highlight'>Cloud Computing</span> and <span class='highlight'>AI</span>.",
            "When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play Badminton! 🏸 or cricket! 🏏"
        ],
        aboutImage: "resources/media/Somenath-1.png",
        techStack: [
            { name: "SQL", icon: "database" },
            { name: "Python", icon: "code" },
            { name: "AWS", icon: "cloud" },
            { name: "Power BI", icon: "bar-chart-2" }
        ]
    },

    // Education
    education: [
        {
            title: "Master of Computer Applications (MCA)",
            institution: "KIIT University, BBSR",
            year: "2022 - 2024",
            grade: "CGPA: 7.83", /* Update with actual score */
            description: "Specializing in Data Science and Cloud Computing. Graduated with honors.",
            credentialLink: "https://drive.google.com/file/d/1TSnZ40uAztN65L_6KxdvZ3E9p1kb20nx/view?usp=drive_link"
        },
        {
            title: "Bachelor of Computer Applications (BCA)",
            institution: "Trident Academy of Creative Technology, BBSR",
            year: "2018 - 2021",
            grade: "CGPA: 7.47", /* Update with actual score */
            description: "Major in Computer Science. Foundational knowledge in programming and database management.",
            credentialLink: "https://drive.google.com/file/d/176k0TkTn23BIiwMioxoJQnHkLW51Ow8-/view?usp=drive_link"
        },
        {
            title: "Higher Secondary (10+2) Science",
            institution: "Sai +2 Science College, Takatpur",
            year: "2016 - 2018",
            grade: "Result: Pass", /* Update with actual score */
            description: "Major in Physics, Chemistry and Mathematics",
            //credentialLink: "#"
        }
    ],

    // Experience
    experience: [
        {
            role: "Data Scientist Intern",
            company: "CodeClause",
            location: "Remote",
            duration: "Nov 2023 – Dec 2023",
            type: "Internship",
            description: "Developed ML models for Speech Emotion Recognition and Loan Risk Prediction, and performed large-scale Uber ride data analysis. Achieved 85%+ accuracy through feature engineering, EDA, and model optimization."
        },
        {
            role: "AI Contributor",
            company: "Outlier AI",
            location: "Remote",
            duration: "Sep 2024 – May 2025",
            type: "Freelance",
            description: "Completed 500+ RLHF and SFT evaluation tasks, reviewing LLM responses across open-ended and structured prompts. Assessed outputs for instruction adherence, truthfulness, reasoning quality, and safety compliance, maintaining 95%+ quality accuracy."
        }
    ],

    // Projects
    projects: [
        {
            title: "AWS EC2 Cloud Monitoring Tool",
            description: "This project monitors server resource usage including CPU, memory, and disk usage on an AWS EC2 instance.",
			techStack: ["AWS EC2", "Bash Scripting", "Cron Schedular"],
            image: "resources/media/AWS_monitoring.png",
            codeLink: "https://github.com/somenathsau/AWS-EC2-Cloud-Monitoring-Tool",
            demoLink: "https://cloudwatch.amazonaws.com/dashboard.html?dashboard=ResourceUsage&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTQ0MzUxMTA0OTQ2OCIsIlUiOiJ1cy1lYXN0LTFfcTJsRVB0cm5KIiwiQyI6IjIxZmw2bHE1b3VmdTBsZnIwdjQyM3ZidmJmIiwiSSI6InVzLWVhc3QtMTpiZTkyOTA5Ny00ZTYyLTQ3OWMtOWIzNi05ZmZmN2U1YmE5YzAiLCJNIjoiUHVibGljIn0="
        },
		{
            title: "Crime Data Analysis in India",
            description: "Analyzed Indian crime statistics to identify patterns using statistical analysis and machine learning.",
			techStack: ["Python", "Matplotlib", "Scikit-learn"],
            image: "resources/media/crime_correlation_heatmap.png",
            codeLink: "https://github.com/somenathsau/Crime_Report_in_India_2013",
            demoLink: "https://nbviewer.org/github/somenathsau/Crime_Report_in_India_2013/blob/main/Crime_Report_Analysis_2013.ipynb"
        },
		{
            title: "Uber Data Analysis",
            description: "Analyzed 10K+ Uber ride records to uncover demand trends and peak-hour patterns.",
            techStack: ["Python", "Numpy", "Pandas"],
            image: "resources/media/Uber_Project.png",
            codeLink: "https://github.com/somenathsau/CodeClause-data-science-internship/tree/main/Project%203%20-%20Uber%20Data%20Analysis",
            demoLink: "https://nbviewer.org/github/somenathsau/CodeClause-data-science-internship/blob/main/Project%203%20-%20Uber%20Data%20Analysis/Uber%20data%20analysis.ipynb"
        },
        {
            title: "Speech Emotion Recognition",
            description: "Developed a Speech Emotion Recognition model using audio feature extraction, achieving 88%+ classification accuracy.",
            techStack: ["Python", "Matplotlib", "PyAudio"],
            image: "resources/media/speech_emotion.jpg",
            codeLink: "#",
            demoLink: "#"
        }
        
    ],

    // Skills Section
    skills: [
        {
            category: "Cloud & Infrastructure",
            items: [
                { name: "AWS (EC2, S3, IAM)", icon: "cloud" },
                { name: "Linux", icon: "terminal" },
                { name: "Basic Networking(VPC, Security Groups)", icon: "wifi" },
            ]
        },
        {
            category: "Data Analytics",
            items: [
                { name: "Excel", icon: "table" },
                { name: "Power BI", icon: "bar-chart" },
                { name: "Pandas", icon: "layout" },
                { name: "Matplotlib", icon: "layout" },
            ]
        },
        {
            category: "Programming and Databases",
            items: [
                { name: "Python", icon: "code" },
                { name: "SQL", icon: "database" },
                { name: "HTML 5", icon: "code" },
                { name: "CSS 3", icon: "code" },
                { name: "MySQL", icon: "database" },
                { name: "JavaScript", icon: "code" },
            ]
        },
        {
            category: "LLM Evaluation & Annotation",
            items: [
                { name: "RLHF Annotation", icon: "edit-3" },
                { name: "Prompt Engineering", icon: "message-square" },
                { name: "Response Evaluation", icon: "check-circle" },
                { name: "Safety Review", icon: "shield-check" }
            ]
        },
        {
            category: "Tools & Version Control",
            items: [
                { name: "VS Code", icon: "monitor" },
                { name: "Git & GitHub", icon: "git-branch" },
                { name: "Jupyter Notebook", icon: "notebook" },
            ]
        }
        // {
        //     category: "Soft Skills",
        //     items: [
        //         { name: "Communication", icon: "message-circle" },
        //         { name: "Problem Solving", icon: "puzzle" },
        //         { name: "Team Leadership", icon: "users" },
        //         { name: "Adaptability", icon: "refresh-cw" }
        //     ]
        // }
    ],

    // Certifications
    certifications: [
        {
            title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
            issuer: "LinkedIn Learning",
            year: "June 2025",
            credentialLink: "https://www.linkedin.com/learning/certificates/1899cbc5a9bcf6d12c823c702aeed4c975e463580ebceb87222d61ca65718aee" // Replace with actual link
        },
        {
            title: "Deloitte Australia - Data Analytics Job Simulation",
            issuer: "Forage",
            year: "May 2025",
            credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_cYkMuanGSYDTrvMry_1748362553606_completion_certificate.pdf" // Replace with actual link
        },
        {
            title: "Commonwealth Bank - Introduction to Data Science Job Simulation",
            issuer: "Forage",
            year: "May 2025",
            credentialLink: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/smwfytX3mcLboA9bf_2sNmYuurxgpFYawco_cYkMuanGSYDTrvMry_1747032386986_completion_certificate.pdf" // Replace with actual link
        },
        {
            title: "Cognizant - Artificial Intelligence Job Simulation",
            issuer: "Forage",
            year: "June 2024",
            credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_cYkMuanGSYDTrvMry_1718646885974_completion_certificate.pdf" // Replace with actual link
        },
        {
            title: "AWS Academy Cloud Foundations",
            issuer: "Amazon Web Services (AWS)",
            year: "Sept 2023",
            credentialLink: "https://www.credly.com/badges/2022e39a-a797-4f35-a533-5a15904b193b" // Replace with actual link
        }
    ]
};





