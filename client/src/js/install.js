const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// this is to test the event before installing and its working.
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("hit");
  console.log("event" + event);
  event.preventDefault();
  // triggered events
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
// the prompt is shown, resets promt.
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
// clears out promt
window.addEventListener("appinstalled", (event) => {
  console.log("install hit");
  window.deferredPrompt = null;
});
