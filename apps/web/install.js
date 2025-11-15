let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const btnInstall = document.getElementById("btnInstall");
    btnInstall.style.display = "block";

    btnInstall.onclick = async () => {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
        btnInstall.style.display = "none";
    };
});
