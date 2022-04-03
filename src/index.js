import faker from 'faker';

let names = '<br><br><hr /><br><br>';

for (let i = 0; i < 5; i++) {
  const name = faker.name.findName();
  names += `<div>${name}</div>`;
}

document.querySelector('#inner-container-02').innerHTML = names;
