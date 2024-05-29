import { useState } from "react"

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false );
    const [playerName, setPlayerName] = useState(name)

    const clickEditOrSaveButton = () => {

        setIsEditing(editing  => !editing);
    }

    const changePlayerName = (event) => {

        setPlayerName(event.target.value);
    }

return (

    <li>
            <span className="player">

              {isEditing?<input type="text" value={playerName} onChange={changePlayerName}></input>:<span cl assName="player-name">{playerName}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickEditOrSaveButton}>{isEditing?<span>Save</span>:<span>Edit</span>}</button>
            

          </li>
)

}