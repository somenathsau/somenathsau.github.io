const portfolioData = {
    // Personal Details
    name: "SOMENATH SAU",
    role: "Cloud & Data Professional",
    subtitle: "Focused on cloud infrastructure, analytics, and problem-solving.",
    heroImage: "resources/assets/hero/Somenath_Sau.webp",
    resumeLink: "resources/assets/docs/somenathCV.pdf",
    email: "somenathsau@gmail.com",

    bio: "Passionate about merging <span class='hl-cyan'>Data Analysis</span> with <span class='hl-purple'>Gen AI</span> to turn complex information into <span class='hl-blue'>intelligent action</span>. I believe the future of data isn't just about 'what happened,' but about '<span class='hl-cyan'>what can be generated next</span>.'<br><br>My journey began with a <span class='hl-purple'>curiosity to explore</span> new things on the internet. While discovering <span class='hl-cyan'>ideas and trends</span>, I found myself drawn to <span class='hl-blue'>data</span> and how it tells stories. That curiosity gradually led me into <span class='hl-purple'>Data Analytics</span>, where I now enjoy <span class='hl-blue'>uncovering patterns and insights</span>.",

    // Social Links
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/somenathsau/",
        github: "https://github.com/somenathsau/",
        email: "mailto:somenathsau@gmail.com"
    },


    // About Me
    about: {
        domains: [
            {
                title: "Data Analyst",
                illustration: "resources/assets/images/data_analyst_expertise.png",
                techIcons: ["database", "table", "bar-chart-2", "layout", "code"],
                bullets: [
                    "Performed data cleaning and exploratory analysis on real-world datasets.",
                    "Automated data processing and reporting using Python and SQL.",
                    "Built interactive dashboards for data visualization and insights.",
                    "Applied statistical techniques to identify trends and support decision-making."
                ]
            },
            {
                title: "Generative AI & Prompting",
                illustration: "resources/assets/images/ai_llm_engineer_expertise.png",
                techIcons: ["brain", "message-square", "shield-check", "edit-3", "check-circle"],
                bullets: [
                    "Completed 500+ RLHF and SFT evaluation tasks for LLM outputs.",
                    "Evaluated responses on truthfulness, reasoning, safety, and instruction adherence.",
                    "Performed side-by-side (SxS) comparisons and provided structured feedback.",
                    "Applied prompt engineering to improve response quality and consistency.",
                    "Identified failure patterns and suggested improvements for model responses."
                ]
            }
        ],
        techStack: [
            { name: "🗄 SQL" },
            { name: "🐍 Python" },
            { name: "☁️ AWS" },
            { name: "📊 Power BI" }
        ]
    },

    // Education
    education: [
        {
            title: "Master of Computer Applications (MCA)",
            institution: "KIIT University, BBSR",
            shortName: "KIIT",
            year: "2022 - 2024",
            grade: "CGPA: 7.83", /* Update with actual score */
            description: "Specializing in Data Science and Cloud Computing. Graduated with honors.",
            logo: "resources/assets/icons/kiit-logo.webp", // Add your logo file path here
            credentialLink: "https://kiit.ac.in/"
        },
        {
            title: "Bachelor of Computer Applications (BCA)",
            institution: "Trident Academy of Creative Technology, BBSR",
            shortName: "TACT",
            year: "2018 - 2021",
            grade: "CGPA: 7.47", /* Update with actual score */
            description: "Major in Computer Science. Foundational knowledge in programming and database management.",
            logo: "resources/assets/icons/trident-logo.webp", // Add your logo file path here
            credentialLink: "https://tact.ac.in/"
        },
        {
            title: "Higher Secondary (10+2) Science",
            institution: "Sai +2 Science College, Takatpur",
            shortName: "Sai +2",
            year: "2016 - 2018",
            description: "Major in Physics, Chemistry and Mathematics",
            logo: "resources/assets/icons/sai-logo.webp", // Add your logo file path here
            credentialLink: "https://saihss.in/"
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
            metrics: [
                { val: "85%+", label: "Accuracy" },
                { val: "2", label: "ML Models" }
            ],
            techStack: ["Python", "Scikit-learn", "EDA", "ML Models"],
            description: "Developed ML models for Speech Emotion Recognition and Loan Risk Prediction, and performed large-scale Uber ride data analysis. Achieved 85%+ accuracy through feature engineering, EDA, and model optimization."
        },
        {
            role: "AI Contributor",
            company: "Outlier AI",
            location: "Remote",
            duration: "Sep 2024 – May 2025",
            type: "Freelance",
            metrics: [
                { val: "500+", label: "Tasks done" },
                { val: "95%", label: "Accuracy" }
            ],
            techStack: ["RLHF", "LLM Eval", "Prompt Eng.", "SFT"],
            description: "Completed 500+ RLHF and SFT evaluation tasks, reviewing LLM responses across open-ended and structured prompts. Assessed outputs for instruction adherence, truthfulness, reasoning quality, and safety compliance, maintaining 95%+ quality accuracy."
        }
    ],

    // Projects
    projects: [
        {
            title: "Crime Data Analysis in India",
            description: "Analyzed crime datasets using data cleaning, exploratory data analysis (EDA), and visualization techniques to identify trends and patterns in criminal activities. Developed charts and visual reports in Excel to highlight crime distribution, frequency, and category-wise insights.",
            techStack: ["Python", "Matplotlib", "Scikit-learn"],
            category: "Data Analysis",
            image: "resources/assets/images/crime_correlation_heatmap.webp",
            codeLink: "https://github.com/somenathsau/Crime_Report_in_India_2013",
            demoLink: "https://nbviewer.org/github/somenathsau/Crime_Report_in_India_2013/blob/main/Crime_Report_Analysis_2013.ipynb"
        },
        {
            title: "Uber Data Analysis",
            description: "Analyzed 10K+ Uber ride records to uncover demand trends and peak-hour patterns.",
            techStack: ["Python", "Numpy", "Pandas"],
            category: "Data Analysis",
            image: "resources/assets/images/Uber_Project.webp",
            codeLink: "https://github.com/somenathsau/CodeClause-data-science-internship/tree/main/Project%203%20-%20Uber%20Data%20Analysis",
            demoLink: "https://nbviewer.org/github/somenathsau/CodeClause-data-science-internship/blob/main/Project%203%20-%20Uber%20Data%20Analysis/Uber%20data%20analysis.ipynb"
        },
        {
            title: "AI-Assisted Portfolio Website",
            description: "Developed a responsive developer portfolio using AI-assisted development (Vibe Coding). Implemented an automated contact workflow integrating Google Forms and Google Sheets to capture submissions and trigger email notifications.",
            techStack: ["AI-Assisted Dev", "Automation", "Vibe Coding"],
            category: "AI",
            image: "resources/assets/images/portfolio-home.webp",
            codeLink: "https://github.com/somenathsau/somenathsau.github.io",
            demoLink: "https://somenathsau.github.io"
        },
        {
            title: "AWS EC2 Cloud Monitoring Tool",
            description: "Developed a cloud-based monitoring solution on Amazon EC2 to track server resource usage including CPU, memory, and disk metrics. Implemented Bash scripts and scheduled cron jobs to automate system monitoring and integrated CloudWatch logs and alerts for real-time performance tracking.",
            techStack: ["AWS EC2", "Bash Scripting", "Cron Schedular"],
            category: "Cloud",
            image: "resources/assets/images/AWS_monitoring.webp",
            codeLink: "https://github.com/somenathsau/AWS-EC2-Cloud-Monitoring-Tool",
            demoLink: "https://cloudwatch.amazonaws.com/dashboard.html?dashboard=ResourceUsage&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTQ0MzUxMTA0OTQ2OCIsIlUiOiJ1cy1lYXN0LTFfcTJsRVB0cm5KIiwiQyI6IjIxZmw2bHE1b3VmdTBsZnIwdjQyM3ZidmJmIiwiSSI6InVzLWVhc3QtMTpiZTkyOTA5Ny00ZTYyLTQ3OWMtOWIzNi05ZmZmN2U1YmE5YzAiLCJNIjoiUHVibGljIn0="
        }
        /*{
            title: "Speech Emotion Recognition",
            description: "Developed a Speech Emotion Recognition model using audio feature extraction, achieving 88%+ classification accuracy.",
            techStack: ["Python", "Matplotlib", "PyAudio"],
            image: "resources/assets/images/speech_emotion.jpg",
            codeLink: "#",
            demoLink: "#"
        }*/

    ],

    // Skills Section
    skills: [
        {
            category: "Data Analytics",
            tier: "primary",
            items: [
                { name: "🐍 Python" },
                { name: "🗄 SQL" },
                { name: "🐼 Pandas" },
                { name: "📈 Excel" },
                { name: "📊 Power BI" },
                { name: "📉 Matplotlib" }
            ]
        },
        {
            category: "Generative AI",
            tier: "competitive",
            items: [
                { name: "🤖 RLHF Evaluation" },
                { name: "🧠 Prompt Engineering" },
                { name: "🎯 Response Evaluation" },
                { name: "🛡️ Safety Review" }
            ]
        },
        {
            category: "Tools & Technologies",
            tier: "supporting",
            items: [
                { name: "🌿 Git & GitHub" },
                { name: "📓 Jupyter Notebook" },
                { name: "💻 VS Code" },
                { name: "🐬 MySQL" }
            ]
        },
        {
            category: "Additional Skills",
            tier: "basic",
            items: [
                { name: "🌐 HTML 5" },
                { name: "🎨 CSS 3" }
            ]
        }
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





