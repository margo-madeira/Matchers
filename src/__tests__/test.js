import { sortArray } from "../index.js";
import { showHealth } from "../index.js";

//import assert from 'node:assert';

test("sortArray of gamers", () => {
  const users = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expResult = sortArray(users);
  const receivedRes = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  //assert.deepEqual(expResult, receivedRes);
  //expect(deepEqual(expResult, receivedRes)).toBe(true);

  expect(expResult).toEqual(receivedRes);
});

test.each([
  ["мечник", 10, "critical"],
  ["маг", 100, "healthy"],
  ["лучник", 40, "wounded"],
])("show health of each gamers", (nameOfGamers, health, expected) => {
  const result = showHealth(health);
  expect(result).toBe(expected);
});
