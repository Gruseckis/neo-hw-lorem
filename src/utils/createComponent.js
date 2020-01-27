export const createComponent = (type, innerText, classNames) => {
  const element = document.createElement(type);
  element.classList = classNames;
  element.innerText = innerText;
  return element;
};
