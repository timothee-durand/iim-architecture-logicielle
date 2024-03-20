import { atom } from 'jotai';

export const characterInfos =atom(
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