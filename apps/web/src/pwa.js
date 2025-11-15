let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById("btnInstall");
  btn.style.display = "block";

  btn.addEventListener("click", async () => {
    btn.style.display = "none";
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log(result.outcome);
    deferredPrompt = null;
  });
});
