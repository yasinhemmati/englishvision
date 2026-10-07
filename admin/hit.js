/* بیکن اختیاری آمار بازدید — برای فعال‌سازی، این فایل را قبل از </body> صفحه‌ها include کن:
   <script defer src="admin/hit.js"></script>   (در صفحات داخل پوشه‌ها: ../admin/hit.js) */
(function () {
  try {
    var u = new URL('hit.php', document.currentScript.src).href;
    if (navigator.sendBeacon) navigator.sendBeacon(u);
    else fetch(u, { method: 'POST', keepalive: true }).catch(function () {});
  } catch (e) {}
})();
