window.HYDROGIS_SUPABASE_CONFIG = {
  url: '',
  anonKey: ''
};

(() => {
  function simplifyPortfolio() {
    document.querySelectorAll('a[href="#data-hub"]').forEach(link => {
      if (link.classList.contains('visual-card')) {
        link.setAttribute('href', '#portfolio');
        return;
      }

      if (link.classList.contains('btn')) {
        link.setAttribute('href', '#portfolio');
        link.textContent = 'Explore Projects ->';
        return;
      }

      const parent = link.parentElement;
      if (parent?.classList.contains('footer-section')) {
        link.textContent = 'Project Portfolio';
        link.setAttribute('href', '#portfolio');
        return;
      }

      link.remove();
    });

    const dataHub = document.getElementById('data-hub');
    if (dataHub) {
      dataHub.remove();
    }

    document.getElementById('authModal')?.remove();
    document.getElementById('authActions')?.remove();
    document.getElementById('authUser')?.remove();

    document.querySelectorAll('.download-trigger').forEach(button => {
      button.remove();
    });
  }

  window.addEventListener('DOMContentLoaded', simplifyPortfolio);
  window.addEventListener('load', simplifyPortfolio);
  setTimeout(simplifyPortfolio, 0);
  setTimeout(simplifyPortfolio, 250);
  setTimeout(simplifyPortfolio, 1000);
})();
