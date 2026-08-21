'use strict';

/* ===== Sidebar toggle (mobile) ===== */
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    const isOpen = sidebar.classList.toggle('is-open');
    sidebarBtn.setAttribute('aria-expanded', isOpen);
  });
}

/* ===== Navbar page switching ===== */
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    const target = this.dataset.navTarget;

    pages.forEach((page) => {
      page.classList.toggle('active', page.dataset.page === target);
    });

    navLinks.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* ===== Certification filter ===== */
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    const filter = this.dataset.filter;

    filterBtns.forEach((b) => b.classList.remove('active'));
    this.classList.add('active');

    filterItems.forEach((item) => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hide', !match);
    });
  });
});

/* ===== Contact form validation ===== */
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

function toggleFormBtn() {
  const allValid = Array.from(formInputs).every((input) => input.value.trim() !== '' && input.checkValidity());
  formBtn.disabled = !allValid;
}

formInputs.forEach((input) => {
  input.addEventListener('input', toggleFormBtn);
});
