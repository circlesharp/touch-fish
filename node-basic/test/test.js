let killItself = () => {
  console.log('start to kill itself...');
  killItself = null;
};
killItself();
console.log(`After killing, the killItself is: ${killItself}.`);
