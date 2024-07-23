import { alphabet, cypherDirectionType } from "../constants";
import handleCypherSteps from "./handleCypherSteps";

const encryptMessage = (
  { cypherMessage, cypherSteps, cypherDirection }:
  {
    cypherMessage: string,
    cypherSteps: number;
    cypherDirection: cypherDirectionType;
}) => {
  const message = cypherMessage?.split("");
  
  const cypher = message?.map((letter: string) => {
    const originalIndex = alphabet.indexOf(letter);

    if (originalIndex === -1) return ""

    return alphabet[handleCypherSteps({cypherSteps, originalIndex, cypherDirection})]
  }).join("");
  
  return cypher;
}

export default encryptMessage;