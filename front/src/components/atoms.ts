import { atom } from 'jotai';

/**
 * `characterInfos` is an atom from the jotai state management library.
 * It represents the state of a character in the game.
 * The state includes adjectives describing the character's physical, mental, and social attributes,
 * as well as information about the character's name, profession, clearance level, and skills.
 *
 * @type {atom}
 * @property {Object} adjectives - The adjectives describing the character.
 * @property {Array} adjectives.PHYSICAL - The physical attributes of the character.
 * @property {Array} adjectives.MENTAL - The mental attributes of the character.
 * @property {Array} adjectives.SOCIAL - The social attributes of the character.
 * @property {Object} infos - The information about the character.
 * @property {string} infos.name - The name of the character.
 * @property {string} infos.profession - The profession of the character.
 * @property {string} infos.clearance - The clearance level of the character.
 * @property {Array} infos.skills - The skills of the character.
 */
export const characterInfos = atom(
    {
        adjectives: {
            PHYSICAL: [],
            MENTAL: [],
            SOCIAL: []
        },
        infos: {
            name: "",
            profession: "",
            clearance: "",
            skills: [],
        }

    }
)