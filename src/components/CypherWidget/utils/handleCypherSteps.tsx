import { alphabet, cypherDirectionType } from "../constants";

const handleCypherSteps = ({
  cypherSteps,
  originalIndex,
  cypherDirection,
}:
  {
    cypherSteps: number,
    originalIndex: number,
    cypherDirection: cypherDirectionType
  }) => {
  let cypherStepCount = cypherSteps;

  let index = originalIndex;
  if (cypherSteps === 0) return originalIndex;
  while (cypherStepCount > 0) {
    cypherDirection === "+" ? index++ : index--;
    if (index >= alphabet.length) index = 0
    if (index < 0) index = alphabet.length - 1

    cypherStepCount--;
  }

  return index;
};

export default handleCypherSteps;