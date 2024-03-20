/**
 * Player interface represents a player in the game.
 * It includes the player's name, profession, clearance level, and physical, mental, and social attributes.
 */
interface Player {
    name: string; // The name of the player
    profession: string; // The profession of the player
    clearance: string; // The clearance level of the player
    physical: string[]; // The physical attributes of the player
    mental: string[]; // The mental attributes of the player
    social: string[]; // The social attributes of the player
    id: number;
}

// Export the Player interface as the default export
export default Player;