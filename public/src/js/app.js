var deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function () {
    console.log("Service Worker Registered");
  });
}
window.addEventListener("beforeinstallprompt", (e) => {
  console.log("beforeinstallprompt fired");
  e.preventDefault();
  deferredPrompt = e;
  return false;
});
