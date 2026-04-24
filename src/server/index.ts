export interface Person {
  id: string;
  name: string;
  score: number;
}

export type PeopleList = { [key: string]: Person };

const data: PeopleList = {
  "f02709cf-8165-42c5-ba7a-ea1c118e2361": {
    id: "f02709cf-8165-42c5-ba7a-ea1c118e2361",
    name: "Walter White",
    score: 1,
  },
  "598bc83b-2760-4cb5-9fb4-818bc536471c": {
    id: "598bc83b-2760-4cb5-9fb4-818bc536471c",
    name: "Jim Halpert",
    score: 3,
  },
  "c6a96be6-3b65-430e-8476-c0de9bdeb081": {
    id: "c6a96be6-3b65-430e-8476-c0de9bdeb081",
    name: "John Nolan",
    score: 4,
  },
  "c55097e9-42ba-4a72-a7ca-b7e4f39b2f7c": {
    id: "c55097e9-42ba-4a72-a7ca-b7e4f39b2f7c",
    name: "Mike Ross",
    score: 8,
  },
}


export const getPeople = (): PeopleList => data