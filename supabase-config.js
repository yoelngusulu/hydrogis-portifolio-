window.HYDROGIS_SUPABASE_CONFIG = {
  url: 'https://aqsfocscnkxenqzjytdo.supabase.co',
  anonKey: 'sb_publishable_Gq3sdDxRZtYVS4yB3jBKJg_3w7Jpsbk'
};

window.HYDROGIS_DATA_FOLDER_URL = 'https://drive.google.com/drive/folders/1HospYrsK7eNybsFkqU32U6NAjeblpTM1?usp=drive_link';

(() => {
  function replaceText(node, replacements) {
    if (!node) return;
    replacements.forEach(([from, to]) => {
      node.textContent = node.textContent.replace(from, to);
    });
  }

  function applyRequestAccessCopy() {
    document.querySelectorAll('.download-trigger').forEach(button => {
      button.textContent = 'Request Access';
    });

    const heroButton = document.querySelector('a.btn.primary[href="#data-hub"]');
    if (heroButton) {
      heroButton.textContent = 'Request GIS Data Access ->';
    }

    const dataHubIntro = document.querySelector('#data-hub .muted');
    replaceText(dataHubIntro, [
      ['Download optimized, cleaned GIS datasets ready for mapping tasks and water resource research workflows across Tanzania.', 'Browse GIS datasets for mapping tasks and water resource research workflows across Tanzania.'],
      ['Free account registration is required before downloads open.', 'Login or register to request access.']
    ]);

    const authHelper = document.getElementById('authHelper');
    replaceText(authHelper, [
      ['Login or create a free account to download GIS datasets.', 'Login or create a free account to request GIS data access.']
    ]);

    const downloadStatus = document.getElementById('downloadStatus');
    if (downloadStatus) {
      replaceText(downloadStatus, [
        ['Data downloads are ready for protected links when connected.', 'You can now request Data Hub access.'],
        ['Add the protected file URL later through the download map in this page script.', 'Your data folder will open after access is confirmed.']
      ]);
    }

    const authMessage = document.getElementById('authMessage');
    if (authMessage) {
      replaceText(authMessage, [
        ['Downloads are now available when protected links are connected.', 'You can now request Data Hub access.']
      ]);
    }
  }

  function openRequestLogin(fileName) {
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authTitle');
    const helper = document.getElementById('authHelper');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const submit = document.getElementById('authSubmit');
    const emailInput = document.getElementById('authEmailInput');

    if (!modal) return;
    if (title) title.textContent = 'Login to Data Hub';
    if (helper) helper.textContent = `Login or register to request access to ${fileName}.`;
    if (loginTab) loginTab.classList.add('active');
    if (registerTab) registerTab.classList.remove('active');
    if (submit) submit.textContent = 'Login';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => emailInput?.focus(), 50);
  }

  async function getSessionUser() {
    const config = window.HYDROGIS_SUPABASE_CONFIG || {};
    if (!window.supabase || !config.url || !config.anonKey) return null;
    const client = window.supabase.createClient(config.url, config.anonKey);
    const { data } = await client.auth.getSession();
    return data.session?.user || null;
  }

  document.addEventListener('click', async event => {
    const button = event.target.closest?.('.download-trigger');
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const fileName = button.getAttribute('data-file') || 'Selected dataset';
    const user = await getSessionUser();
    if (!user) {
      openRequestLogin(fileName);
      return;
    }

    const downloadStatus = document.getElementById('downloadStatus');
    if (downloadStatus) {
      downloadStatus.textContent = `${fileName} access confirmed for ${user.email}. Opening the Data Hub folder now.`;
      downloadStatus.className = 'download-status success';
    }

    window.open(window.HYDROGIS_DATA_FOLDER_URL, '_blank', 'noopener');
  }, true);

  window.addEventListener('load', applyRequestAccessCopy);
  window.addEventListener('DOMContentLoaded', applyRequestAccessCopy);
  setTimeout(applyRequestAccessCopy, 0);
  setTimeout(applyRequestAccessCopy, 500);

  const observer = new MutationObserver(applyRequestAccessCopy);
  window.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  });
})();
