/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect, useState } from 'react'; //eslint-disable-line
import PropTypes from 'prop-types';
import {GameImage, textInsetStyle, containerStyle, actionStyle, innerContainerStyle, textStyle} from './Textgame.elements';
import findMatchingValueInArray from '../../utils/helpers/findMatchingValueInArray'
import H1 from '../H1';


const TextGame = ({GameInventory, GameFile, GameState, changeGameState, GameMusicId, getmusic }) => {

  const [finalActions, setFinalActions] = useState([]);
  const [finalText, setFinalText] = useState([]);
  const [yourInventory, setYourInventory] = useState(<ul>Nothing</ul>);
  const [actionStateToProcess, setActionStateToProcess] = useState(null);

  // Process inventory into text
  useEffect(() => {
    const invText = [];
    GameInventory.Items.forEach(item => {
      if (findMatchingValueInArray(item.GameVariable, true, GameState.VariableStates)) {
        invText.push(<li>{item.Description}</li>);
      }
    });
    setYourInventory(<ul>{invText}</ul>);
  }, [GameInventory, GameState]);

  // Process GameState to get current state- this defines background, music, text, options etc.
  useEffect(() => {
    let actionToProcess = null;
    // Find Action by current state
    GameFile.Actions.forEach(action => {
      if (action.ID === GameState.CurrentActionId) {
        actionToProcess = action;
      }
    });
    // Process selected action for the current state
    if (actionToProcess !== null) {
      if (actionToProcess.ActionStates.length > 1) {
        // if there are multiple ActionStates
        actionToProcess.ActionStates.forEach(actionState => {
          let contingencyCheck = true;
          if (actionState.ContigentOn.length > 0) {
            // check the contingentOn conditions for each one
            actionState.ContigentOn.forEach(contingency => {
              if (contingencyCheck && !findMatchingValueInArray(contingency.Name, contingency.Value, GameState.VariableStates)) {
                contingencyCheck = false;
              }
            });
            // Return the first that meets current state values.
            if (contingencyCheck) {
              setActionStateToProcess(actionState);
            }
          }
        });
      } else {
        setActionStateToProcess(actionToProcess.ActionStates[0]);
      }
    }
  }, [GameFile, GameState]);

  // Based on your current state, process link options for next states
  useEffect(()=>{
    if (actionStateToProcess !== null) {
      // Regex to extract all of the JSON parameters- then we convert them back to JSON, and compare them against game state.
      const internalTextParameters = actionStateToProcess.ResponseText.match(/(\{.*?\})/g);
      setFinalText(actionStateToProcess.ResponseText.replace(/(\{.*?\})/g,''));
      if (internalTextParameters !== null){
        internalTextParameters.forEach(parameter => {
          const jsonifiedParameter = JSON.parse(parameter);
          for (let i = 0; i < GameState.VariableStates.length; i++) {
            if (
              GameState.VariableStates[i].Name === jsonifiedParameter.Name &&
                        GameState.VariableStates[i].Value === true
            ) {
              const newFinalText = finalText + jsonifiedParameter.Value;
              setFinalText(newFinalText);
            }
          }
        });
      }

      // Compose a link window consisting of each ActionLink whose contingentOn conditions meet current state values
      const actionArray = [];
      actionStateToProcess.ActionLinks.forEach(actionLink => {
        let linkContingencyCheck = true;
        if (actionLink.ContigentOn !== undefined) {
          if (actionLink.ContigentOn.length > 0) {
            // check the contingentOn conditions for each one
            actionLink.ContigentOn.forEach(contingency => {
              if (linkContingencyCheck && !findMatchingValueInArray(contingency.Name, contingency.Value, GameState.VariableStates)) {
                linkContingencyCheck = false;
              }
            });
          }
        }
        // Return the first that meets current state values.
        if (linkContingencyCheck) {
          // Regex to extract all of the JSON parameters- then we convert them back to JSON, and compare them against game state.
          const linkInternalTextParameters = actionLink.LinkDesc.match(/(\{.*?\})/g);
          let linkFinalText = actionLink.LinkDesc.replace(/(\{.*?\})/g,'');
          if (linkInternalTextParameters !== null) {
            linkInternalTextParameters.forEach(parameter => {
              const jsonifiedParameter = JSON.parse(parameter);
              if(findMatchingValueInArray(jsonifiedParameter.Name, true, GameState.VariableStates)){
                linkFinalText += jsonifiedParameter.Value;
              }
            });
          }
          actionArray.push(<div><p><button type="button" onClick={() => changeGameState(actionLink)}>{linkFinalText}</button></p></div>);
        }
      });
      setFinalActions(actionArray);


    }
  }, [actionStateToProcess, GameState]);

  // Based on your current state, process music and pass it back up the chain if it needs to be altered
  useEffect(()=>{
    if (actionStateToProcess !== null) {
      if(GameMusicId !== actionStateToProcess.MusicYTID){
        const audios = document.getElementsByTagName('audio');
        for(let i = 0, len = audios.length; i < len;i++){
          audios[i].pause();
        }
        getmusic(actionStateToProcess.MusicYTID);
      }
    }
  }, [GameMusicId, actionStateToProcess]);

  return (
    <>
        <div>
          <div css={containerStyle}>
            <div><H1>A Christmas Witch</H1></div>
            <div css={innerContainerStyle}>
              <GameImage actionStateToProcess={actionStateToProcess}/>
              <div css={textInsetStyle}><p css={textStyle} dangerouslySetInnerHTML={{__html: finalText}}/></div>
            </div>
            <div css={actionStyle}>
              <div><b>Actions:</b></div>
              {finalActions}
              <div><b>Your Inventory:</b></div>
              {yourInventory}
              <p/>
            </div>
          </div>
          <div><b>Game Settings:</b></div>
        </div>
    </>
  );
}

TextGame.propTypes = {
  GameState: PropTypes.object,
  GameFile: PropTypes.object,
  GameInventory: PropTypes.object,
  GameMusicId: PropTypes.string,
  ChangedAudio: PropTypes.bool,
  getmusic: PropTypes.func,
};
  
export default TextGame;