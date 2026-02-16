document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC CONTENT RENDERING ---

    // 1. Render Hero Section
    document.getElementById('heroName').textContent = portfolioData.name;
    document.getElementById('heroRole').textContent = portfolioData.role;
    document.getElementById('heroSubtitle').textContent = portfolioData.subtitle;

    const heroImage = document.getElementById('heroImage');
    if (heroImage) heroImage.src = portfolioData.heroImage;

    // Update both resume buttons
    const heroResumeBtn = document.getElementById('heroResumeBtn');
    const contactResumeBtn = document.getElementById('contactResumeBtn');
    if (heroResumeBtn) heroResumeBtn.href = portfolioData.resumeLink;
    if (contactResumeBtn) contactResumeBtn.href = portfolioData.resumeLink;

    // Render Hero Socials
    const heroSocials = document.getElementById('heroSocials');
    if (heroSocials) {
        const { linkedin, github, email } = portfolioData.socialLinks;
        heroSocials.innerHTML = `
            <a href="${linkedin}" target="_blank" class="social-icon"><i data-lucide="linkedin"></i></a>
            <a href="${github}" target="_blank" class="social-icon"><i data-lucide="github"></i></a>
            <a href="${email}" class="social-icon"><i data-lucide="mail"></i></a>
        `;
    }

    const heroSkillsContainer = document.getElementById('heroSkillsTicker');
    portfolioData.heroSkills.forEach((skill, index) => {
        const skillSpan = document.createElement('span');
        skillSpan.classList.add('skill-item');
        skillSpan.textContent = skill;
        heroSkillsContainer.appendChild(skillSpan);

        if (index < portfolioData.heroSkills.length - 1) {
            const separator = document.createElement('span');
            separator.classList.add('separator');
            separator.textContent = "|";
            heroSkillsContainer.appendChild(separator);
        }
    });

    // 2. Render About Section
    const aboutTextContainer = document.getElementById('aboutText');
    portfolioData.about.description.forEach(para => {
        const p = document.createElement('p');
        p.textContent = para;
        aboutTextContainer.appendChild(p);
    });

    const aboutTechGrid = document.getElementById('aboutTechGrid');
    portfolioData.about.techStack.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('tech-item');
        div.innerHTML = `<i data-lucide="${item.icon}"></i> ${item.name}`;
        aboutTechGrid.appendChild(div);
    });

    // 3. Render Education Section
    const educationGrid = document.getElementById('educationGrid');
    portfolioData.education.forEach((edu, index) => {
        const card = document.createElement('div');
        card.classList.add('glass-card', 'education-card', 'fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;

        // Grade Logic
        const gradeDisplay = edu.grade ? `<span style="color: var(--accent-cyan); font-weight: 600;"> • ${edu.grade}</span>` : '';

        card.innerHTML = `
            <div class="card-icon"><i data-lucide="graduation-cap"></i></div>
            <h3 class="card-title">${edu.title}</h3>
            <p class="card-subtitle">${edu.institution}</p>
            <p class="card-subtitle">${edu.year}${gradeDisplay}</p>
            <p class="card-desc">${edu.description}</p>
            <a href="${edu.credentialLink}" class="credential-link"><i data-lucide="external-link"></i> View Certificate</a>
        `;
        educationGrid.appendChild(card);
    });

    // 4. Render Experience Section
    const experienceTimeline = document.getElementById('experienceTimeline');
    if (experienceTimeline) {
        // Helper to parse "Month Year" into Date object
        const parseDate = (dateStr) => {
            if (!dateStr) return new Date(0);
            const parts = dateStr.trim().split(' ');
            if (parts.length < 2) return new Date(0);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = monthNames.indexOf(parts[0]);
            const year = parseInt(parts[1]);
            return new Date(year, month);
        };

        // Sort by End Date (Descending) - Latest First
        const sortedExperience = [...portfolioData.experience].sort((a, b) => {
            // Extract dates: "Nov 2023 - Dec 2023" -> ["Nov 2023", "Dec 2023"]
            const getEndDate = (duration) => {
                if (!duration) return new Date(0);
                const parts = duration.split('-');
                const endStr = parts[1] ? parts[1].trim() : parts[0].trim(); // If no end, use start (or handle 'Present')
                if (endStr.toLowerCase() === 'present' || endStr.toLowerCase() === 'ongoing') return new Date(); // Future/Now
                return parseDate(endStr);
            };

            return getEndDate(b.duration) - getEndDate(a.duration);
        });

        sortedExperience.forEach((exp, index) => {
            const item = document.createElement('div');
            item.classList.add('timeline-item', 'fade-up');

            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content glass-card">
                    <span class="date">${exp.duration} • <span style="color: #ff3333;">${exp.type}</span></span>
                    <h3 class="role">${exp.role}</h3>
                    <p class="company">${exp.company}</p>
                    <p>${exp.description}</p>
                </div>
            `;
            experienceTimeline.appendChild(item);
        });
    }

    // 5. Render Projects Section

    const projectsGrid = document.getElementById('projectsGrid');
    portfolioData.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card', 'glass-card', 'fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;

        const techStackHTML = project.techStack.map(tech => `<span>${tech}</span>`).join('');

        card.innerHTML = `
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="tech-stack">${techStackHTML}</div>
                <div class="project-links">
                    <a href="${project.codeLink}" class="btn-link"><i data-lucide="github"></i> Code</a>
                    <a href="${project.demoLink}" class="btn-link"><i data-lucide="external-link"></i> Demo</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // 6. Render Skills Section
    const skillsContainer = document.getElementById('skillsContainer');
    portfolioData.skills.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('skills-category', 'fade-up');

        const itemsHTML = category.items.map(item => `
            <li class="tree-skill-item">
                <span class="skill-content">
                    <i data-lucide="${item.icon}"></i> ${item.name}
                </span>
            </li>
        `).join('');

        categoryDiv.innerHTML = `
            <h3 class="tree-category-title">${category.category}</h3>
            <ul class="tree-skills-list">${itemsHTML}</ul>
        `;
        skillsContainer.appendChild(categoryDiv);
    });

    // 7. Render Certifications Section
    const certGrid = document.getElementById('certGrid');
    portfolioData.certifications.forEach((cert, index) => {
        const card = document.createElement('div');
        card.classList.add('glass-card', 'cert-card', 'fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="cert-icon"><i data-lucide="award"></i></div>
            <div class="cert-info">
                <h3>${cert.title}</h3>
                <p>${cert.issuer} • ${cert.year}</p>
                <a href="${cert.credentialLink}" class="credential-link"><i data-lucide="external-link"></i> View Credential</a>
            </div>
        `;
        certGrid.appendChild(card);
    });

    // 8. Render Contact Links
    const contactLinksContainer = document.getElementById('contactLinks');
    const { linkedin, github, email } = portfolioData.socialLinks;

    contactLinksContainer.innerHTML = `
        <a href="${email}" class="contact-link"><i data-lucide="mail"></i> ${portfolioData.email}</a>
        <a href="${linkedin}" class="contact-link"><i data-lucide="linkedin"></i> LinkedIn Profile</a>
        <a href="${github}" class="contact-link"><i data-lucide="github"></i> GitHub Profile</a>
    `;

    // Initialize Icons AFTER dynamic content is added
    lucide.createIcons();


    // --- UI/UX INTERATIONS ---

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Scroll Progress Bar
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgressBar.style.width = scrollPercentage + '%';

        // Navbar Sticky Effect
        const navbar = document.getElementById('navbar');
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Custom Cursor
    const cursorDot = document.getElementById('cursorDot');
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
    });

    // Scroll Animations (Intersection Observer)
    const fadeUpElements = document.querySelectorAll('.fade-up');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('visible');

                // CRITICAL FIX: Clear the transition delay after the entrance animation finishes.
                // Otherwise, this delay applies to the hover effect too, causing lag.
                setTimeout(() => {
                    target.style.transitionDelay = '0s';
                    target.style.transition = 'transform 0.1s ease-out, box-shadow 0.4s ease'; // Enforce snappy hover
                }, 1000); // Wait 1s for entrance to finish

                observer.unobserve(target);
            }
        });
    }, observerOptions);

    fadeUpElements.forEach(el => observer.observe(el));

    // Section Reveal Observer Removed per User Request


    // Typing Effect Logic
    // Must re-select the element as it might have been dynamically affected (though here it's static in HTML, good practice)
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
        const words = portfolioData.typingSkills;
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }
    // 3D Tilt Effect (Global Event Delegation)
    let activeCard = null;

    document.addEventListener('mousemove', (e) => {
        const card = e.target.closest('.glass-card');

        // If we are over a card AND it's not the currently active one (or active is null)
        // CRITICAL UPDATE: Exclude the contact form from 3D tilt
        if (card && !card.classList.contains('contact-form')) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation (max 10deg)
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

            // Track this card as active to reset it later if needed (though mouseleave handles its own reset usually)
            activeCard = card;
        }
    });

    // We can use a global mouseout to catch leaving ANY card
    document.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.glass-card');
        // If we left a card, reset it. 
        // Note: 'mouseout' bubbles, 'mouseleave' does not. 
        // For delegation, checking if we left the card is key.
        if (card && e.relatedTarget && !card.contains(e.relatedTarget)) {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});

// Typewriter Effect for Name
// Typewriter Effect for Role (Headline)
function initTypewriter() {
    const roleElement = document.getElementById('heroRole');
    if (!roleElement) return;

    // Use role text instead of name
    const texts = [portfolioData.role];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50; // Faster typing for longer text

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            roleElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30;
        } else {
            roleElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 50;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 3000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    roleElement.classList.add('typing-cursor');
    // Ensure name is static and has no cursor
    const nameElement = document.getElementById('heroName');
    if (nameElement) nameElement.classList.remove('typing-cursor');

    type();
}

initTypewriter();




