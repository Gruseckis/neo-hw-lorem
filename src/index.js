const component = text => {
  console.log(text);
  const element = document.createElement('div');
  element.innerHTML = `<h1> ${text} </h1>`;
  return element;
};

document.body.appendChild(component('Hello world'));
