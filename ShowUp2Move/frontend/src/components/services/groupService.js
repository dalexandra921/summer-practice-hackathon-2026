export const generateGroups = (users) => {

  const sportsGroups = {

    Football: [],
    Basketball: [],
    Tennis: []

  };

  users.forEach(user => {

    if(user.available){

      if(sportsGroups[user.sport]){

        sportsGroups[user.sport].push(user);

      }

    }

  });

  return Object.entries(sportsGroups)

    .map(([sport, players]) => {

      if(players.length === 0){
        return null;
      }
      const captain =
        players[
          Math.floor(
            Math.random() * players.length
          )
        ];

      return {
        sport,
        players,
        captain,
        maxPlayers:
          sport === "Football"
            ? 14
            : sport === "Basketball"
            ? 10
            : 4
      };

    })

    .filter(Boolean);

};