const hrWorkforceProject = {
    id: "hr-workforce-analysis",
    slug: "hr-workforce-analysis",
    aliases: [
        "hr-workforce-and-performance-analysis",
        "hr-workforce",
        "hr-performance-analysis",
        "hr-analytics",
        "hr-workeforce-and-performance-aanalysis",
        "hr-workforce-and-performance-aanalysis"
    ],
    title: "HR Workforce and Performance Analysis",
    description: "Executive 4-page Power BI business intelligence dashboard and SQL suite analyzing 10,000 employees across 9 departments, evaluating compensation fairness, performance calibration, hiring trends, and isolating 2,522 high-value retention priorities.",
    keyInsight: "Identified 2,522 high-value employees (rating ≥ 4.0, 5+ yrs experience, paid below department average) at risk of flight, while tracking an 84.9% active retention rate and ₹75,550 average gross compensation.",
    problem: "Enterprise leadership lacked consolidated visibility into talent attrition, compensation equity, and performance calibration across 10,000 global personnel. Disjointed operational records created blind spots in spotting undercompensated high performers, calibrating appraisal scores (narrow department band of 3.74–3.83 vs. skewed rating clusters), and smoothing seasonal hiring swings (peak of 903 in May vs. 757 in September).",
    dataset: "Relational enterprise HR schema comprising 10,000 employee records across 4 interconnected tables (emp_info, emp_salary, department, job_roles) detailing 9 departments, 16 job roles, 5 qualification levels, multi-component salaries (basic, gross, PF, bonuses), and 2016–2024 hiring timestamps.",
    approach: [
        "Engineered a 4-table relational star-schema data model in Power BI and SQL, enforcing primary-foreign key integrity across employee profiles, department cost centers, job roles, and compensation ledgers.",
        "Authored 22 comprehensive SQL queries utilizing Common Table Expressions (CTEs), multi-table joins, and window functions (ROW_NUMBER() OVER PARTITION BY dept_id) to analyze experience cohorts, salary gaps, and top departmental earners.",
        "Formulated dynamic DAX measures to calculate executive workforce KPIs: Total Headcount (10,000), Active Staff (8,488 / 84.88%), Inactive / Attrition (1,512 / 15.12%), Average Gross Salary (₹75,550), Average PF (₹9,484), and Average Rating (3.8/5.0).",
        "Designed an interactive 4-page Power BI dashboard suite with dynamic slicers for Country, City, Gender, Qualification, and Hire Date: Workforce Overview, Compensation Analysis, Performance Analysis, and Strategic HR Insights.",
        "Established an analytical High-Value Employee segmentation rule (Rating ≥ 4.0, Experience ≥ 5 yrs, Gross Salary < Dept Average) to isolate experienced, undercompensated high performers across all business units.",
        "Conducted bivariate scatter and distribution analyses between Experience vs. Gross Salary and Salary vs. Performance to evaluate meritocracy in compensation and identify rating inflation."
    ],
    businessImpact: "Delivered an executive decision-support framework that pinpoints 2,522 high-flight-risk top contributors for targeted compensation recalibration, benchmarks ₹75.55K average payroll equity across 9 departments, smooths workforce planning across cyclical hiring surges (903 hires in May), and establishes objective performance calibration standards.",
    recommendations: [
        "Prioritize compensation adjustments and retention bonuses for the 2,522 high-value employees—heavily concentrated in Product (326), HR (300), Engineering (296), and Marketing Specialists (379)—to curb top-talent flight risk.",
        "Standardize manager appraisal calibration to address rating inflation (5,860 high performers clustered between 3.9–5.0) and couple performance bonuses (avg ₹6,011) directly to quantifiable KPI targets.",
        "Establish structured career ladders for foundational operational roles (Data Entry Operator ₹18,731, Customer Support ₹22,143) to improve internal mobility and reduce the 15.12% workforce turnover.",
        "Optimize recruiting resource allocation by smoothing spring hiring surges (April–May: 889–903 hires) against late-year dips (September/November: 757 hires) to lower onboarding overhead."
    ],
    techStack: ["Power BI", "SQL", "DAX", "Data Modeling", "Business Intelligence", "HR Analytics"],
    category: "Workforce Analytics",
    datasetScope: "10,000 Employees",
    image: "resources/assets/images/HR1.png",
    images: [
        "resources/assets/images/HR1.png",
        "resources/assets/images/HR2.png",
        "resources/assets/images/HR3.png",
        "resources/assets/images/HR4.png"
    ],
    codeLink: "https://github.com/somenathsau/HR-Workforce-Analysis",
    demoLink: "https://github.com/somenathsau/HR-Workforce-Analysis/blob/main/HR_Workforce_Analysis.sql"
};
