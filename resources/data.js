const portfolioData = {
    // Personal Details
    name: "SOMENATH SAU",
    role: "Data Analyst @ Landmine Soft",
    microline: "2+ years experience | Dashboarding | Automation | Gen AI",
    heroImage: "resources/assets/hero/Somenath_Sau.webp",
    resumeLink: "resources/assets/docs/Somenath-Sau-DataAnalyst.pdf",
    email: "mailto:somenathsau@gmail.com",

    bio: "✔ Transform complex data into insights that improve reporting efficiency. " +
        "<br>✔ Build automated dashboards using Python, SQL, and Power BI. " +
        "<br>✔ Streamline analytical workflows using Gen AI. " +
        "<br>✔ Identify trends to support faster and smarter business decisions. ",

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
                illustration: "resources/assets/images/expertise_data.png",
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
                illustration: "resources/assets/images/expertise_ai.png",
                techIcons: ["brain", "message-square", "shield-check", "edit-3", "check-circle"],
                bullets: [
                    "Completed 500+ RLHF and SFT evaluation tasks for LLM outputs.",
                    "Evaluated responses on truthfulness, reasoning, safety, and instruction adherence.",
                    "Performed side-by-side (SxS) comparisons and provided structured feedback.",
                    "Applied prompt engineering to improve response quality and consistency.",
                    "Identified failure patterns and suggested improvements for model responses."
                ]
            }
        ]
    },

    // Education
    education: [
        {
            badge: "KIIT",
            institution: "Kalinga Institute of Industrial technology",
            years: "2022–2024",
            degree: "Master of Computer Applications",
            location: "BBSR, Odisha",
            score: "7.83",
            scoreLabel: "CGPA",
            tag: "Computer Applications",
            description: "Specializing in Data Science and Big Data",
            logo: "resources/assets/icons/kiit-logo.webp",
            website: "https://kiit.ac.in/"
        },
        {
            badge: "TACT",
            institution: "Trident Academy of Creative Technology",
            years: "2018–2021",
            degree: "Bachelor of Computer Applications",
            location: "BBSR, Odisha",
            score: "7.47",
            scoreLabel: "CGPA",
            tag: "Computer Application",
            description: "Foundational programming and database management",
            logo: "resources/assets/icons/trident-logo.webp",
            website: "https://tact.ac.in/"
        },
        {
            badge: "XII",
            institution: "Sai +2 Science College",
            years: "2016–2018",
            degree: "Higher Secondary Examination",
            location: "Palbani, Baripada",
            score: "Passed",
            scoreLabel: "",
            tag: "Science",
            description: "",
            logo: "resources/assets/icons/sai-logo.webp",
            website: "https://saihss.in/"
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
            techStack: ["Python", "Scikit-learn", "Numpy", "Pandas", "Exploratory Data Analysis"],
            description: "Developed machine learning models for Speech Emotion Recognition and Loan Risk Prediction, " +
                "and conducted large-scale Uber ride data analysis. Improved model performance through feature " +
                "engineering, exploratory data analysis (EDA), and optimization, achieving 85%+ accuracy."
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
            techStack: ["RLHF", "SFT Annotation", "Response Evaluation", "AI safety", "Prompt Engineering", "LLM Assessment"],
            description: "Completed 500+ RLHF and SFT evaluation tasks, reviewing LLM responses across open-ended " +
                "and structured prompts. Assessed outputs for instruction adherence, truthfulness, " +
                "reasoning quality, and safety compliance, maintaining 95%+ quality accuracy."
        },
        {
            role: "Junior Data Analyst",
            company: "Landmine Soft",
            location: "Hyderabad, India",
            duration: "Sep 2024 – Oct 2025",
            type: "Full Time",
            metrics: [
                { val: "10+", label: "Dashboards built" },
                { val: "1M+", label: "Records analyzed" }
            ],
            techStack: ["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Data Cleaning", "Data Visualization"],
            description: "Analyzed large datasets using Python (Pandas, NumPy) and SQL to extract actionable insights. " +
                "Built interactive Power BI dashboards and automated reporting processes, reducing manual " +
                "effort by 30%. Performed data cleaning, transformation, and exploratory data analysis (EDA) " +
                "to support business decision-making."
        },
        {
            role: "Data Analyst",
            company: "Landmine Soft",
            location: "Hyderabad, India",
            duration: "Nov 2025 – Present",
            type: "Full Time",
            metrics: [
                { val: "10+", label: "Dashboards built" },
                { val: "1M+", label: "Records analyzed" }
            ],
            techStack: ["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Data Cleaning", "Data Visualization"],
            description: "Analyzed large datasets using Python (Pandas, NumPy) and SQL to extract actionable insights. " +
                "Built interactive Power BI dashboards and automated reporting processes, reducing manual " +
                "effort by 30%. Performed data cleaning, transformation, and exploratory data analysis (EDA) " +
                "to support business decision-making."
        }
    ],

    // Projects
    projects: [
        {
            title: "Uber Data Analysis",
            description: "Analyzed 10K+ Uber ride records to uncover demand trends and peak-hour patterns.",
            keyInsight: "Peak ride demand increases by 35% during 6–9 PM.",
            problem: "Uber struggles with vehicle allocation during varying demand periods, leading to longer wait times and lost revenue.",
            dataset: "10,000+ historical Uber ride records containing timestamps, pickup/drop-off locations, and trip statuses.",
            approach: [
                "Performed extensive data cleaning to handle missing values and correct datetime formats.",
                "Conducted Exploratory Data Analysis (EDA) to identify trip frequency by hour, day, and month.",
                "Visualized demand-supply gaps across different city zones using heatmaps.",
                "Analyzed cancellation rates and reasons during peak traffic hours."
            ],
            businessImpact: "Identified key surge periods, allowing for optimized driver allocation which could potentially reduce wait times by 15% and increase daily revenue.",
            techStack: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
            category: "Data Analysis",
            image: "resources/assets/images/Uber_Project.webp",
            codeLink: "https://github.com/somenathsau/CodeClause-data-science-internship/tree/main/Project%203%20-%20Uber%20Data%20Analysis",
            demoLink: "https://nbviewer.org/github/somenathsau/CodeClause-data-science-internship/blob/main/Project%203%20-%20Uber%20Data%20Analysis/Uber%20data%20analysis.ipynb"
        },
        {
            title: "Crime Data Analysis in India",
            description: "Analyzed historical crime datasets to identify trends and patterns in criminal activities across different states.",
            keyInsight: "Property crimes constitute over 40% of reported incidents in urban centers.",
            problem: "Law enforcement agencies lack clear visibility into macro-level crime trends, hindering effective resource deployment.",
            dataset: "Comprehensive dataset from 2013 containing state-wise crime statistics, categorized by offense type and demographic.",
            approach: [
                "Cleaned and standardized state-level reporting inconsistencies.",
                "Developed correlation matrices to find relationships between different crime categories.",
                "Created comparative visual reports to highlight high-risk zones.",
                "Segmented data by demographic impact to understand vulnerable populations."
            ],
            businessImpact: "Provided a data-driven foundation for predictive policing strategies, enabling more targeted patrol deployments in high-risk zones.",
            techStack: ["Python", "Matplotlib", "Scikit-learn", "Pandas"],
            category: "Data Analysis",
            image: "resources/assets/images/crime_correlation_heatmap.webp",
            codeLink: "https://github.com/somenathsau/Crime_Report_in_India_2013",
            demoLink: "https://nbviewer.org/github/somenathsau/Crime_Report_in_India_2013/blob/main/Crime_Report_Analysis_2013.ipynb"
        },
        {
            title: "AI-Assisted Portfolio Website",
            description: "Developed a responsive developer portfolio using AI-assisted development (Vibe Coding) and automated workflows.",
            keyInsight: "AI tools reduced boilerplate coding time by 60%.",
            problem: "Building a portfolio from scratch is time-consuming and requires managing complex deployment and contact workflows.",
            dataset: "N/A - Software Engineering Project",
            approach: [
                "Utilized LLMs for rapid prototyping and CSS grid generation.",
                "Implemented Google Forms backend to bypass need for custom email servers.",
                "Focused on Semantic HTML and accessibility standard compliance."
            ],
            businessImpact: "Created a highly professional, zero-maintenance lead generation funnel for job opportunities.",
            techStack: ["AI-Assisted Dev", "Automation", "HTML/CSS", "JavaScript"],
            category: "AI",
            image: "resources/assets/images/portfolio-home.webp",
            codeLink: "https://github.com/somenathsau/somenathsau.github.io",
            demoLink: "https://somenathsau.github.io"
        },
        {
            title: "AWS EC2 Cloud Monitoring Tool",
            description: "Developed a cloud-based monitoring solution on Amazon EC2 to track server resource usage and automate alerts.",
            keyInsight: "Automated alerts reduced incident response time by over 40%.",
            problem: "Manual server monitoring leads to delayed responses to resource exhaustion, causing unexpected downtime.",
            dataset: "Real-time system telemetry (CPU, RAM, Disk I/O).",
            approach: [
                "Wrote Bash scripts to capture system metrics every 5 minutes.",
                "Configured Cron jobs for automated data extraction.",
                "Integrated with AWS CloudWatch for persistent logging and threshold alerts."
            ],
            businessImpact: "Ensured 99.9% uptime by enabling proactive scaling before server crashes occur.",
            techStack: ["AWS EC2", "Bash Scripting", "Cron Schedular", "CloudWatch"],
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





