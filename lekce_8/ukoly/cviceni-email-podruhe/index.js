const formalGoodbye = (name) => {
  return "S uctivou poklonou " + name
}

const rudeGoodbye = (name) => {
  return "Cago belo silenci " + name
}

const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name);
};

// //uctivy email
fillSubject('Obchodní sdělení');
fillBody(
  'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
  'Jan Čistý',
  formalGoodbye
);

// //neformailni mail
// fillSubject('Pozvánka na oslavu narozenin');
// fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodbye);