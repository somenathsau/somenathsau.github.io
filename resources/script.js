document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC CONTENT RENDERING ---

    // 1. Render Hero Section
    const greetingEl = document.querySelector('.greeting');
    if (greetingEl) greetingEl.innerHTML = "Hello, I'm";

    const heroNameEl = document.getElementById('heroName');
    if (heroNameEl && portfolioData.name) heroNameEl.textContent = portfolioData.name;

    const heroRolePrefixEl = document.getElementById('heroRolePrefix');
    if (heroRolePrefixEl && portfolioData.rolePrefix !== undefined) {
        heroRolePrefixEl.textContent = portfolioData.rolePrefix;
    }

    // Initialize Role Typewriter Effect
    initRoleTypewriter();

    const heroMicroline = document.getElementById('heroMicroline');
    if (heroMicroline && portfolioData.microline) {
        heroMicroline.textContent = portfolioData.microline;
    }

    const heroBioEl = document.getElementById('heroBio');
    if (heroBioEl && portfolioData.bio) heroBioEl.innerHTML = portfolioData.bio;



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
    // Update both resume buttons
    const heroResumeBtn = document.getElementById('heroResumeBtn');
    const contactResumeBtn = document.getElementById('contactResumeBtn');
    
    function getResumeUrl() {
        if (!portfolioData.resumeLink) return '';
        if (portfolioData.resumeLink.startsWith('http://') || portfolioData.resumeLink.startsWith('https://')) {
            return portfolioData.resumeLink;
        }
        try {
            return new URL(portfolioData.resumeLink, window.location.href).href;
        } catch (e) {
            return portfolioData.resumeLink;
        }
    }

    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    if (downloadResumeBtn) {
        downloadResumeBtn.href = getResumeUrl();
        downloadResumeBtn.setAttribute('download', 'Somenath-Sau-DataAnalyst.pdf');
    }
    const openResumeNewTab = document.getElementById('openResumeNewTab');
    if (openResumeNewTab) {
        openResumeNewTab.href = getResumeUrl();
    }

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
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // Render Hero Highlights (Replacing Ticker)
    const heroSkillsContainer = document.getElementById('heroSkillsTicker');
    if (heroSkillsContainer) {
        heroSkillsContainer.className = 'hero-highlights'; // Change class
        heroSkillsContainer.innerHTML = ''; // Clear
    }


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

    // 3. Render Education Section (Option H — Illustrated Badge Card Stack with Logos)
    const educationGrid = document.getElementById('educationGrid');
    if (educationGrid) {
        educationGrid.innerHTML = '';
        portfolioData.education.forEach(edu => {
            const card = document.createElement('div');
            card.className = 'edu-option-h-card fade-up';
            
            const scoreText = edu.scoreLabel ? `${edu.score} ${edu.scoreLabel}` : edu.score;
            
            const logoHtml = edu.logo 
                ? `<img src="${edu.logo}" alt="${edu.badge}" class="edu-h-badge-img">`
                : `<span class="edu-h-badge-initials">${edu.badge}</span>`;
            
            card.innerHTML = `
                <div class="edu-h-badge-container">
                    <div class="edu-h-badge-circle">
                        ${logoHtml}
                    </div>
                </div>
                <div class="edu-h-content">
                    <div class="edu-h-header">
                        <h3 class="edu-h-degree">${edu.degree}</h3>
                        <span class="edu-h-years">${edu.years}</span>
                    </div>
                    <div class="edu-h-institution">${edu.institution}, ${edu.location}</div>
                    <div class="edu-h-badges">
                        <span class="edu-badge-blue">${scoreText}</span>
                        <span class="edu-badge-green">${edu.description}</span>
                    </div>
                </div>
            `;
            educationGrid.appendChild(card);
        });
    }

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
            // Extract dates: "Nov 2023 - Dec 2023" or "Nov 2023 – Dec 2023"
            const getEndDate = (duration) => {
                if (!duration) return new Date(0);
                const parts = duration.split(/[-–—]/);
                const endStr = parts[1] ? parts[1].trim() : parts[0].trim(); // If no end, use start (or handle 'Present')
                if (endStr.toLowerCase() === 'present' || endStr.toLowerCase() === 'ongoing') return new Date(); // Future/Now
                return parseDate(endStr);
            };

            return getEndDate(b.duration) - getEndDate(a.duration);
        });

        sortedExperience.forEach((exp, index) => {
            const item = document.createElement('div');
            item.classList.add('timeline-item', 'fade-up');
            item.style.transitionDelay = `${index * 0.1}s`;

            const metricsHtml = exp.metrics ? exp.metrics.map(m => `
                <span class="refined-exp-metric"><span class="metric-dot">•</span><span class="metric-text">${m.val} ${m.label}</span></span>
            `).join('') : '';

            const tagsHtml = exp.techStack ? exp.techStack.map(t => `
                <span class="refined-exp-skill">${t}</span>
            `).join('') : '';

            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="refined-exp-card">
                    <div class="refined-exp-header">
                        <div class="exp-header-content">
                            <div class="exp-header-top">
                                <div class="exp-title-wrapper">
                                    <h3 class="refined-exp-title">${exp.role}</h3>
                                </div>
                                <span class="refined-exp-badge">${exp.type}</span>
                            </div>
                            <div class="exp-header-bottom">
                                <p class="refined-exp-company">${exp.company} <span class="muted-dot">·</span> ${exp.location || 'Remote'}</p>
                                <p class="refined-exp-date">${exp.duration}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="refined-exp-body">
                        <div class="refined-exp-metrics">
                            ${metricsHtml}
                        </div>
                        
                        <p class="refined-exp-description">${exp.description}</p>
                        
                        <div class="refined-exp-skills">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            `;
            experienceTimeline.appendChild(item);
        });
    }

    // 5. Render Projects Section

    // --- Project Slug & Lookup Utilities ---
    function slugify(text) {
        if (!text) return '';
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function getProjectSlug(project, fallbackIndex = null) {
        if (!project) return fallbackIndex !== null ? `project-${fallbackIndex}` : '';
        if (project.slug && typeof project.slug === 'string') return project.slug.trim().toLowerCase();
        if (project.id && typeof project.id === 'string') return project.id.trim().toLowerCase();
        if (project.title && typeof project.title === 'string') {
            const genSlug = slugify(project.title);
            if (genSlug) return genSlug;
        }
        return fallbackIndex !== null ? `project-${fallbackIndex}` : '';
    }

    function findProject(query) {
        if (query === undefined || query === null || !portfolioData || !Array.isArray(portfolioData.projects)) return null;

        const cleanQuery = query.toString().replace('#', '').trim().toLowerCase();
        if (!cleanQuery) return null;

        // Legacy format check: "project-0", "project-1", etc.
        if (cleanQuery.startsWith('project-')) {
            const idxStr = cleanQuery.replace('project-', '');
            const parsedIdx = parseInt(idxStr, 10);
            if (!isNaN(parsedIdx) && portfolioData.projects[parsedIdx]) {
                const proj = portfolioData.projects[parsedIdx];
                return {
                    project: proj,
                    index: parsedIdx,
                    slug: getProjectSlug(proj, parsedIdx)
                };
            }
        }

        // Direct pure numeric index check
        if (/^\d+$/.test(cleanQuery)) {
            const parsedIdx = parseInt(cleanQuery, 10);
            if (portfolioData.projects[parsedIdx]) {
                const proj = portfolioData.projects[parsedIdx];
                return {
                    project: proj,
                    index: parsedIdx,
                    slug: getProjectSlug(proj, parsedIdx)
                };
            }
        }

        // Search by slug, id, alias, or slugified title
        for (let i = 0; i < portfolioData.projects.length; i++) {
            const proj = portfolioData.projects[i];
            if (!proj) continue;

            const primarySlug = getProjectSlug(proj, i);
            const explicitId = (proj.id || '').toString().toLowerCase().trim();
            const explicitSlug = (proj.slug || '').toString().toLowerCase().trim();
            const titleSlug = slugify(proj.title);

            if (cleanQuery === primarySlug || cleanQuery === explicitId || cleanQuery === explicitSlug || cleanQuery === titleSlug) {
                return {
                    project: proj,
                    index: i,
                    slug: primarySlug
                };
            }

            // Check aliases array if present
            if (Array.isArray(proj.aliases)) {
                for (let a = 0; a < proj.aliases.length; a++) {
                    const alias = proj.aliases[a];
                    if (alias && alias.toString().toLowerCase().trim() === cleanQuery) {
                        return {
                            project: proj,
                            index: i,
                            slug: primarySlug
                        };
                    }
                }
            }
        }

        return null;
    }
    window.findProject = findProject;
    window.getProjectSlug = getProjectSlug;

    window.showProjectDetails = function(identifierOrIndex) {
        const listContainer = document.getElementById('projectsListContainer');
        const detailContainer = document.getElementById('projectDetailContainer');
        if (!detailContainer || !portfolioData || !portfolioData.projects) return;

        let matched = findProject(identifierOrIndex);
        if (!matched && typeof identifierOrIndex === 'number' && portfolioData.projects[identifierOrIndex]) {
            matched = {
                project: portfolioData.projects[identifierOrIndex],
                index: identifierOrIndex,
                slug: getProjectSlug(portfolioData.projects[identifierOrIndex], identifierOrIndex)
            };
        }
        if (!matched || !matched.project) return;

        const proj = matched.project;
        if (proj.title) {
            document.title = `${proj.title} | Somenath Sau`;
        }
        const images = (proj.images && proj.images.length > 0) ? proj.images : (proj.image ? [proj.image] : []);
        const techPillsHtml = proj.techStack ? proj.techStack.map(t => `<span class="project-detail-tag">${t}</span>`).join('') : '';
        const techBadgesHtml = proj.techStack ? proj.techStack.map(t => `<span class="modal-tech-badge">${t}</span>`).join('') : '';
        const approachHtml = proj.approach && proj.approach.length 
            ? proj.approach.map(step => `<li>${step}</li>`).join('') 
            : '<li>N/A</li>';

        detailContainer.innerHTML = `
            <div class="project-detail-view fade-up visible">
                <div class="project-detail-top-nav">
                    <a href="#projects" class="back-to-projects-btn" id="backToProjectsBtn">
                        <i data-lucide="arrow-left"></i> All Projects
                    </a>
                </div>

                <div class="project-detail-header">
                    <h1 class="project-detail-title">${proj.title}</h1>
                    <p class="project-detail-description">${proj.description}</p>
                    <div class="project-detail-meta">
                        <span>By ${portfolioData.name || 'Somenath Sau'}</span>
                        ${proj.category ? ` • <span>${proj.category}</span>` : ''}
                    </div>
                </div>

                <div class="project-detail-content-grid">
                    <div class="project-detail-main-col">
                        ${proj.keyInsight ? `
                        <div class="project-detail-insight-callout">
                            <h3 class="project-detail-insight-heading"><i data-lucide="lightbulb"></i> Key Insight</h3>
                            <p>${proj.keyInsight}</p>
                        </div>` : ''}

                        ${proj.problem ? `
                        <div class="project-detail-card-section">
                            <h3 class="project-detail-section-title"><i data-lucide="alert-triangle"></i> The Problem</h3>
                            <p>${proj.problem}</p>
                        </div>` : ''}

                        ${proj.dataset ? `
                        <div class="project-detail-card-section">
                            <h3 class="project-detail-section-title"><i data-lucide="database"></i> Dataset</h3>
                            <p>${proj.dataset}</p>
                        </div>` : ''}

                        ${proj.approach && proj.approach.length ? `
                        <div class="project-detail-card-section">
                            <h3 class="project-detail-section-title"><i data-lucide="list-checks"></i> Approach & Methodology</h3>
                            <ul class="project-detail-list">
                                ${approachHtml}
                            </ul>
                        </div>` : ''}

                        ${proj.businessImpact ? `
                        <div class="project-detail-card-section">
                            <h3 class="project-detail-section-title"><i data-lucide="trending-up"></i> Business Impact</h3>
                            <p>${proj.businessImpact}</p>
                        </div>` : ''}

                        ${proj.recommendations && proj.recommendations.length ? `
                        <div class="project-detail-card-section">
                            <h3 class="project-detail-section-title"><i data-lucide="compass"></i> Strategic Recommendations</h3>
                            <ul class="project-detail-list">
                                ${proj.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                            </ul>
                        </div>` : ''}
                    </div>

                    <div class="project-detail-sidebar-col">
                        <div class="project-detail-sidebar-card">
                            <h3 class="project-detail-sidebar-heading"><i data-lucide="wrench"></i> Tools & Tech Stack</h3>
                            <div class="project-detail-sidebar-tags">
                                ${techBadgesHtml}
                            </div>
                            <div class="project-detail-actions">
                                ${proj.codeLink ? `<a href="${proj.codeLink}" class="btn-secondary" target="_blank"><i data-lucide="github"></i> Repository</a>` : ''}
                                ${proj.demoLink ? `<a href="${proj.demoLink}" class="btn-primary" target="_blank"><i data-lucide="external-link"></i> Preview</a>` : ''}
                            </div>
                        </div>

                        <div class="project-detail-sidebar-card project-image-card">
                            <div class="project-preview-header">
                                <h3 class="project-detail-sidebar-heading"><i data-lucide="image"></i> Project Preview</h3>
                                ${images.length > 1 ? `<span class="image-counter" id="previewImgCounter">1 / ${images.length}</span>` : ''}
                            </div>
                            <div class="project-preview-slider-container">
                                <div class="project-detail-image-box modal-image-wrapper" id="previewImgWrapper">
                                    <img id="projectPreviewImg" src="${images[0]}" alt="${proj.title}" loading="lazy">
                                </div>
                                ${images.length > 1 ? `
                                    <button class="slider-btn prev-btn" id="prevImgBtn" aria-label="Previous Image">
                                        <i data-lucide="chevron-left"></i>
                                    </button>
                                    <button class="slider-btn next-btn" id="nextImgBtn" aria-label="Next Image">
                                        <i data-lucide="chevron-right"></i>
                                    </button>
                                    <div class="slider-dots" id="sliderDots">
                                        ${images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (listContainer) listContainer.style.display = 'none';
        detailContainer.style.display = 'block';

        const backBtn = detailContainer.querySelector('#backToProjectsBtn');
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showProjectsList();
                updateCleanUrl('projects', true);
            });
        }

        let currentImgIndex = 0;
        const mainImg = detailContainer.querySelector('#projectPreviewImg');
        const imgCounter = detailContainer.querySelector('#previewImgCounter');
        const prevBtn = detailContainer.querySelector('#prevImgBtn');
        const nextBtn = detailContainer.querySelector('#nextImgBtn');
        const dots = detailContainer.querySelectorAll('#sliderDots .dot');
        const imgWrapper = detailContainer.querySelector('#previewImgWrapper');

        function updatePreviewImage(newIndex) {
            if (newIndex < 0) newIndex = images.length - 1;
            if (newIndex >= images.length) newIndex = 0;
            currentImgIndex = newIndex;

            if (mainImg) {
                mainImg.style.opacity = '0.3';
                setTimeout(() => {
                    mainImg.src = images[currentImgIndex];
                    mainImg.style.opacity = '1';
                }, 120);
            }

            if (imgCounter) {
                imgCounter.textContent = `${currentImgIndex + 1} / ${images.length}`;
            }

            dots.forEach((dot, idx) => {
                if (idx === currentImgIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updatePreviewImage(currentImgIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updatePreviewImage(currentImgIndex + 1);
            });
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(dot.getAttribute('data-index'), 10);
                updatePreviewImage(idx);
            });
        });

        if (imgWrapper) {
            imgWrapper.addEventListener('click', (e) => {
                e.stopPropagation();
                openImageZoomModal(currentImgIndex);
            });
        }

        function openImageZoomModal(initialIndex = 0) {
            const imageZoomModal = document.getElementById('imageZoomModal');
            const imageZoomTitle = document.getElementById('imageZoomTitle');
            const imageZoomCounter = document.getElementById('imageZoomCounter');
            const imageZoomImg = document.getElementById('imageZoomImg');
            const imageZoomPrevBtn = document.getElementById('imageZoomPrevBtn');
            const imageZoomNextBtn = document.getElementById('imageZoomNextBtn');
            const imageZoomDotsContainer = document.getElementById('imageZoomDots');
            const imageZoomCloseBtn = document.getElementById('imageZoomCloseBtn');

            if (!imageZoomModal || !imageZoomImg) return;
            
            let modalIndex = initialIndex;

            function renderModalImage(idx) {
                if (idx < 0) idx = images.length - 1;
                if (idx >= images.length) idx = 0;
                modalIndex = idx;

                imageZoomImg.style.opacity = '0.3';
                setTimeout(() => {
                    imageZoomImg.src = images[modalIndex];
                    imageZoomImg.style.opacity = '1';
                }, 100);

                if (imageZoomTitle) imageZoomTitle.textContent = proj.title || 'Project Preview';
                if (imageZoomCounter) {
                    imageZoomCounter.textContent = images.length > 1 ? `${modalIndex + 1} / ${images.length}` : '';
                    imageZoomCounter.style.display = images.length > 1 ? 'inline-block' : 'none';
                }

                if (imageZoomPrevBtn) imageZoomPrevBtn.style.display = images.length > 1 ? 'flex' : 'none';
                if (imageZoomNextBtn) imageZoomNextBtn.style.display = images.length > 1 ? 'flex' : 'none';

                if (imageZoomDotsContainer) {
                    if (images.length > 1) {
                        imageZoomDotsContainer.innerHTML = images.map((_, i) => `<span class="dot ${i === modalIndex ? 'active' : ''}" data-index="${i}"></span>`).join('');
                        imageZoomDotsContainer.querySelectorAll('.dot').forEach(dot => {
                            dot.addEventListener('click', (ev) => {
                                ev.stopPropagation();
                                const i = parseInt(dot.getAttribute('data-index'), 10);
                                renderModalImage(i);
                                updatePreviewImage(i);
                            });
                        });
                    } else {
                        imageZoomDotsContainer.innerHTML = '';
                    }
                }
            }

            renderModalImage(modalIndex);
            imageZoomModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            const onPrevClick = (ev) => {
                ev.stopPropagation();
                renderModalImage(modalIndex - 1);
                updatePreviewImage(modalIndex);
            };

            const onNextClick = (ev) => {
                ev.stopPropagation();
                renderModalImage(modalIndex + 1);
                updatePreviewImage(modalIndex);
            };

            const onCloseClick = (ev) => {
                if (ev) ev.stopPropagation();
                closeImageZoomModal();
            };

            const onKeyDown = (ev) => {
                if (!imageZoomModal.classList.contains('active')) return;
                if (ev.key === 'ArrowLeft') {
                    renderModalImage(modalIndex - 1);
                    updatePreviewImage(modalIndex);
                } else if (ev.key === 'ArrowRight') {
                    renderModalImage(modalIndex + 1);
                    updatePreviewImage(modalIndex);
                } else if (ev.key === 'Escape') {
                    closeImageZoomModal();
                }
            };

            if (imageZoomPrevBtn) imageZoomPrevBtn.onclick = onPrevClick;
            if (imageZoomNextBtn) imageZoomNextBtn.onclick = onNextClick;
            if (imageZoomCloseBtn) imageZoomCloseBtn.onclick = onCloseClick;

            imageZoomModal.onclick = (ev) => {
                if (ev.target === imageZoomModal) {
                    closeImageZoomModal();
                }
            };

            document.addEventListener('keydown', onKeyDown);

            function closeImageZoomModal() {
                imageZoomModal.classList.remove('active');
                document.body.style.overflow = '';
                document.removeEventListener('keydown', onKeyDown);
            }
        }

        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    window.showProjectsList = function() {
        const listContainer = document.getElementById('projectsListContainer');
        const detailContainer = document.getElementById('projectDetailContainer');
        if (detailContainer) detailContainer.style.display = 'none';
        if (listContainer) listContainer.style.display = 'block';
        document.title = 'Somenath Sau | Portfolio';
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    function renderProjects(filter = 'all') {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid || !portfolioData.projects) return;

        projectsGrid.className = 'projects-grid-3col';
        projectsGrid.innerHTML = '';

        const normalizedFilter = filter.toLowerCase().trim();

        const filteredProjectsWithIndex = portfolioData.projects.map((proj, idx) => ({ 
            proj, 
            originalIndex: idx,
            slug: getProjectSlug(proj, idx)
        })).filter(({ proj }) => {
            if (normalizedFilter === 'all') return true;

            const techString = (proj.techStack ? proj.techStack.join(' ') : '').toLowerCase();
            const titleString = (proj.title || '').toLowerCase();
            const categoryString = (proj.category || '').toLowerCase();
            const descString = (proj.description || '').toLowerCase();
            const fullText = `${techString} ${titleString} ${categoryString} ${descString}`;

            if (normalizedFilter === 'excel') {
                return techString.includes('excel') || titleString.includes('excel');
            } else if (normalizedFilter === 'power-bi' || normalizedFilter === 'power bi' || normalizedFilter === 'powerbi') {
                return techString.includes('power bi') || techString.includes('powerbi') || titleString.includes('power bi');
            } else if (normalizedFilter === 'sql') {
                return techString.includes('sql');
            } else if (normalizedFilter === 'python') {
                return techString.includes('python');
            }
            return true;
        });

        if (filteredProjectsWithIndex.length === 0) {
            projectsGrid.innerHTML = `
                <div class="no-projects-msg">
                    <p>No projects found matching "<strong>${filter}</strong>".</p>
                </div>
            `;
            return;
        }

        filteredProjectsWithIndex.forEach(({ proj: project, originalIndex, slug }, renderIdx) => {
            const card = document.createElement('div');
            card.classList.add('project-card-v2', 'data-analyst-card', 'fade-up', 'visible');
            card.style.transitionDelay = `${renderIdx * 0.08}s`;

            const techPillsHtml = project.techStack 
                ? project.techStack.slice(0, 4).map(tech => `<span>${tech}</span>`).join('') 
                : '';

            const descriptionText = project.description || project.keyInsight || '';

            card.innerHTML = `
                <div class="project-card-image">
                    <div class="project-image-wrapper open-project-btn" data-slug="${slug}" data-index="${originalIndex}" title="Click to view detailed analytics case study">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="project-image-overlay">
                            <span class="project-image-badge"><i data-lucide="bar-chart-3"></i> View Case Study</span>
                        </div>
                    </div>
                </div>
                <div class="project-card-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${descriptionText}</p>
                    <div class="tech-stack-v2">${techPillsHtml}</div>
                    <div class="project-card-actions">
                        <button class="btn-primary open-project-btn" data-slug="${slug}" data-index="${originalIndex}"><i data-lucide="bar-chart-2"></i> Case Study</button>
                        <a href="${project.codeLink}" class="btn-secondary" target="_blank"><i data-lucide="github"></i> Repository</a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        projectsGrid.querySelectorAll('.open-project-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetSlug = e.currentTarget.getAttribute('data-slug') || e.currentTarget.getAttribute('data-index');
                setActiveSection(targetSlug, false);
                updateCleanUrl(targetSlug, true);
            });
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    window.renderProjects = renderProjects;
    renderProjects('all');

    // Attach Project Slicer Filter Listeners
    document.querySelectorAll('.project-slicer-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.project-slicer-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filterVal = this.getAttribute('data-filter');
            renderProjects(filterVal);
        });
    });

    // Resume Modal Logic
    const resumeModal = document.getElementById('resumeModal');
    const resumeCloseBtn = document.getElementById('resumeModalCloseBtn');
    const resumeIframe = document.getElementById('resumeIframe');

    // Open Resume Modal
    document.querySelectorAll('.open-resume-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (resumeModal && resumeIframe) {
                const pdfUrl = getResumeUrl();
                resumeIframe.src = pdfUrl;
                resumeModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close Resume Modal
    if (resumeCloseBtn && resumeModal) {
        resumeCloseBtn.addEventListener('click', () => {
            resumeModal.classList.remove('active');
            resumeIframe.src = ''; 
            document.body.style.overflow = '';
        });

        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.classList.remove('active');
                resumeIframe.src = '';
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
                resumeModal.classList.remove('active');
                resumeIframe.src = '';
                document.body.style.overflow = '';
            }
        });
    }

        // 6. Render Skills Section (Attractive Modern 2x2 Layout with Brand & Category Icons)
    const skillsContainer = document.getElementById('skillsContainer');
    if (skillsContainer && portfolioData.skills) {
        skillsContainer.innerHTML = '';

                const skillIcons = {
            // Data Analytics
            "Advanced Excel": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="2" width="20" height="20" rx="4.5" fill="#107C41"/><rect x="4" y="4" width="16" height="16" rx="2.5" fill="#185C37" fill-opacity="0.25"/><path d="M8 7.5l3.5 5-3.5 5h2.5l2-3.3 2 3.3h2.5l-3.5-5 3.5-5h-2.5l-2 3.3-2-3.3H8z" fill="#FFFFFF"/></svg>`,
            "Excel": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="2" width="20" height="20" rx="4.5" fill="#107C41"/><rect x="4" y="4" width="16" height="16" rx="2.5" fill="#185C37" fill-opacity="0.25"/><path d="M8 7.5l3.5 5-3.5 5h2.5l2-3.3 2 3.3h2.5l-3.5-5 3.5-5h-2.5l-2 3.3-2-3.3H8z" fill="#FFFFFF"/></svg>`,
            "SQL": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#38BDF8"/><path d="M4 5.5v4.5c0 1.65 3.58 3 8 3s8-1.35 8-3V5.5" fill="#0284C7"/><ellipse cx="12" cy="10" rx="8" ry="3" fill="#38BDF8" fill-opacity="0.3"/><path d="M4 10v4.5c0 1.65 3.58 3 8 3s8-1.35 8-3V10" fill="#0369A1"/><ellipse cx="12" cy="14.5" rx="8" ry="3" fill="#38BDF8" fill-opacity="0.3"/><path d="M4 14.5v4c0 1.65 3.58 3 8 3s8-1.35 8-3v-4" fill="#075985"/><ellipse cx="12" cy="5.5" rx="6" ry="2" fill="#E0F2FE"/></svg>`,
            "Power BI": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="4" y="12" width="4" height="9" rx="1.5" fill="#FDE047"/><rect x="10" y="7" width="4" height="14" rx="1.5" fill="#F59E0B"/><rect x="16" y="3" width="4" height="18" rx="1.5" fill="#D97706"/></svg>`,
            "PowerBI": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="4" y="12" width="4" height="9" rx="1.5" fill="#FDE047"/><rect x="10" y="7" width="4" height="14" rx="1.5" fill="#F59E0B"/><rect x="16" y="3" width="4" height="18" rx="1.5" fill="#D97706"/></svg>`,
            "DAX & Power Query": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" fill="#8B5CF6" fill-opacity="0.15"/><path d="M7 17l4.5-10h2l-4.5 10H7z" fill="#7C3AED"/><path d="M12.5 10.5h4.5M12.5 13.5h4.5" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"/><path d="M17 6.5l3 5.5h-3.5l1.5 5.5-4-6.5h3.5L17 6.5z" fill="#F59E0B"/></svg>`,
            "Python": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h3v.4H6.8s-1.8.2-1.8 2.8 1.6 2.7 1.6 2.7h1v-1.3c0-1.5 1.3-1.4 1.3-1.4h3.1c1.5 0 1.4-1.3 1.4-1.3V3.3c0-1.3-1.5-1.3-1.5-1.3zm-1.8 1a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" fill="#387EB8"/><path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4h-3v-.4h5.2s1.8-.2 1.8-2.8-1.6-2.7-1.6-2.7h-1v1.3c0 1.5-1.3 1.4-1.3 1.4h-3.1c-1.5 0-1.4 1.3-1.4 1.3v3.2c0 1.3 1.5 1.3 1.5 1.3zm1.8-1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" fill="#FFE873"/></svg>`,
            "Pandas": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="4" y="3" width="3.2" height="18" rx="1.6" fill="#150458"/><rect x="9.5" y="7" width="3.2" height="14" rx="1.6" fill="#FFCA00"/><rect x="15" y="3" width="3.2" height="18" rx="1.6" fill="#E70488"/><rect x="2" y="10.5" width="18" height="3.2" rx="1.6" fill="#150458"/></svg>`,
            "NumPy": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" fill="#013243" fill-opacity="0.1"/><path d="M4.5 4h4.2v6.8l6.8-6.8h4.5v16h-4.2v-6.8L9 20H4.5V4z" fill="#4DABCF"/><path d="M8.7 4h6.8v3.5H8.7z" fill="#013243" fill-opacity="0.4"/><path d="M8.7 16.5h6.8V20H8.7z" fill="#013243" fill-opacity="0.4"/></svg>`,
            "Pandas & NumPy": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="3" width="3.5" height="18" rx="1.5" fill="#150458"/><rect x="7" y="7" width="3.5" height="14" rx="1.5" fill="#FFCA00"/><rect x="12" y="3" width="3.5" height="18" rx="1.5" fill="#E70488"/><rect x="2" y="10" width="13.5" height="3.5" rx="1.5" fill="#150458"/><rect x="17.5" y="3" width="4.5" height="18" rx="1.5" fill="#0284C7"/><path d="M18 5l3.5 14" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/></svg>`,
            "Matplotlib": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="2" width="20" height="20" rx="4.5" fill="#11557C" fill-opacity="0.12"/><line x1="4.5" y1="19.5" x2="19.5" y2="19.5" stroke="#11557C" stroke-width="1.6" stroke-linecap="round"/><line x1="4.5" y1="4.5" x2="4.5" y2="19.5" stroke="#11557C" stroke-width="1.6" stroke-linecap="round"/><path d="M5 16c3-1 5-9 8-9s4 7 6 5" stroke="#1F77B4" stroke-width="2" stroke-linecap="round"/><path d="M5 11c3 0 5 7 8 7s4-11 6-9" stroke="#FF7F0E" stroke-width="1.8" stroke-linecap="round"/><circle cx="13" cy="7" r="1.5" fill="#1F77B4"/><circle cx="13" cy="18" r="1.5" fill="#FF7F0E"/></svg>`,
            "Tableau": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M11 6.5h2v11h-2z" fill="#E85B27"/><path d="M6.5 11h11v2h-11z" fill="#E85B27"/><path d="M11.3 2.5h1.4v4h-1.4z" fill="#1C457A"/><path d="M10 3.8h4v1.4h-4z" fill="#1C457A"/><path d="M11.3 17.5h1.4v4h-1.4z" fill="#4B95A2"/><path d="M10 18.8h4v1.4h-4z" fill="#4B95A2"/><path d="M3.8 10h1.4v4H3.8z" fill="#C92A2C"/><path d="M2.5 11.3h4v1.4h-4z" fill="#C92A2C"/><path d="M18.8 10h1.4v4h-1.4z" fill="#6B283A"/><path d="M17.5 11.3h4v1.4h-4z" fill="#6B283A"/><path d="M16.8 5.5h1v2.5h-1z" fill="#E08B32"/><path d="M16 6.25h2.5v1H16z" fill="#E08B32"/><path d="M6.2 16h1v2.5h-1z" fill="#587D94"/><path d="M5.5 16.75h2.5v1H5.5z" fill="#587D94"/></svg>`,
            "Data Visualisation": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="2" width="20" height="20" rx="4.5" fill="#8B5CF6" fill-opacity="0.12"/><rect x="5" y="13" width="3" height="7" rx="1.2" fill="#3B82F6"/><rect x="9.5" y="8" width="3" height="12" rx="1.2" fill="#8B5CF6"/><rect x="14" y="4" width="3" height="16" rx="1.2" fill="#EC4899"/><path d="M5 11l4.5-5 4.5 4 5-6" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="4" r="1.5" fill="#F59E0B"/></svg>`,
            "Data Visualization": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="2" width="20" height="20" rx="4.5" fill="#8B5CF6" fill-opacity="0.12"/><rect x="5" y="13" width="3" height="7" rx="1.2" fill="#3B82F6"/><rect x="9.5" y="8" width="3" height="12" rx="1.2" fill="#8B5CF6"/><rect x="14" y="4" width="3" height="16" rx="1.2" fill="#EC4899"/><path d="M5 11l4.5-5 4.5 4 5-6" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="4" r="1.5" fill="#F59E0B"/></svg>`,
            "Data Modeling": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="6" rx="1.5" fill="#EEF2FF"/><rect x="14" y="3" width="7" height="6" rx="1.5" fill="#EEF2FF"/><rect x="8.5" y="15" width="7" height="6" rx="1.5" fill="#EEF2FF"/><path d="M6.5 9v3a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9"/><path d="M12 14v1"/></svg>`,
            "ETL & Data Cleaning": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16l-6.5 7.5v6l-3 2v-8L4 4z" fill="#E0F2FE" fill-opacity="0.5"/><path d="M17 17l4 4m0-4l-4 4"/></svg>`,
            "KPI Reporting": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="12" cy="12" r="9" stroke="#EC4899" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="#EC4899" stroke-width="2" fill="#FDF2F8"/><circle cx="12" cy="12" r="2" fill="#DB2777"/><path d="M16 8l5-5m-3 0h3v3" stroke="#D97706" stroke-width="2" stroke-linecap="round"/></svg>`,

                        // Generative AI
            "RLHF Evaluation": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="9" cy="8" r="3.5" stroke="#D97706" stroke-width="1.8" fill="#FFFBEB"/><path d="M3 18c0-3 3-4.5 6-4.5s6 1.5 6 4.5" stroke="#D97706" stroke-width="1.8" stroke-linecap="round"/><path d="M17 11.5l1.8 1.8 3.2-3.3" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            "Prompt Engineering": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="4" width="18" height="16" rx="4" fill="#FAF5FF" stroke="#8B5CF6" stroke-width="1.8"/><path d="M7 9l3 3-3 3" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="16" y2="15" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"/><path d="M18 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="#F59E0B"/></svg>`,
            "Text-to-SQL Generation": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><ellipse cx="10" cy="6" rx="6" ry="2.5" fill="#38BDF8"/><path d="M4 6v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6" fill="#0284C7"/><path d="M4 11v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" fill="#0369A1"/><path d="M19 11l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1 1-2.2z" fill="#F59E0B"/></svg>`,
            "Automated Insights & Summarization": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="3" width="14" height="18" rx="3" fill="#FAF5FF" stroke="#A855F7" stroke-width="1.8"/><line x1="6.5" y1="8" x2="11.5" y2="8" stroke="#9333EA" stroke-width="1.8" stroke-linecap="round"/><line x1="6.5" y1="12" x2="13.5" y2="12" stroke="#9333EA" stroke-width="1.8" stroke-linecap="round"/><line x1="6.5" y1="16" x2="11" y2="16" stroke="#9333EA" stroke-width="1.8" stroke-linecap="round"/><path d="M18 4l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1 1-2.2z" fill="#EC4899"/></svg>`,
            "Synthetic Data Generation": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="3" width="7" height="7" rx="2" fill="#06B6D4" fill-opacity="0.2" stroke="#0891B2" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="2" fill="#06B6D4" fill-opacity="0.2" stroke="#0891B2" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="2" fill="#06B6D4" fill-opacity="0.2" stroke="#0891B2" stroke-width="1.8"/><path d="M17.5 14l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8.8-1.8z" fill="#06B6D4"/><path d="M7 10v4M10 7h4" stroke="#0891B2" stroke-width="1.5" stroke-linecap="round"/></svg>`,
            "Response Evaluation": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M9 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" stroke="#10B981" stroke-width="1.8"/><rect x="9" y="2" width="6" height="3" rx="1" fill="#10B981"/><path d="M8.5 12l2.5 2.5 5-5" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 16.5h7" stroke="#10B981" stroke-width="1.5" stroke-linecap="round"/></svg>`,
            "AI Quality & Safety": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M12 3L4 6.5v6c0 5 3.5 9 8 10.5 4.5-1.5 8-5.5 8-10.5v-6L12 3z" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.8"/><path d="M8.5 12.5l2.5 2.5 5-5" stroke="#2563EB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            "Hallucination Detection": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="11" cy="11" r="7" stroke="#EF4444" stroke-width="1.8" fill="#FEF2F2"/><path d="M16 16l4.5 4.5" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/><path d="M8.5 11l2 2 3.5-3.5" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            "AI Workflow Automation": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="5" cy="12" r="3" fill="#6366F1"/><circle cx="19" cy="6" r="3" fill="#8B5CF6"/><circle cx="19" cy="18" r="3" fill="#EC4899"/><path d="M8 12h5l3-5M13 12l3 5" stroke="#6366F1" stroke-width="1.8" stroke-linecap="round"/><path d="M12 9l-1.5 3h3L12 15" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

            // Tools & Technologies
            "SQL Server (SSMS)": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" fill="#CC292B" fill-opacity="0.12"/><ellipse cx="12" cy="7" rx="7" ry="2.5" fill="#CC292B"/><path d="M5 7v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7" fill="#B91C1C"/><path d="M5 11v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" fill="#991B1B"/><ellipse cx="12" cy="7" rx="5" ry="1.5" fill="#FCA5A5"/></svg>`,
            "MySQL": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M19 12c-1.5-2.5-4-4-7-4-4.5 0-8 3.5-8 8h15c0-1.5-.5-2.8-1-4z" fill="#00758F" fill-opacity="0.2"/><path d="M4.5 15.5c2-4 6-6.5 10.5-5.5 2 .5 3.5 1.8 4 3.5-1.5-.5-3.5-.5-5 0-3 1-5.5 3-7 4.5-.8-.8-1.7-1.6-2.5-2.5z" fill="#00758F"/><circle cx="16.5" cy="11.5" r="1" fill="#F29111"/><path d="M18.5 14c1 2 2.5 3 4 3-1 1-3 1.5-4.5.5.3-1.2.5-2.3.5-3.5z" fill="#F29111"/></svg>`,
            "Git & GitHub": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="6" cy="6" r="2.5" fill="#F05032"/><circle cx="6" cy="18" r="2.5" fill="#F05032"/><circle cx="18" cy="9" r="2.5" fill="#F05032"/><path d="M6 8.5v7M8 7.5l8 2.5" stroke="#F05032" stroke-width="1.8" stroke-linecap="round"/></svg>`,
            "Jupyter Notebook": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M12 4.5c4.5 0 8 1.8 8 4 0 1.2-1 2.2-2.5 3-1-1.3-3.2-2.2-5.5-2.2s-4.5.9-5.5 2.2C5 10.7 4 9.7 4 8.5c0-2.2 3.5-4 8-4z" fill="#F37626"/><path d="M12 19.5c-4.5 0-8-1.8-8-4 0-1.2 1-2.2 2.5-3 1 1.3 3.2 2.2 5.5 2.2s4.5-.9 5.5-2.2c1.5.8 2.5 1.8 2.5 3 0 2.2-3.5 4-8 4z" fill="#F37626"/><circle cx="18" cy="6.5" r="1.3" fill="#6E6E6E"/><circle cx="6" cy="17.5" r="1.3" fill="#6E6E6E"/><circle cx="19" cy="16.5" r="1.3" fill="#6E6E6E"/></svg>`,
            "VS Code": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M17.5 2.5l4 2v15l-4 2-10-7.5-5 4V6l5 4 10-7.5z" fill="#007ACC" fill-opacity="0.2"/><path d="M17.5 2.5l4 2v15l-4 2-8.5-7.5 8.5-11.5z" fill="#007ACC"/><path d="M17.5 8.5l-6 3.5 6 3.5v-7z" fill="#1F9CF0"/><path d="M2.5 6l5 4-5 4V6z" fill="#0065A9"/><path d="M7.5 10l10-7.5v6L11 12l-3.5-2z" fill="#117CAD"/><path d="M7.5 14l10 7.5v-6L11 12l-3.5 2z" fill="#005A9E"/></svg>`,

            // Web
            "HTML 5": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M4 3l1.5 16.5L12 21.5l6.5-2L20 3H4z" fill="#E34F26"/><path d="M12 4.5v15.5l5.2-1.6L18.5 4.5H12z" fill="#EF652A"/><path d="M8 8.5h8l-.3 3H9.5l.2 2.5h6l-.4 4.5-3.3 1-3.3-1-.2-2h-2l.3 3.5 5.2 1.5 5.2-1.5.7-8H7.7l.3-3z" fill="#FFFFFF"/></svg>`,
            "CSS 3": `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M4 3l1.5 16.5L12 21.5l6.5-2L20 3H4z" fill="#1572B6"/><path d="M12 4.5v15.5l5.2-1.6L18.5 4.5H12z" fill="#33A9DC"/><path d="M8 8.5h8l-.3 3H9.5l.2 2.5h6l-.4 4.5-3.3 1-3.3-1-.2-2h-2l.3 3.5 5.2 1.5 5.2-1.5.7-8H7.7l.3-3z" fill="#FFFFFF"/></svg>`
        };

        // Intelligent lookup helper so any naming variation or casing gets the correct brand icon
        function getSkillIcon(rawName) {
            const name = (rawName || '').trim();
            if (skillIcons[name]) return skillIcons[name];
            
            const lower = name.toLowerCase();
            for (const key in skillIcons) {
                if (key.toLowerCase() === lower) return skillIcons[key];
            }
            if (lower.includes('pandas')) return skillIcons['Pandas'];
            if (lower.includes('numpy')) return skillIcons['NumPy'];
            if (lower.includes('matplotlib')) return skillIcons['Matplotlib'];
            if (lower.includes('tableau')) return skillIcons['Tableau'];
            if (lower.includes('visualis') || lower.includes('visualiz')) return skillIcons['Data Visualisation'];
            if (lower.includes('excel')) return skillIcons['Advanced Excel'];
            if (lower.includes('power bi') || lower.includes('powerbi')) return skillIcons['Power BI'];
            if (lower.includes('sql server') || lower.includes('ssms')) return skillIcons['SQL Server (SSMS)'];
            if (lower.includes('mysql')) return skillIcons['MySQL'];
            if (lower.includes('python')) return skillIcons['Python'];
            if (lower.includes('dax') || lower.includes('power query')) return skillIcons['DAX & Power Query'];
            if (lower.includes('kpi')) return skillIcons['KPI Reporting'];
            if (lower.includes('etl') || lower.includes('clean')) return skillIcons['ETL & Data Cleaning'];
            if (lower.includes('model')) return skillIcons['Data Modeling'];
            if (lower.includes('jupyter')) return skillIcons['Jupyter Notebook'];
            if (lower.includes('vs code') || lower.includes('vscode')) return skillIcons['VS Code'];
            if (lower.includes('git')) return skillIcons['Git & GitHub'];
            if (lower.includes('html')) return skillIcons['HTML 5'];
            if (lower.includes('css')) return skillIcons['CSS 3'];
                        if (lower.includes('text-to-sql') || lower.includes('text to sql') || (lower.includes('sql') && lower.includes('gen'))) return skillIcons['Text-to-SQL Generation'];
            if (lower.includes('insight') || lower.includes('summariz')) return skillIcons['Automated Insights & Summarization'];
            if (lower.includes('synthetic')) return skillIcons['Synthetic Data Generation'];
            if (lower.includes('hallucination')) return skillIcons['Hallucination Detection'];
            if (lower.includes('workflow') && lower.includes('ai')) return skillIcons['AI Workflow Automation'];
            if (lower.includes('rlhf')) return skillIcons['RLHF Evaluation'];
            if (lower.includes('prompt')) return skillIcons['Prompt Engineering'];
            if (lower.includes('response')) return skillIcons['Response Evaluation'];
            if (lower.includes('safety')) return skillIcons['AI Quality & Safety'];
            if (lower === 'sql') return skillIcons['SQL'];

            return `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/></svg>`;
        }

        const categoryIcons = {
            analytics: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><rect x="4" y="14" width="4.5" height="10" rx="2" fill="#F59E0B"/><rect x="11.5" y="9" width="4.5" height="15" rx="2" fill="#D97706"/><rect x="19" y="4" width="4.5" height="20" rx="2" fill="#B45309"/><path d="M5 12l6.5-5 7-2 5-2" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round"/><circle cx="23.5" cy="3" r="2" fill="#22C55E"/></svg>`,
            genai: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><path d="M14 2c.8 5.6 5.4 10.2 11 11-5.6.8-10.2 5.4-11 11-.8-5.6-5.4-10.2-11-11 5.6-.8 10.2-5.4 11-11z" fill="url(#genaiGrad)"/><circle cx="21" cy="6" r="2.5" fill="#F59E0B"/><circle cx="6" cy="20" r="1.5" fill="#EC4899"/><defs><linearGradient id="genaiGrad" x1="3" y1="2" x2="25" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#A855F7"/><stop offset="0.5" stop-color="#EC4899"/><stop offset="1" stop-color="#F59E0B"/></linearGradient></defs></svg>`,
            tools: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><rect x="3" y="4" width="22" height="18" rx="4.5" fill="#1E293B" stroke="#3B82F6" stroke-width="1.8"/><circle cx="6.5" cy="7.5" r="1" fill="#EF4444"/><circle cx="9.5" cy="7.5" r="1" fill="#F59E0B"/><circle cx="12.5" cy="7.5" r="1" fill="#10B981"/><path d="M7 14l3.5 2.5L7 19" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="13" y1="19" x2="18" y2="19" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"/></svg>`,
            web: `<svg viewBox="0 0 28 28" width="24" height="24" fill="none"><rect x="3" y="4" width="22" height="19" rx="4.5" fill="#0F172A" stroke="#10B981" stroke-width="1.8"/><circle cx="6.5" cy="7.5" r="1" fill="#EF4444"/><circle cx="9.5" cy="7.5" r="1" fill="#F59E0B"/><circle cx="12.5" cy="7.5" r="1" fill="#10B981"/><path d="M9 13.5l-2.5 2.5 2.5 2.5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="15" y1="12" x2="13" y2="20" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/><path d="M19 13.5l2.5 2.5-2.5 2.5" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        };

        const gridWrapper = document.createElement('div');
        gridWrapper.classList.add('skills-cards-grid');

        portfolioData.skills.forEach(categoryData => {
            const cardEl = document.createElement('div');
            cardEl.classList.add('skill-category-card', 'fade-up');

            const iconHtml = categoryIcons[categoryData.iconKey] || categoryIcons.analytics;

            const pillsHtml = (categoryData.items || []).map(item => {
                const name = typeof item === 'string' ? item : (item.name || '');
                const cleanName = name.replace(/^[\p{Emoji}\s\uFE0F\u200D]+/gu, '').trim();
                const skillSvg = getSkillIcon(cleanName || name);
                return `
                    <span class="skill-tag-pill">
                        <span class="skill-pill-icon">${skillSvg}</span>
                        <span class="skill-pill-label">${cleanName || name}</span>
                    </span>
                `;
            }).join('');

            cardEl.innerHTML = `
                <div class="skill-card-header">
                    <div class="skill-icon-badge skill-badge-${categoryData.iconKey || 'analytics'}">
                        ${iconHtml}
                    </div>
                    <div class="skill-header-meta">
                        <h3 class="skill-category-title">${categoryData.category}</h3>
                        <span class="skill-category-count">${(categoryData.items || []).length} Skills</span>
                    </div>
                </div>
                <p class="skill-category-desc">${categoryData.description || ''}</p>
                <div class="skill-pills-wrap">
                    ${pillsHtml}
                </div>
            `;

            gridWrapper.appendChild(cardEl);
        });

        skillsContainer.appendChild(gridWrapper);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // 7. Render Certifications Section
    const certGrid = document.getElementById('certGrid');
    if (certGrid && portfolioData.certifications) {
        certGrid.innerHTML = '';
        portfolioData.certifications.forEach((cert, index) => {
            const card = document.createElement('div');
            card.classList.add('cert-card-refined', 'fade-up');
            card.style.transitionDelay = `${index * 0.1}s`;

            const metaHeaderHtml = cert.year ? `
                <p class="cert-meta-header">
                    <span>${cert.issuer}</span>
                    <span class="cert-meta-dot">•</span>
                    <span>${cert.year}</span>
                </p>
            ` : `
                <p class="cert-meta-header">
                    <span>${cert.issuer}</span>
                </p>
            `;

            const imageHtml = cert.image ? `
                <div class="cert-image-container">
                    <img src="${cert.image}" alt="${cert.title}" loading="lazy" class="cert-card-img">
                </div>
            ` : '';

            card.innerHTML = `
                ${imageHtml}
                <div class="cert-card-body">
                    ${metaHeaderHtml}
                    <h3 class="cert-title-refined">${cert.title}</h3>
                    <a href="${cert.credentialLink}" class="cert-verify-corner-btn" target="_blank" rel="noopener noreferrer" title="Verify Credential">
                        <i data-lucide="shield-check" class="cert-corner-icon"></i>
                        <span>Verify</span>
                    </a>
                </div>
            `;
            certGrid.appendChild(card);
        });
    }

    // 8. Render Contact Links
    const contactLinksContainer = document.getElementById('contactLinks');
    if (contactLinksContainer && portfolioData.socialLinks) {
        const { linkedin, github, email } = portfolioData.socialLinks;

        const linkedinClean = (linkedin || '').replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
        const githubClean = (github || '').replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

        let contactHtml = `
            <a href="${email}" class="contact-card-item">
                <div class="contact-card-icon">
                    <i data-lucide="mail"></i>
                </div>
                <div class="contact-card-details">
                    <span class="contact-card-label">Email</span>
                    <span class="contact-card-value">${portfolioData.email}</span>
                </div>
            </a>
        `;

        if (portfolioData.phone) {
            contactHtml += `
                <a href="tel:${portfolioData.phone.replace(/[^+\d]/g, '')}" class="contact-card-item">
                    <div class="contact-card-icon">
                        <i data-lucide="phone"></i>
                    </div>
                    <div class="contact-card-details">
                        <span class="contact-card-label">Phone</span>
                        <span class="contact-card-value">${portfolioData.phone}</span>
                    </div>
                </a>
            `;
        }

        contactHtml += `
            <a href="${linkedin}" class="contact-card-item" target="_blank" rel="noopener noreferrer">
                <div class="contact-card-icon">
                    <i data-lucide="linkedin"></i>
                </div>
                <div class="contact-card-details">
                    <span class="contact-card-label">LinkedIn</span>
                    <span class="contact-card-value">${linkedinClean}</span>
                </div>
            </a>
            <a href="${github}" class="contact-card-item" target="_blank" rel="noopener noreferrer">
                <div class="contact-card-icon">
                    <i data-lucide="github"></i>
                </div>
                <div class="contact-card-details">
                    <span class="contact-card-label">GitHub</span>
                    <span class="contact-card-value">${githubClean}</span>
                </div>
            </a>
        `;

        contactLinksContainer.innerHTML = contactHtml;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // Render Footer Socials
    const footerSocials = document.getElementById('footerSocials');
    if (footerSocials && portfolioData.socialLinks) {
        const { linkedin, github, email } = portfolioData.socialLinks;
        footerSocials.innerHTML = `
            <a href="${linkedin}" target="_blank" class="footer-social-link linkedin" title="LinkedIn"><i data-lucide="linkedin"></i></a>
            <a href="${github}" target="_blank" class="footer-social-link github" title="GitHub"><i data-lucide="github"></i></a>
            <a href="${email}" class="footer-social-link email" title="Email"><i data-lucide="mail"></i></a>
        `;
    }

    // Render Mobile Nav Socials
    const mobileNavSocials = document.getElementById('mobileNavSocials');
    const sidebarSocials = document.getElementById('sidebarSocials');
    if ((mobileNavSocials || sidebarSocials) && portfolioData.socialLinks) {
        const { linkedin, github, email } = portfolioData.socialLinks;
        const socialsHtml = `
            <a href="${linkedin}" target="_blank" class="footer-social-link linkedin" title="LinkedIn"><i data-lucide="linkedin"></i></a>
            <a href="${github}" target="_blank" class="footer-social-link github" title="GitHub"><i data-lucide="github"></i></a>
            <a href="${email}" class="footer-social-link email" title="Email"><i data-lucide="mail"></i></a>
        `;
        if (mobileNavSocials) mobileNavSocials.innerHTML = socialsHtml;
        if (sidebarSocials) sidebarSocials.innerHTML = socialsHtml;
    }

    // Initialize Icons AFTER dynamic content is added
    if (typeof lucide !== 'undefined') lucide.createIcons();


    // --- UI/UX INTERACTIONS ---

    // Mobile Top Navigation Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const navBackdrop = document.getElementById('navBackdrop');

    if (mobileMenu && mobileNavMenu) {
        const toggleMobileNav = (open) => {
            const shouldOpen = open !== undefined ? open : !mobileNavMenu.classList.contains('active');
            if (shouldOpen) {
                mobileNavMenu.classList.add('active');
                mobileMenu.classList.add('active');
                if (navBackdrop) navBackdrop.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                mobileNavMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                if (navBackdrop) navBackdrop.classList.remove('active');
                document.body.style.overflow = '';
            }
        };

        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileNav();
        });

        if (navBackdrop) {
            navBackdrop.addEventListener('click', () => {
                toggleMobileNav(false);
            });
        }

        // Close Mobile Menu when any link or modal button inside it is clicked
        mobileNavMenu.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => {
                toggleMobileNav(false);
            });
        });

        // Close Mobile Menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNavMenu.classList.contains('active')) {
                toggleMobileNav(false);
            }
        });
    }

    // Scroll Progress Bar
    const scrollProgressBar = document.getElementById('scrollProgressBar');
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        if (scrollProgressBar) {
            scrollProgressBar.style.width = scrollPercentage + '%';
        }

        // Navbar Sticky Effect
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
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



    // --- SINGLE PAGE APPLICATION (SPA) CLEAN URL ROUTING ---
    function getCurrentRoute() {
        if (window.location.hash) {
            return window.location.hash.replace('#', '');
        }

        if (window.location.protocol === 'file:') {
            return 'home';
        }

        let path = window.location.pathname;
        let segments = path.split('/').filter(Boolean);
        let lastSegment = segments.length > 0 ? segments[segments.length - 1] : '';
        
        if (lastSegment === 'index.html') {
            lastSegment = segments.length > 1 ? segments[segments.length - 2] : '';
        }
        
        const validSections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
        if (lastSegment) {
            if (validSections.includes(lastSegment)) {
                return lastSegment;
            }
            if (typeof findProject === 'function' && findProject(lastSegment)) {
                return lastSegment;
            }
        }

        return 'home';
    }

    function updateCleanUrl(route, isPush = true) {
        let cleanRoute = (route || 'home').replace('#', '').trim();

        if (window.location.protocol === 'file:') {
            try {
                const targetHash = (cleanRoute && cleanRoute !== 'home') ? ('#' + cleanRoute) : '';
                const newUrl = window.location.pathname + window.location.search + targetHash;
                if (isPush) {
                    history.pushState(null, null, newUrl);
                } else {
                    history.replaceState(null, null, newUrl);
                }
            } catch (e) {
                console.warn('Could not update local url hash:', e);
            }
            return;
        }

        let targetPath = '';
        if (cleanRoute === 'home' || cleanRoute === 'about' || cleanRoute === '' || cleanRoute === 'index.html') {
            targetPath = '/';
        } else {
            targetPath = '/' + cleanRoute;
        }

        if (window.location.pathname !== targetPath && (window.location.pathname + window.location.hash) !== targetPath) {
            try {
                if (isPush) {
                    history.pushState(null, null, targetPath);
                } else {
                    history.replaceState(null, null, targetPath);
                }
            } catch (e) {
                console.warn('Could not update history state:', e);
                try {
                    window.location.hash = cleanRoute;
                } catch (err) {}
            }
        }
    }
    window.updateCleanUrl = updateCleanUrl;

    function isMobileMode() {
        return window.innerWidth <= 992;
    }

    function updateNavActiveLinks(activeId) {
        document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const linkId = href.replace('#', '');
                if (linkId === activeId || (activeId === 'about' && linkId === 'home')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    function setActiveSection(targetRoute, shouldUpdateUrl = true, shouldScroll = true) {
        let rawId = (targetRoute || getCurrentRoute()).replace('#', '').trim();
        
        let isProjectDetail = false;
        let matchedProj = typeof findProject === 'function' ? findProject(rawId) : null;
        let routeForUrl = rawId;

        if (matchedProj) {
            isProjectDetail = true;
            rawId = 'projects';
            routeForUrl = matchedProj.slug;
        }

        const validSections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
        let activeId = validSections.includes(rawId) ? rawId : 'home';

        if (!validSections.includes(rawId) && !isProjectDetail) {
            routeForUrl = 'home';
        }

        const isMobile = isMobileMode();

        if (!isMobile) {
            // ==========================================
            // DESKTOP VIEW (> 992px): Tab-based SPA Mode
            // ==========================================
            // Hide all sections
            document.querySelectorAll('.hero-section, .section').forEach(sec => {
                sec.classList.remove('active-section');
            });

            // Show active section(s)
            if (activeId === 'home' || activeId === 'about') {
                const homeSec = document.getElementById('home');
                const aboutSec = document.getElementById('about');
                if (homeSec) homeSec.classList.add('active-section');
                if (aboutSec) aboutSec.classList.add('active-section');
                activeId = 'home';
                routeForUrl = 'home';
            } else {
                const targetSec = document.getElementById(activeId);
                if (targetSec) targetSec.classList.add('active-section');
            }

            if (activeId === 'projects') {
                if (isProjectDetail && matchedProj) {
                    if (typeof window.showProjectDetails === 'function') {
                        window.showProjectDetails(matchedProj.slug);
                    }
                } else {
                    if (typeof window.showProjectsList === 'function') {
                        window.showProjectsList();
                    }
                }
            } else {
                document.title = 'Somenath Sau | Portfolio';
            }

            // Trigger animations for .fade-up inside active sections
            document.querySelectorAll('.active-section .fade-up').forEach(el => {
                el.classList.add('visible');
            });

            updateNavActiveLinks(activeId);

            if (shouldUpdateUrl) {
                updateCleanUrl(routeForUrl, false);
            }

            if (shouldScroll) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        } else {
            // ==============================================================
            // MOBILE VIEW (<= 992px): Continuous Single Scrollable Page Mode
            // ==============================================================
            if (isProjectDetail && matchedProj) {
                if (typeof window.showProjectDetails === 'function') {
                    window.showProjectDetails(matchedProj.slug);
                }
                const projSec = document.getElementById('projects');
                if (projSec && shouldScroll) {
                    const navHeight = 88;
                    const targetTop = projSec.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
                }
            } else if (activeId === 'projects' && !isProjectDetail) {
                if (typeof window.showProjectsList === 'function') {
                    window.showProjectsList();
                }
                document.title = 'Somenath Sau | Portfolio';
            } else {
                document.title = 'Somenath Sau | Portfolio';
            }

            if (!isProjectDetail && shouldScroll) {
                const targetElem = document.getElementById(activeId === 'about' ? 'about' : (activeId === 'home' ? 'home' : activeId));
                if (targetElem) {
                    const navHeight = 88;
                    const targetTop = activeId === 'home' ? 0 : (targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight);
                    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
                }
            }

            // Reveal all fade-up elements in view
            document.querySelectorAll('.fade-up').forEach(el => {
                el.classList.add('visible');
            });

            updateNavActiveLinks(activeId);

            if (shouldUpdateUrl) {
                updateCleanUrl(routeForUrl, false);
            }
        }

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // --- Mobile Scrollspy ---
    const mobileSectionsList = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
    
    function handleMobileScrollspy() {
        if (!isMobileMode()) return;
        const scrollPosition = window.pageYOffset + 140;
        
        for (let i = mobileSectionsList.length - 1; i >= 0; i--) {
            const sectionId = mobileSectionsList[i];
            const sectionElem = document.getElementById(sectionId);
            if (sectionElem) {
                const sectionTop = sectionElem.offsetTop;
                if (scrollPosition >= sectionTop) {
                    updateNavActiveLinks(sectionId === 'about' ? 'home' : sectionId);
                    break;
                }
            }
        }
    }

    window.addEventListener('scroll', handleMobileScrollspy, { passive: true });

    // Intersection Observer for scroll animations on mobile
    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.fade-up').forEach(el => {
            fadeObserver.observe(el);
        });
    } else {
        document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    }

    // Window Resize Handler to switch cleanly between Desktop & Mobile modes
    let previousIsMobile = isMobileMode();
    window.addEventListener('resize', () => {
        const currentIsMobile = isMobileMode();
        if (previousIsMobile !== currentIsMobile) {
            previousIsMobile = currentIsMobile;
            const currentRoute = getCurrentRoute();
            if (!currentIsMobile) {
                // Switched to Desktop: enforce single active section display
                setActiveSection(currentRoute, false, false);
            } else {
                // Switched to Mobile: reveal all sections
                document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
                updateNavActiveLinks(currentRoute);
            }
        }
    });

    // Attach click listeners to all hash links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const route = href.replace('#', '');

                // Close mobile dropdown menu if open
                const mobileNavMenu = document.getElementById('mobileNavMenu');
                const mobileMenu = document.getElementById('mobile-menu');
                const navBackdrop = document.getElementById('navBackdrop');
                if (mobileNavMenu && mobileNavMenu.classList.contains('active')) {
                    mobileNavMenu.classList.remove('active');
                    if (mobileMenu) mobileMenu.classList.remove('active');
                    if (navBackdrop) navBackdrop.classList.remove('active');
                    document.body.style.overflow = '';
                }

                setActiveSection(route, false, true);
                updateCleanUrl(route, true);
            }
        });
    });

    // Handle browser navigation (back/forward)
    window.addEventListener('popstate', () => {
        setActiveSection(getCurrentRoute(), false, !isMobileMode());
    });

    // Initialize section on page load
    const initialRoute = getCurrentRoute();
    setActiveSection(initialRoute, true, false);

    // --- THEME TOGGLE LOGIC ---
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    
    function updateThemeIcon(theme) {
        themeToggleBtns.forEach(btn => {
            btn.innerHTML = `<i data-lucide="${theme === 'dark' ? 'moon' : 'sun'}"></i>`;
        });
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    // Initialize theme icon on load
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeIcon(currentTheme);
    
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const targetTheme = activeTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateThemeIcon(targetTheme);
        });
    });

});

// --- TYPEWRITER EFFECT FOR HERO ROLES ---
function initRoleTypewriter() {
    const typewriterElem = document.getElementById('typewriterText');
    if (!typewriterElem) return;

    const roles = (typeof portfolioData !== 'undefined' && portfolioData.roles && portfolioData.roles.length)
        ? portfolioData.roles
        : ['Data Analyst', 'Business Analyst', 'MIS Analyst', 'BI Analyst'];

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let isDeleting = false;

    function typeLoop() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
            typewriterElem.textContent = currentRole.substring(0, charIndex);
        } else {
            charIndex++;
            typewriterElem.textContent = currentRole.substring(0, charIndex);
        }

        let speed = isDeleting ? 40 : 85;

        if (!isDeleting && charIndex === currentRole.length) {
            // Full role typed: pause for 2.2 seconds before erasing
            speed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Role fully erased: pause briefly and advance to the next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(typeLoop, speed);
    }

    // Begin erasing the initial role after 2.2s delay
    setTimeout(() => {
        isDeleting = true;
        typeLoop();
    }, 2200);
}




