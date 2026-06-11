(function () {
  const FIGMA_FILE_KEY = 'SuBMyD73Ybk0Q3d4NFE3DP';
  const START_NODE = '1-2';

  const protoUrl =
    'https://www.figma.com/proto/' +
    FIGMA_FILE_KEY +
    '/StudyAI?node-id=' +
    START_NODE +
    '&starting-point-node-id=' +
    START_NODE +
    '&scaling=scale-down-width&content-scaling=fixed&hide-ui=1';

  const embedUrl =
    'https://www.figma.com/embed?embed_host=share&url=' +
    encodeURIComponent(protoUrl);

  const iframe = document.getElementById('figma-prototype');
  const restartBtn = document.getElementById('restart-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const phoneFrame = document.getElementById('phone-frame');

  if (iframe) {
    iframe.src = embedUrl;
  }

  if (restartBtn && iframe) {
    restartBtn.addEventListener('click', function () {
      iframe.src = embedUrl;
    });
  }

  if (fullscreenBtn && phoneFrame) {
    fullscreenBtn.addEventListener('click', function () {
      if (phoneFrame.requestFullscreen) {
        phoneFrame.requestFullscreen();
      } else if (phoneFrame.webkitRequestFullscreen) {
        phoneFrame.webkitRequestFullscreen();
      }
    });
  }
})();
