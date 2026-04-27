document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC CONTENT RENDERING ---

    // 1. Render Hero Section
    const greetingEl = document.querySelector('.greeting');
    if (greetingEl) greetingEl.innerHTML = "Hello, I'm";

    document.getElementById('heroName').textContent = portfolioData.name;

    const heroBioEl = document.getElementById('heroBio');
    if (heroBioEl) heroBioEl.innerHTML = portfolioData.bio;

    /* COMMENTED OUT PER USER REQUEST: ROLE & SUBTITLE
    const heroRoleEl = document.getElementById('heroRole');
    const heroSubtitleEl = document.getElementById('heroSubtitle');

    // Clear first
    heroRoleEl.innerHTML = '';
    heroSubtitleEl.innerHTML = '';

    // Typewriter effect for role
    const typewriterText = "Cloud & Data Engineer";
    let charIndex = 0;
    heroRoleEl.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor">|</span>';
    const typewriterSpan = heroRoleEl.querySelector('.typewriter-text');
    function typeWriter() {
        if (charIndex < typewriterText.length) {
            typewriterSpan.textContent += typewriterText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 70);
        } else {
            // Blink cursor after done
            heroRoleEl.querySelector('.typewriter-cursor').classList.add('blink');
        }
    }
    typeWriter();

    heroSubtitleEl.textContent = portfolioData.subtitle;
    */

    // Update Hero Image
    const heroImageContainer = document.getElementById('heroImageContainer');
    if (heroImageContainer && portfolioData.heroImage) {
        const heroImageSmall = portfolioData.heroImage.replace('.webp', '-small.webp');
        heroImageContainer.innerHTML = `
            <div class="hero-image-wrapper">
                <img src="${portfolioData.heroImage}" 
                     srcset="${heroImageSmall} 600w, ${portfolioData.heroImage} 1200w"
                     sizes="(max-width: 768px) 300px, 400px"
                     alt="${portfolioData.name}" 
                     width="300" height="420"
                     fetchpriority="high">
            </div>
        `;
    }

    // Update both resume buttons
    const heroResumeBtn = document.getElementById('heroResumeBtn');
    const contactResumeBtn = document.getElementById('contactResumeBtn');
    if (heroResumeBtn) heroResumeBtn.href = portfolioData.resumeLink;
    if (contactResumeBtn) contactResumeBtn.href = portfolioData.resumeLink;

    // Render Hero Socials (Buttons)
    const heroSocials = document.getElementById('heroSocials');
    if (heroSocials) {
        const { linkedin, github, email } = portfolioData.socialLinks;
        // Reference uses X, Github, Email. We use LinkedIn, Github, Email.
        heroSocials.innerHTML = `
            <a href="${linkedin}" target="_blank" class="social-pill linkedin">
                <span class="icon-container"><i data-lucide="linkedin"></i></span>
                <span class="social-label">LinkedIn</span>
            </a>
            <a href="${github}" target="_blank" class="social-pill github">
                <span class="icon-container"><i data-lucide="github"></i></span>
                <span class="social-label">Github</span>
            </a>
            <a href="${email}" class="social-pill email">
                <span class="icon-container"><i data-lucide="mail"></i></span>
                <span class="social-label">Email</span>
            </a>
        `;
        lucide.createIcons()
    }

    // Render Hero Highlights (Replacing Ticker)
    const heroSkillsContainer = document.getElementById('heroSkillsTicker');
    // We'll reuse the container but change the class in CSS or here
    heroSkillsContainer.className = 'hero-highlights'; // Change class
    heroSkillsContainer.innerHTML = ''; // Clear

    /* COMMENTED OUT PER USER REQUEST: HERO HIGHLIGHTS
    portfolioData.heroHighlights.forEach(highlight => {
        const item = document.createElement('div');
        item.classList.add('highlight-item');
        item.innerHTML = highlight; // Contains emojis
        heroSkillsContainer.appendChild(item);
    });
    */

    // 2. Render About Section (Redesigned)
    const knowledgeContainer = document.getElementById('knowledgeContainer');
    if (knowledgeContainer && portfolioData.about.domains) {
        knowledgeContainer.innerHTML = ''; // Clear
        portfolioData.about.domains.forEach((domain, index) => {
            const row = document.createElement('div');
            row.classList.add('knowledge-row', 'fade-up');
            // If you want alternating illustrations similar to the reference, 
            // you can uncomment the next line:
            if (index % 2 !== 0) row.classList.add('reverse');

            const techIconsHtml = domain.techIcons.map(icon => `<i data-lucide="${icon}"></i>`).join('');
            const bulletsHtml = domain.bullets.map(bullet => `<li>${bullet}</li>`).join('');

            row.innerHTML = `
                <div class="row-illustration">
                    <img src="${domain.illustration}" alt="${domain.title}" loading="lazy" width="400" height="300">
                </div>
                <div class="row-content">
                    <h3>${domain.title}</h3>
                    <div class="domain-tech-icons">
                        ${techIconsHtml}
                    </div>
                    <ul class="row-bullets">
                        ${bulletsHtml}
                    </ul>
                </div>
            `;
            knowledgeContainer.appendChild(row);
        });
        // Re-run lucide icons for the new elements
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // 3. Render Education Section
    const educationGrid = document.getElementById('educationGrid');
    portfolioData.education.forEach((edu, index) => {
        const row = document.createElement('div');
        row.classList.add('edu-row', 'fade-up');
        row.style.transitionDelay = `${index * 0.1}s`;

        const logoHtml = edu.logo 
            ? `<img src="${edu.logo}" alt="${edu.institution}" class="edu-logo-img" loading="lazy" width="40" height="40">`
            : `<i data-lucide="graduation-cap"></i>`;

        const descHtml = edu.description ? `<li><span class="bullet-icon">⚡</span> ${edu.description}</li>` : '';
        const gradeHtml = edu.grade ? `<li><span class="bullet-icon">⚡</span> ${edu.grade}</li>` : '';

        const visitBtnHtml = edu.credentialLink 
            ? `<div class="edu-footer"><a href="${edu.credentialLink}" target="_blank" class="edu-visit-btn">Visit Website</a></div>` 
            : '';

        row.innerHTML = `
            <div class="edu-card-split">
                <div class="edu-left-panel">
                    <div class="edu-logo-circle">
                        ${logoHtml}
                    </div>
                    <div class="edu-short-name">${edu.shortName}</div>
                </div>
                <div class="edu-right-content">
                    <div class="edu-right-header">
                        <h3 class="edu-institution-full">${edu.institution}</h3>
                        <span class="edu-date-pill">${edu.year}</span>
                    </div>
                    <h4 class="edu-degree-subtitle">${edu.title}</h4>
                    <div class="edu-content-divider"></div>
                    <ul class="edu-bullets">
                        ${descHtml}
                        ${gradeHtml}
                    </ul>
                    ${visitBtnHtml}
                </div>
            </div>
        `;
        educationGrid.appendChild(row);
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

            const metricsHtml = exp.metrics ? exp.metrics.map(m => `
                <div class="exp-stat-box">
                    <span class="stat-val">${m.val}</span>
                    <span class="stat-label">${m.label}</span>
                </div>
            `).join('') : '';

            const tagsHtml = exp.techStack ? exp.techStack.map(t => `
                <span class="exp-tag">${t}</span>
            `).join('') : '';

            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content glass-card">
                    <div class="exp-header">
                        <h3 class="exp-role">${exp.role}</h3>
                        <span class="exp-type-badge">${exp.type}</span>
                    </div>
                    <p class="exp-subheader">${exp.company} | ${exp.location || 'Remote'}</p>
                    <span class="exp-duration">${exp.duration}</span>
                    
                    <div class="exp-metrics">
                        ${metricsHtml}
                    </div>

                    <p class="exp-desc">${exp.description}</p>
                    
                    <div class="exp-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            experienceTimeline.appendChild(item);
        });
    }

    // 5. Render Projects Section

    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        // Change grid to rows container class
        projectsGrid.className = 'projects-rows';
        projectsGrid.innerHTML = ''; // Clear initial content
        
        portfolioData.projects.forEach((project, index) => {
            const row = document.createElement('div');
            row.classList.add('project-row', 'fade-up');
            row.style.transitionDelay = `${index * 0.1}s`;

            const techPillsHtml = project.techStack.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('');

            const catSlug = project.category.toLowerCase().replace(/\s+/g, '-');

            row.innerHTML = `
                <div class="project-image-box">
                    <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" width="500" height="300">
                </div>
                <div class="project-details-box">
                    ${project.category ? `<span class="project-category-tag cat-${catSlug}">${project.category}</span>` : ''}
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-tech-tags">
                        ${techPillsHtml}
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-actions">
                        <a href="${project.codeLink}" class="btn-code" target="_blank">
                            <i data-lucide="github"></i> Code
                        </a>
                        <a href="${project.demoLink}" class="btn-demo" target="_blank">
                            <i data-lucide="external-link"></i> Live Demo
                        </a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(row);
        });
    }

    // 6. Render Skills Section (Redesigned with Hierarchy)
    const skillsContainer = document.getElementById('skillsContainer');
    if (skillsContainer) {
        skillsContainer.innerHTML = ''; // Clear initial content
        
        const redesignWrapper = document.createElement('div');
        redesignWrapper.classList.add('skills-redesign-container');

        portfolioData.skills.forEach(tier => {
            const tierBlock = document.createElement('div');
            tierBlock.classList.add('skill-tier-block', `tier-${tier.tier}`, 'fade-up');

            const tierTitle = document.createElement('div');
            tierTitle.classList.add('skill-tier-title');
            tierTitle.textContent = tier.category;
            tierBlock.appendChild(tierTitle);

            const itemsGrid = document.createElement('div');
            itemsGrid.classList.add('skill-items-grid');

            tier.items.forEach(item => {
                const itemEl = document.createElement('div');
                
                if (tier.tier === 'primary') {
                    itemEl.classList.add('skill-card-primary');
                    itemEl.innerHTML = `
                        <span class="skill-name">${item.name}</span>
                    `;
                } else if (tier.tier === 'competitive') {
                    itemEl.classList.add('skill-pill-competitive');
                    itemEl.innerHTML = `
                        <span class="skill-name">${item.name}</span>
                    `;
                } else if (tier.tier === 'supporting') {
                    itemEl.classList.add('skill-pill-supporting');
                    itemEl.innerHTML = `
                        <span class="skill-name">${item.name}</span>
                    `;
                } else {
                    itemEl.classList.add('skill-pill-basic');
                    itemEl.innerHTML = `
                        <span class="skill-name">${item.name}</span>
                    `;
                }
                itemsGrid.appendChild(itemEl);
            });

            tierBlock.appendChild(itemsGrid);
            redesignWrapper.appendChild(tierBlock);
        });

        skillsContainer.appendChild(redesignWrapper);
        
        // Re-run lucide icons for the new elements
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // 7. Render Certifications Section
    const certGrid = document.getElementById('certGrid');
    portfolioData.certifications.forEach((cert, index) => {
        const card = document.createElement('div');
        card.classList.add('cert-card-refined', 'fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="cert-top-row">
                <div class="cert-purple-icon">🎖️</div>
                <span class="cert-date-pill">${cert.year}</span>
            </div>
            <div class="cert-middle-content">
                <h3 class="cert-title-refined">${cert.title}</h3>
                <p class="cert-issuer-refined">${cert.issuer}</p>
            </div>
            <a href="${cert.credentialLink}" class="cert-action-link" target="_blank">
                ↗ View Credential
            </a>
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

    // Render Footer Socials
    const footerSocials = document.getElementById('footerSocials');
    if (footerSocials) {
        footerSocials.innerHTML = `
            <a href="${linkedin}" target="_blank" class="footer-social-link linkedin" title="LinkedIn"><i data-lucide="linkedin"></i></a>
            <a href="${github}" target="_blank" class="footer-social-link github" title="GitHub"><i data-lucide="github"></i></a>
            <a href="${email}" class="footer-social-link email" title="Email"><i data-lucide="mail"></i></a>
        `;
    }

    // Initialize Icons AFTER dynamic content is added
    lucide.createIcons();


    // --- UI/UX INTERATIONS ---

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        // Toggle Menu
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close Menu when a Link is Clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Close Menu when Clicking Outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
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

    // Custom Cursor REMOVED

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
    // 3D Tilt Effect REMOVED
    // Cards now use CSS transform: translateY(-5px) for a subtle lift effect.

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- SINGLE PAGE SCROLL SPY LOGIC ---
    const pageSections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
    const sectionElements = pageSections.map(id => document.getElementById(id)).filter(Boolean);
    const navLinksList = document.querySelectorAll('.nav-links a[href^="#"]');

    // Scroll Spy Observer
    const spyOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section crosses middle of viewport
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navLinksList.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, spyOptions);

    sectionElements.forEach(sec => scrollSpyObserver.observe(sec));

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSectionId = targetId.substring(1);
            const targetElement = document.getElementById(targetSectionId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Clean URL
            history.replaceState(null, null, ' ');
        });
    });

});

// Typewriter Effect for Name
// Typewriter Effect for Role (Headline)
// Typewriter Effect REMOVED

// initTypewriter(); removed




