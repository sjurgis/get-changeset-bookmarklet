__sfdcSessionId = new RegExp("sid=([^;]+)").exec(document.cookie)[1];

function callback() {
  document.body.appendChild(document.createElement('script')).src = 'https://sjurgis.github.io/get-changeset-bookmarklet/salesforce-metadata.js';
}

var e = document.createElement('script');
e.type = 'text/javascript';
e.src = '/soap/ajax/39.0/connection.js';
if (callback) {
  e.onloadDone = false;
  e.onload = function() {
    e.onloadDone = true;
    callback();
  };
  e.onReadystatechange = function() {
    if (e.readyState === 'loaded' && !e.onloadDone) {
      e.onloadDone = true;
      callback();
    }
  }
}
document.body.appendChild(e);