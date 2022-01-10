function createDom(domType, domId, domClass, domImgSource) {
  let dom = document.createElement(domType);
  if (domId) dom.setAttribute("id", domId);
  if (domClass) dom.classList.add(domClass);
  if (domImgSource) dom.setAttribute("src", getSource(domImgSource));
  return dom;
}

function getSource(e) {
    let source = require(`../assets/${e}`);
    console.log(source);
    return source
}

export { createDom };
