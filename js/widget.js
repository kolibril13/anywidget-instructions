import "./widget.css";

function render({ model, el }) {
  let btn = document.createElement("button");
  btn.classList.add("anywidget_instructions-counter-button");
  el.appendChild(btn);

  
  model.on("msg:custom", (msg) => {
    btn.innerHTML = `Message is ${msg}`;
  });
}

export default { render };
