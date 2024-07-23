import { useMemo, useState } from "react";

import "./CypherWidget.css"
import encryptMessage from "./utils/encryptMessage"
import { cypherDirectionType } from "./constants";

export const CypherWidget = () => {
  const [cypherMessage, setCypherMessage] = useState<string>("")
  const [cypherDirection, setCypherDirection] = useState<cypherDirectionType>("+");
  const [cypherSteps, setCypherSteps] = useState<number>(0)

  const encryptedCypher = useMemo(() => {
    return encryptMessage({cypherMessage, cypherDirection, cypherSteps});
  }, [cypherMessage, cypherDirection, cypherSteps])

  return (
    <div className="widgetSection">
      <div className="widgetContainer">
        <input
          className="messageInput"
          onChange={(e) => setCypherMessage(e.target.value)}
          type="text"
          placeholder={"Enter message to encrypt"}
          />
        <div className="cypherStepsContainer">
          <button
            onClick={() => setCypherDirection("+")}
            type="button"
          >
            +
          </button>
          <button onClick={() => setCypherDirection("–")} type="button">–</button>
          <input
            onChange={(e) => setCypherSteps(parseInt(e.target.value))}
            type="number"
            placeholder="Enter number of steps"
            />
        </div>
        <div className="encryptedMessage">{encryptedCypher}</div>
      </div>
    </div>
  )
};
