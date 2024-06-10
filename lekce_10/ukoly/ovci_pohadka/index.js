const ovciJmena = [
    'Bětuška',
    'Cína',
    'Dolly',
    'Heidy',
    'Líza',
    'Belinda',
    'Celia',
    'Elvíra',
    'Karla',
    'Otýlie',
    'Škraboška',
    'Kopretinka',
    'Berta',
    'Růženka',
    'Bobinka',
    'Žofka',
    'Dášenka',
    'Vlnka',
    'Květuše',
    'Pampeliška',
  ];

  ovciJmena.forEach((jmeno, index) => {
    document.body.innerHTML += `<p> Ovecka ${jmeno} jako ${index+1}. preskocila plot.</p>`
  })

