function render({ model, el }) {
  let btn = document.createElement("button");
  el.appendChild(btn);
  let msg = model.get("_msg");
  btn.innerHTML = `Message is: ${msg}`;
  btn.classList.add("hello-button");;

 // model.on("msg:custom", (msg) => {
 //   btn.innerHTML = `Message is: ${msg}`;
 // });



  model.on("change:_msg", () => {
    let msg = model.get("_msg");
    btn.innerHTML = `Message is: ${msg}`;
  });
}
export default { render };