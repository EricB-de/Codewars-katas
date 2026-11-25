interface Player { team: string; ppg: number; }
​
export const sumPPG = (playerOne: Player, playerTwo: Player): number => playerOne.ppg + playerTwo.ppg;