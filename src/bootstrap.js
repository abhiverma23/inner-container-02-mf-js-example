import faker from 'faker';

const mount = (el) => {
  let names = '<br><br><hr /><br><br>';

  for (let i = 0; i < 5; i++) {
    const name = faker.name.findName();
    names += `<div>${name}</div>`;
  }

  el.innerHTML = names;
};

if (process.env.NODE_ENV === 'development') {
  console.log('inner-container-02 is in development mode');
  const el = document.querySelector('#inner-container-02');

  if (el) {
    mount(el);
  }
}

export { mount };
