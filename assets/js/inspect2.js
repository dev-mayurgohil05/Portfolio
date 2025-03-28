// Block right-click (context menu)
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Block DevTools shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && ["I", "C", "J"].includes(event.key.toUpperCase())) || 
        (event.ctrlKey && event.key.toUpperCase() === "U")
    ) {
        event.preventDefault();
    }
});

// Detect DevTools opening and clear the page
setInterval(() => {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        document.body.innerHTML = ""; // Remove all content when DevTools opens
    }
}, 1000);