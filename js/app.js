/**
 * Tanvir Anjum Sazid - Portfolio Interactive Logic
 * Handles themes, mobile drawer, project modal rendering, CV viewer, copy tools, and contact actions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initSkillFilters();
  initScrollEffects();
});

/* ==========================================================================
   THEME TOGGLE SYSTEM (Light / Executive Dark)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("sazid_portfolio_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeUI(savedTheme);

  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("sazid_portfolio_theme", nextTheme);
      updateThemeUI(nextTheme);
      showToast(`Switched to ${nextTheme === "dark" ? "Executive Dark" : "Corporate Light"} mode`);
    });
  });
}

function updateThemeUI(theme) {
  const modeTexts = document.querySelectorAll(".theme-mode-text");
  modeTexts.forEach(el => {
    el.textContent = theme === "dark" ? "Executive Dark" : "Corporate Light";
  });
}

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");
  const navBackdrop = document.getElementById("navBackdrop");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const navLinks = document.querySelectorAll(".nav-link");

  function openMenu() {
    if (!mainNav || !hamburgerBtn) return;
    mainNav.classList.add("nav-open");
    hamburgerBtn.classList.add("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    if (navBackdrop) navBackdrop.classList.add("active");
    document.body.classList.add("nav-locked");
  }

  function closeMenu() {
    if (!mainNav || !hamburgerBtn) return;
    mainNav.classList.remove("nav-open");
    hamburgerBtn.classList.remove("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    if (navBackdrop) navBackdrop.classList.remove("active");
    document.body.classList.remove("nav-locked");
  }

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.contains("nav-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeMenu();
      });
    }

    if (navBackdrop) {
      navBackdrop.addEventListener("click", () => {
        closeMenu();
      });
    }

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Close menu when clicking outside on mobile
    document.addEventListener("click", (e) => {
      if (
        mainNav.classList.contains("nav-open") &&
        !mainNav.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Close menu on Escape key press
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mainNav.classList.contains("nav-open")) {
        closeMenu();
      }
    });

    // Close menu automatically on window resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024 && mainNav.classList.contains("nav-open")) {
        closeMenu();
      }
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.getElementById("siteHeader");

    if (header) {
      if (scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navTarget = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navTarget) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navTarget.classList.add("active");
        } else {
          navTarget.classList.remove("active");
        }
      }
    });
  }, { passive: true });

  window.closeMobileNav = closeMenu;
}

/* ==========================================================================
   SKILLS FILTERING SYSTEM
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll(".skill-filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      skillCards.forEach(card => {
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   SAMPLE PROJECT PREVIEW MODAL SYSTEM
   ========================================================================== */
