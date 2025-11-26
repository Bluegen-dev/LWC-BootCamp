const game = {
  team1: "India",
  team2: "Australia",
  players: [
    [
      "Dhoni",
      "Sharma",
      "Kohli",
      "Rahul",
      "Jadeja",
      "Pandey",
      "Ashwin",
      "Chahal",
      "Khan",
      "Bhumra",
      "Shami",
    ],
    [
      "Wade",
      "Cummins",
      "Green",
      "Maxwell",
      "Finch",
      "Hazelwood",
      "Marsh",
      "Stoinis",
      "Richardson",
      "Starc",
      "Warner",
    ],
  ],
  Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let [players1, players2] = game.players;

console.log(players1);
console.log(players2);

let [wicketKeeper, ...batsmen] = players1;

console.log(wicketKeeper);
console.log(batsmen);

let allplayers = [...players1, ...players2];
console.log(allplayers);

let players1Final = [...players1 , 'Surya', 'Rahul', 'Rohit'];
console.log(players1Final);

let {team1, x:draw, team2} = game.odds;
console.log(team1, draw, team2);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

for(let [index,player] of game.Century.entries()) {
  console.log(`Century ${index + 1}: ${player}`);
}

let total = 0;
let count = 0;
for(let currentiteam of Object.values(game.odds)) {
  total += currentiteam;
  count++;
  console.log(`Odds: ${currentiteam}`);
}

console.log(`Average Odds: ${Math.floor(total / count)}`);