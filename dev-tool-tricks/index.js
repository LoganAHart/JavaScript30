const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'PLACEHOLDER');

// Styled
console.log('%c so stylish, fancy text', 'font-size: 18px; background: blue; text-shadow: 1px 1px 0 purple;');

// warning!
console.warn('OH NOOOO, at least it\'s not an error!!!');

// Error :|
console.error('catastrophe! it\'s an ERROR!!!')

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(1 + 1 === 2, '1 + 1 must equal 2!');
console.assert(1 + 1 === NaN, 'why, what\'s the point?!?');

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// Group Collapsed
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Count');
console.count('Count');
console.count('Count');
console.count('Count');
console.count('Count');
console.count('Count');
console.count('Count');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/LoganAHart')
  .then(data => data.json())
  .then(data => {
    console.log(data);
    console.timeEnd('fetching data');
  });

//table
async function fetchUsers() {
  const githubData = [];
  const logan = await fetch('https://api.github.com/users/LoganAHart')
    .then(data => data.json())
    .then(data => {
      githubData.push(data);
    });
  const wes = await fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      githubData.push(data);
    });
  console.table(githubData);
}
fetchUsers();
