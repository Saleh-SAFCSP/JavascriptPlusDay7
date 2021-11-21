/* API

what api stand for ?
Application programming interface 


web 1.0
web 2.0

*/

const main = async () => {
  const request = await fetch('https://cat-fact.herokuapp.com/facts');

  const data = await request.json();

  const listOfFacts = data.map((object) => {
    return `<p>${object.text}</p>`;
  });

  document.body.innerHTML = listOfFacts.join('');

  console.log(listOfFacts);
};

main();
