import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Mis on sinu nimi?',
    },
    {
      type: 'number',
      name: 'age',
      message: 'Kui vana sa oled?',
    },
    {
      type: 'confirm',
      name: 'confirmation',
      message: 'Kas oled rahul oma vastusega?',
    },
    {
      type: 'list',
      name: 'profession',
      message: 'Vali oma elukutse:',
      choices: ['Arendaja', 'Disainer', 'Õpetaja', 'Teine'],
    },
    {
      type: 'rawlist',
      name: 'favoriteColor',
      message: 'Mis on sinu lemmikvärv?',
      choices: ['Punane', 'Sinine', 'Roheline', 'Kollane'],
    },
    {
      type: 'expand',
      name: 'hobby',
      message: 'Vali oma lemmikhobi:',
      choices: [
        { key: 'p', name: 'Programmeerimine', value: 'programmeerimine' },
        { key: 'm', name: 'Muusika', value: 'muusika' },
        { key: 's', name: 'Sport', value: 'sport' },
      ],
    },
    {
      type: 'checkbox',
      name: 'skills',
      message: 'Milliseid oskusi sul on?',
      choices: ['JavaScript', 'CSS', 'HTML', 'React', 'Node.js'],
    },
    {
      type: 'password',
      name: 'password',
      message: 'Sisesta oma parool:',
      mask: '*',
    },
    {
      type: 'editor',
      name: 'bio',
      message: 'Kirjelda ennast:',
    },
  ])
  .then((answers) => {
    console.log('\nSinu vastused:');
    console.log(answers);
  })
  .catch((error) => {
    console.error('Küsimuste esitamisel ilmnes viga:', error);
  });

