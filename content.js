// content.js
(function() {
  const css = `
   .geDialog {
	  width: 100% !important;
	  height: 100% !important;
	}
	.geDialog > div[style*="user-select"] {
      height: 80% !important;
    }
	/* только первый вложенный div */
	.geDialog > div[style*="user-select"] > div:first-child {
	  width: 100% !important;
	  height: 100% !important;
	  overflow: hidden !important;
	}

  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);

  // блокировка Esc для окна
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.querySelector('.geDialog')) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }, true);
})();
