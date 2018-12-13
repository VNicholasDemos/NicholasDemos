/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  // makeSelectRepos,
  // makeSelectLoading,
  // makeSelectError,
  makeSelectGameFile,
  makeSelectGameInventory,
  makeSelectGameState,
} from './selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

function findMatchingValueInArray(name, value, ArrayOfVariables) {
  let localCheck = false;
  for (let i = 0; i < ArrayOfVariables.length; i++) {
    if (
      ArrayOfVariables[i].Name === name &&
      localCheck === false &&
      ArrayOfVariables[i].Value === value
    ) {
      localCheck = true;
    }
  }
  return localCheck;
}

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  /* componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  } */

  render() {
    const { GameState, GameInventory, GameFile } = this.props;

    const yourInventory = [];
    // Process inventory into text
    GameInventory.Items.forEach(item => {
      if (findMatchingValueInArray(item.GameVariable, true, GameState.VariableStates)) {
        yourInventory.push(<div><p>{item.Description}</p></div>);
      }
    });

    const returnObject = [];

    let actionToProcess = null;
    // Find Action by current state
    GameFile.Actions.forEach(action => {
      if (action.ID === GameState.CurrentActionId) {
        actionToProcess = action;
      }
    });

    // Process selected action for the current state
    let actionStateToProcess = null;
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
              actionStateToProcess = actionState;
            }
          }
        });
      } else {
        actionStateToProcess = actionToProcess.ActionStates[0];
      }
    }

    // Process current state for response text and links
    let internalReturnObject = <div>Error</div>;
    if (actionStateToProcess !== null) {
      console.log(actionStateToProcess);
      // Regex to extract all of the JSON parameters- then we convert them back to JSON, and compare them against game state.
      const internalTextParameters = actionStateToProcess.ResponseText.match(/(\{.*?\})/g);
      let finalText = actionStateToProcess.ResponseText.replace(/(\{.*?\})/g,'');
      if (internalTextParameters !== null){
        internalTextParameters.forEach(parameter => {
          const jsonifiedParameter = JSON.parse(parameter);
          for (let i = 0; i < GameState.VariableStates.length; i++) {
            if (
              GameState.VariableStates[i].Name === jsonifiedParameter.Name &&
              GameState.VariableStates[i].Value === true
            ) {
              finalText += jsonifiedParameter.Value;
            }
          }
        });
      }

      // Compose a link window consisting of each ActionLink whose contingentOn conditions meet current state values
      const finalActions = [];
      actionStateToProcess.ActionLinks.forEach(actionLink => {
        let linkContingencyCheck = true;
        if (actionLink.ContigentOn.length > 0) {
          // check the contingentOn conditions for each one
          actionLink.ContigentOn.forEach(contingency => {
            if (linkContingencyCheck && !findMatchingValueInArray(contingency.Name, contingency.Value, GameState.VariableStates)) {
              linkContingencyCheck = false;
            }
          });
        }
        // Return the first that meets current state values.
        if (linkContingencyCheck) {
          // Regex to extract all of the JSON parameters- then we convert them back to JSON, and compare them against game state.
          const linkInternalTextParameters = actionLink.LinkDesc.match(/(\{.*?\})/g);
          let linkFinalText = actionLink.LinkDesc.replace(/(\{.*?\})/g,'');
          if (linkInternalTextParameters !== null) {
            linkInternalTextParameters.forEach(parameter => {
              const jsonifiedParameter = JSON.parse(parameter);
              if(findMatchingValueInArray(contingency.Name, true, GameState.VariableStates)){
                linkFinalText += jsonifiedParameter.Value;
              }
            });
          }
          finalActions.push(<div><p>{linkFinalText}</p></div>);
        }
      });

      // Compose a main window consisting of ResponseText and ActionLinks
      internalReturnObject = (
        <div key="1">
          <p>{finalText}</p>
          <div><b>Your Inventory:</b></div>
          {yourInventory}
          <div><b>Possible Actions:</b></div>
          {finalActions}
        </div>
      );
      returnObject.push(internalReturnObject);
    }
    return returnObject;
  }
}

HomePage.propTypes = {
  GameState: PropTypes.object,
  GameFile: PropTypes.object,
  GameInventory: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  GameState: makeSelectGameState(),
  GameFile: makeSelectGameFile(),
  GameInventory: makeSelectGameInventory(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
