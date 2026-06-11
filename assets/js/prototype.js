(function () {
  const ONBOARDING = ['start', 'signin', 'profile', 'personal-intro', 'personal-q1'];
  const MAIN = ['dashboard', 'search', 'matches', 'create', 'groups', 'messages', 'chat', 'calendar', 'profile'];

  const NAV_MAP = {
    groups: 'groups',
    calendar: 'calendar',
    dashboard: 'dashboard',
    messages: 'messages',
    profile: 'profile'
  };

  let current = 'start';
  let selectedMatches = new Set();
  let chatWith = '';

  const app = document.getElementById('studyhub-app');
  const toast = document.getElementById('sh-toast');
  const bottomNav = document.getElementById('sh-bottom-nav');
  const screenLabel = document.getElementById('current-screen-label');

  if (!app) return;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2200);
  }

  function updateNav(screen) {
    const showNav = MAIN.indexOf(screen) !== -1 && screen !== 'chat';
    bottomNav.classList.toggle('is-visible', showNav);

    bottomNav.querySelectorAll('[data-nav-item]').forEach(function (btn) {
      const target = btn.getAttribute('data-nav-item');
      const active =
        (target === 'dashboard' && screen === 'dashboard') ||
        (target === 'groups' && screen === 'groups') ||
        (target === 'calendar' && screen === 'calendar') ||
        (target === 'messages' && (screen === 'messages' || screen === 'chat')) ||
        (target === 'profile' && screen === 'profile');
      btn.classList.toggle('is-active', active);
    });
  }

  function updateLabel(screen) {
    if (!screenLabel) return;
    const labels = {
      start: 'Start',
      signin: 'UW Sign in',
      profile: 'Profile Set-Up',
      'personal-intro': 'Personalization',
      'personal-q1': 'Personalization Q1',
      dashboard: 'Dashboard',
      search: 'Search',
      matches: 'Matches',
      create: 'Create Group',
      groups: 'Active Groups',
      messages: 'Messages',
      chat: 'Chat',
      calendar: 'Calendar'
    };
    screenLabel.textContent = labels[screen] || screen;
  }

  function go(screen, options) {
    options = options || {};
    if (screen === 'chat' && options.name) {
      chatWith = options.name;
      const title = document.getElementById('chat-title');
      const avatar = document.getElementById('chat-avatar');
      if (title) title.textContent = chatWith;
      if (avatar) {
        const parts = chatWith.split(' ');
        avatar.textContent = parts.length > 1
          ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
          : chatWith.slice(0, 2).toUpperCase();
      }
    }

    const prev = app.querySelector('.app-screen.is-active');
    const next = app.querySelector('[data-screen="' + screen + '"]');
    if (!next) return;

    if (prev) prev.classList.remove('is-active');
    next.classList.add('is-active');
    next.scrollTop = 0;
    current = screen;

    updateNav(screen);
    updateLabel(screen);

    if (options.toast) showToast(options.toast);
  }

  app.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-go]');
    if (!btn) return;
    e.preventDefault();

    const target = btn.getAttribute('data-go');
    const toastMsg = btn.getAttribute('data-toast');
    const chatName = btn.getAttribute('data-chat');

    if (target === 'connect') {
      if (selectedMatches.size < 2) {
        showToast('Select at least 2 people to connect');
        return;
      }
      showToast('Group request sent!');
      setTimeout(function () {
        go('groups');
      }, 1200);
      return;
    }

    if (target === 'create-group') {
      showToast('Group created!');
      setTimeout(function () {
        go('groups');
      }, 1200);
      return;
    }

    go(target, { toast: toastMsg, name: chatName });
  });

  bottomNav.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-nav-go]');
    if (!btn) return;
    go(btn.getAttribute('data-nav-go'));
  });

  document.getElementById('restart-btn')?.addEventListener('click', function () {
    selectedMatches.clear();
    app.querySelectorAll('.sh-match-card.is-selected').forEach(function (c) {
      c.classList.remove('is-selected');
    });
    const connectBtn = document.getElementById('connect-btn');
    if (connectBtn) connectBtn.disabled = true;
    go('start');
  });

  app.querySelectorAll('.sh-match-card').forEach(function (card) {
    card.addEventListener('click', function () {
      const id = card.getAttribute('data-match');
      if (selectedMatches.has(id)) {
        selectedMatches.delete(id);
        card.classList.remove('is-selected');
      } else {
        selectedMatches.add(id);
        card.classList.add('is-selected');
      }
      const connectBtn = document.getElementById('connect-btn');
      if (connectBtn) connectBtn.disabled = selectedMatches.size < 2;
    });
  });

  app.querySelectorAll('.sh-checkbox-item').forEach(function (item) {
    item.addEventListener('click', function () {
      const input = item.querySelector('input');
      if (input) {
        input.checked = !input.checked;
        item.classList.toggle('is-checked', input.checked);
      }
    });
  });

  app.querySelectorAll('.sh-availability-grid .sh-slot').forEach(function (slot) {
    slot.addEventListener('click', function () {
      slot.classList.toggle('is-selected');
    });
  });

  const visibilityToggle = document.getElementById('visibility-toggle');
  if (visibilityToggle) {
    visibilityToggle.addEventListener('click', function () {
      visibilityToggle.classList.toggle('is-on');
    });
  }

  app.querySelectorAll('.sh-filter-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      app.querySelectorAll('.sh-filter-chip').forEach(function (c) {
        c.style.background = '';
      });
      chip.style.background = 'var(--sh-purple-light)';
      showToast(chip.textContent.trim() + ' filter applied');
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const q = searchInput.value.toLowerCase();
      app.querySelectorAll('[data-searchable]').forEach(function (row) {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  go('start');
})();