function openProjectModal(projectId) {
  if (typeof sampleProjectsData === "undefined") return;
  const project = sampleProjectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalTitle = document.getElementById("projectModalTitle");
  const modalCategory = document.getElementById("projectModalCategory");
  const modalBody = document.getElementById("projectModalBody");
  const modalBackdrop = document.getElementById("projectModalBackdrop");

  if (!modalTitle || !modalCategory || !modalBody || !modalBackdrop) return;

  modalTitle.textContent = project.title;
  modalCategory.textContent = `${project.category} • ${project.badge}`;

  let contentHtml = "";

  // 1. Email Sample
  if (project.modalContent.type === "email") {
    const { meta, preview, takeaways } = project.modalContent;
    contentHtml = `
      <div class="sample-email-preview">
        <div class="email-meta-header">
          <div class="email-meta-row"><span class="email-meta-label">To:</span> <span class="email-meta-val">${meta.to}</span></div>
          <div class="email-meta-row"><span class="email-meta-label">From:</span> <span class="email-meta-val">${meta.from}</span></div>
          <div class="email-meta-row"><span class="email-meta-label">Subject:</span> <span class="email-meta-val"><strong>${meta.subject}</strong></span></div>
          <div class="email-meta-row"><span class="email-meta-label">Date:</span> <span class="email-meta-val">${meta.date}</span></div>
        </div>
        <div class="email-body-text">${preview}</div>
      </div>
      <div class="key-takeaways-box">
        <div class="takeaways-title">Workplace Competencies Demonstrated:</div>
        <ul class="takeaways-list">
          ${takeaways.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }
  // 2. Document / SOP Sample
  else if (project.modalContent.type === "document") {
    const { docMeta, title, sections, takeaways } = project.modalContent;
    contentHtml = `
      <table class="sop-header-table">
        <tr>
          <td class="sop-meta-label">Document ID</td>
          <td>${docMeta.docNumber}</td>
          <td class="sop-meta-label">Version</td>
          <td>${docMeta.version}</td>
        </tr>
        <tr>
          <td class="sop-meta-label">Effective Date</td>
          <td>${docMeta.effectiveDate}</td>
          <td class="sop-meta-label">Department</td>
          <td>${docMeta.department}</td>
        </tr>
      </table>

      <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 1rem; color: var(--brand-primary);">${title}</h4>

      ${sections.map(s => `
        <div class="sop-section-title">${s.heading}</div>
        ${s.body ? `<p class="sop-section-p">${s.body}</p>` : ''}
        ${s.table ? `
          <div class="sample-table-wrapper" style="margin-top: 0.75rem;">
            <table class="sample-table">
              <thead>
                <tr>${s.table.headers.map(h => `<th>${h}</th>`).join("")}</tr>
              </thead>
              <tbody>
                ${s.table.rows.map(row => `
                  <tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        ` : ''}
      `).join("")}

      <div class="key-takeaways-box">
        <div class="takeaways-title">Documentation Capabilities Demonstrated:</div>
        <ul class="takeaways-list">
          ${takeaways.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }
  // 3. Spreadsheet Sample
  else if (project.modalContent.type === "spreadsheet") {
    const { kpis, sheetName, tableHeaders, tableData, formulasShowcase, takeaways } = project.modalContent;
    contentHtml = `
      <div class="spreadsheet-kpi-grid">
        ${kpis.map(k => `
          <div class="kpi-card">
            <div class="kpi-num">${k.value}</div>
            <div class="kpi-text">${k.label}</div>
          </div>
        `).join("")}
      </div>

      <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        Active Sheet: <strong>${sheetName}</strong>
      </div>

      <div class="sample-table-wrapper">
        <table class="sample-table">
          <thead>
            <tr>${tableHeaders.map(h => `<th>${h}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${tableData.map(row => `
              <tr>
                <td><strong>${row[0]}</strong></td>
                <td>${row[1]}</td>
                <td>${row[2]}</td>
                <td><span class="status-badge-verified">${row[3]}</span></td>
                <td>${row[4]}</td>
                <td>${row[5]}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="formulas-box">
        <div class="formulas-title">Key Formulas &amp; Functions Applied:</div>
        ${formulasShowcase.map(f => `<code class="formula-code">${f}</code>`).join("")}
      </div>

      <div class="key-takeaways-box">
        <div class="takeaways-title">Data Management Strengths:</div>
        <ul class="takeaways-list">
          ${takeaways.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }
  // 4. Customer Support Dialog
  else if (project.modalContent.type === "support_dialog") {
    const { ticketId, channel, clientName, inquiry, response, takeaways } = project.modalContent;
    contentHtml = `
      <div class="ticket-meta-strip">
        <span>Ticket ID: <strong>${ticketId}</strong></span>
        <span>Channel: <strong>${channel}</strong></span>
      </div>

      <div class="chat-bubble client-bubble">
        <div class="bubble-sender">Client Inquiry &bull; ${clientName}</div>
        <p>${inquiry}</p>
      </div>

      <div class="chat-bubble agent-bubble">
        <div class="bubble-sender">Representative Response &bull; Tanvir Anjum Sazid</div>
        <p style="white-space: pre-line;">${response}</p>
      </div>

      <div class="key-takeaways-box">
        <div class="takeaways-title">Customer Service Competencies:</div>
        <ul class="takeaways-list">
          ${takeaways.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }
  // 5. Office Administration Plan
  else if (project.modalContent.type === "admin_plan") {
    const { eventTitle, date, location, coordinationChecklist, takeaways } = project.modalContent;
    contentHtml = `
      <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">${eventTitle}</h4>
        <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 1.5rem;">
          <div><strong>Date:</strong> ${date}</div>
          <div><strong>Venue:</strong> ${location}</div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${coordinationChecklist.map(c => `
          <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
            <div style="font-weight: 700; font-size: 0.95rem; color: var(--brand-accent); margin-bottom: 0.5rem;">${c.phase}</div>
            <ul style="padding-left: 1.25rem; list-style: disc; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">
              ${c.items.map(it => `<li>${it}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>

      <div class="key-takeaways-box">
        <div class="takeaways-title">Administrative Coordination Capabilities:</div>
        <ul class="takeaways-list">
          ${takeaways.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }
  // 6. Report Writing Sample
  else if (project.modalContent.type === "report") {
    const { reportTitle, author, date, structure, takeaways } = project.modalContent;
    contentHtml = `
      <div style="border-bottom: 2px solid var(--brand-primary); padding-bottom: 1rem; margin-bottom: 1.25rem;">
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--brand-primary); line-height: 1.3;">${reportTitle}</h4>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.35rem;">${author} &bull; ${date}</div>
      </div>

      ${structure.map(s => `
        <div style="margin-bottom: 1.25rem;">
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary); margin-bottom: 0.35rem;">${s.heading}</div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; white-space: pre-line;">${s.content}</p>
        </div>
      `).join("")}

      <div class="key-takeaways-box">
        <div class="takeaways-title">Report Writing Strengths:</div>
        <ul class="takeaways-list">
          ${takeaways.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  modalBody.innerHTML = contentHtml;
  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById("projectModalBackdrop");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function handleModalBackdropClick(e) {
  if (e.target && e.target.id === "projectModalBackdrop") {
    closeProjectModal();
  }
}

/* ==========================================================================
   CV / RESUME MODAL SYSTEM
   ========================================================================== */
function openCvModal() {
  if (typeof window.closeMobileNav === "function") {
    window.closeMobileNav();
  }
  const cvModalBackdrop = document.getElementById("cvModalBackdrop");
  if (cvModalBackdrop) {
    cvModalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCvModal() {
  const cvModalBackdrop = document.getElementById("cvModalBackdrop");
  if (cvModalBackdrop) {
    cvModalBackdrop.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function handleCvBackdropClick(e) {
  if (e.target && e.target.id === "cvModalBackdrop") {
    closeCvModal();
  }
}

// Global Escape Key Listener for Modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    closeCvModal();
  }
});

/* ==========================================================================
   CONTACT FORM SUBMISSION & COPY TOAST
   ========================================================================== */
function handleFormSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById("formName");
  const emailInput = document.getElementById("formEmail");
  const subjectInput = document.getElementById("formSubject");
  const messageInput = document.getElementById("formMessage");

  const name = nameInput ? nameInput.value.trim() : "";
  const email = emailInput ? emailInput.value.trim() : "";
  const subject = subjectInput ? subjectInput.value.trim() : "";
  const message = messageInput ? messageInput.value.trim() : "";

  if (!name || !email || !subject || !message) {
    showToast("Please complete all required fields.");
    return;
  }

  // Construct mailto link
  const mailtoUrl = `mailto:tanjum643@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
  
  // Launch email client
  window.location.href = mailtoUrl;

  showToast("Launching your email client to send message...");
  const form = document.getElementById("contactForm");
  if (form) form.reset();
}

function copyText(text, successMsg = "Copied to clipboard!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMsg);
  } catch (err) {
    showToast("Unable to copy automatically.");
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function initScrollEffects() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function triggerDownloadFeedback(fileType = "PDF") {
  showToast(`Downloading Tanvir Anjum Sazid CV (${fileType})... Thank you for your review!`);
}

// Explicit window bindings for inline HTML onclick attributes
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.handleModalBackdropClick = handleModalBackdropClick;
window.openCvModal = openCvModal;
window.closeCvModal = closeCvModal;
window.handleCvBackdropClick = handleCvBackdropClick;
window.handleFormSubmit = handleFormSubmit;
window.copyText = copyText;
window.scrollToTop = scrollToTop;
window.triggerDownloadFeedback = triggerDownloadFeedback;
