/* eslint-disable */
(function() {
  var routes = [
    { pattern: /^\/acrobat\/online\/.*/, redirect: 'https://acrobat.adobe.com/home/index-browser-eol.html' },
    { pattern: /.*/, redirect: 'https://helpx.adobe.com/x-productkb/global/adobe-supported-browsers.html' }
  ];
  alert('fallback.js')

  window.getRedirectURL = function(currentPath) {
    var route = routes.find(r => r.pattern.test(currentPath));
    return route ? route.redirect : null;
  };

  window.redirectToURL = function(url) {
    window.location.href = url;
  };

  window.redirectToURL(window.getRedirectURL(window.location.pathname));

})();
/* eslint-enable */
