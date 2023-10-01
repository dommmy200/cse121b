// Trying out stuff copied from MSN site.
function displayMessage() {
    const body = document.body;

    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = "This is a message box";
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    const btn = document.querySelector("button");
    btn.addEventListener("click", displayMessage);

    closeBtn.addEventListener("click", () =>
    panel.parentNode.removeChild(panel),
    );

}

displayMessage();

  