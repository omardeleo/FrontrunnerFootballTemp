import { fixtures } from "./fixtures_prem";
const getKeys = () => Object.keys(fixtures);
const firstKey = getKeys()[0];
const today = new Date(firstKey);
console.log(today);
