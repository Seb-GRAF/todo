import { createDom } from "./dom";

function createHeader() {
  let leftStatus = true;
  content.appendChild(createDom("header", "header"));

  header.appendChild(createDom("div", "headerLeft"));
  headerLeft.appendChild(createDom("button", "menuBtn"));
  menuBtn.textContent = "☰";
  menuBtn.addEventListener("click", () => {
    toggleLeft();
  });

  header.appendChild(createDom("div", "headerRight"));

  function toggleLeft() {
    if (leftStatus === true) {
      //   left.setAttribute("id", "leftHidden");
      left.style.transform = "translateX(-150px)";
      left.style.width = "0";
      left.style.padding = "2em 0";
      leftStatus = false;
    } else {
        // leftHidden.setAttribute("id", "left");
        left.style.transform = "none";
        left.style.width = "200px";
        left.style.padding = "2em";

      leftStatus = true;
    }
  }
}

export default createHeader;
