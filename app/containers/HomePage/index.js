/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  // makeSelectRepos,
  // makeSelectLoading,
  // makeSelectError,
  makeSelectGameFile,
  makeSelectGameInventory,
  makeSelectGameState,
  makeSelectGameMusic,
  makeSelectGameMusicId,
  makeSelectGameChangedAudio,
} from './selectors';
import PrimaryAppBar from '../../components/AppBar/Primary';
import ViewContainer from '../../components/Layout/ViewContainer';
import ScrollView from '../../components/Layout/ScrollView';
import LayoutBody from '../../components/Layout/LayoutBody';
import { toggleDrawer } from '../LeftDrawer/actions';
import { loadRepos } from '../App/actions';
import { changeUsername, getMusic, changeGameState, setaudioChanged } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import findMatchingValueInArray from '../../utils/helpers/findMatchingValueInArray'
import AudioPlayer from '../../components/AudioPlayer';
import H1 from '../../components/H1';



const styles = () => ({
  body: {
    maxWidth: 700,
    textAlign: 'left',
    margin: 'auto',
    width: '70%',
    padding: 10,
    marginRight: '40%',
  },
  container: {
    maxHeight: 335,
    overflow: 'hidden',
    border: '2px darkgrey',
    borderStyle: 'dotted',
    borderRadius: '5px',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  static propTypes = {
    getmusic: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    changeGameState: PropTypes.func.isRequired,
    setaudioChanged: PropTypes.func.isRequired,
    classes: PropTypes.object,
  };
  /**
   * when initial state username is not null, submit the form to load repos
   */

  /* componentWillMount() {
  } */

  render() {
    const { GameState, GameInventory, GameFile, GameMusicId, classes } = this.props;

    let yourInventory = '';
    // Process inventory into text
    const invText = [];
    GameInventory.Items.forEach(item => {
      if (findMatchingValueInArray(item.GameVariable, true, GameState.VariableStates)) {
        // if(!firstItem){
        //   invText += ', ';
        // }
        invText.push(<li>{item.Description}</li>);
      }
    });
    yourInventory = <ul>{invText}</ul>;
    console.log(yourInventory);

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
          finalActions.push(<div><p><button type="button" onClick={() => this.props.changeGameState(actionLink)}>{linkFinalText}</button></p></div>);
        }
      });

      if(GameMusicId !== actionStateToProcess.MusicYTID){
        const audios = document.getElementsByTagName('audio');
        for(let i = 0, len = audios.length; i < len;i++){
          audios[i].pause();
        }
        this.props.getmusic(actionStateToProcess.MusicYTID);
      }
      const imageStyle = {
        height: 350,
        backgroundImage: `url(${actionStateToProcess.BackgroundId})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'blur(2px)',
        position: 'relative',
      };
      const textInsetStyle = {
        height: 330,
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '0px',
        marginBottom: '10px',
        zIndex: '3',
        backgroundColor: 'rgba(0,0,0, 0.4)',
        position: 'relative',
        color: 'white',
        padding: '20px',
        transform: 'translate(0, -105%)',
      };
      const containerStyle = {
        paddingTop: '25px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderRadius: '20px',
        backgroundImage: 'url("https://background-tiles.com/overview/red/patterns/large/1046.png")',
        backgroundRepeat: 'repeat',
        color: 'white',
        boxShadow: 'darkgrey 5px 10px 10px ',
      }
      const actionStyle = {
        paddingTop: '25px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'rgba(255, 224, 158, 0.1)',
        borderRadius: '20px',
        color: 'white',
        boxShadow: 'black 5px 5px 5px ',
      }
      const textStyle = {
        fontFamily: 'Arial',
      }
      // Compose a main window consisting of ResponseText and ActionLinks
      internalReturnObject = (
        <div>
          <div style={containerStyle}>
            <div><H1>A Christmas Witch</H1></div>
            <div className={classes.container}>
              <div style={imageStyle}></div>
              <div style={textInsetStyle}><p style={textStyle} dangerouslySetInnerHTML={{__html: finalText}}/></div>
            </div>
            <div style={actionStyle}>
              <div><b>Actions:</b></div>
              {finalActions}
              <div><b>Your Inventory:</b></div>
              {yourInventory}
              <p/>
            </div>
          </div>
          <div><b>Game Settings:</b></div>
        </div>
      );
      returnObject.push(internalReturnObject);
    }

    return (
      <ViewContainer>
        <ScrollView>
          <LayoutBody>
            <PrimaryAppBar
              toggleDrawer={this.props.toggleDrawer}
            />
            <div className={classes.body}>
              {returnObject}
              <AudioPlayer
                changedAudio = {this.props.ChangedAudio}
                GameMusic = {this.props.GameMusic}
                setaudioChanged = {this.props.setaudioChanged}
              />
            </div>
          </LayoutBody>
        </ScrollView>
      </ViewContainer>);
  }
}

HomePage.propTypes = {
  GameState: PropTypes.object,
  GameFile: PropTypes.object,
  GameInventory: PropTypes.object,
  GameMusic: PropTypes.string,
  GameMusicId: PropTypes.string,
  ChangedAudio: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    setaudioChanged: () => dispatch(setaudioChanged()),
    changeGameState: state => dispatch(changeGameState(state)),
    getmusic: vid => dispatch(getMusic(vid)),
    toggleDrawer: () => dispatch(toggleDrawer()),
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
  GameMusic: makeSelectGameMusic(),
  GameMusicId: makeSelectGameMusicId(),
  ChangedAudio: makeSelectGameChangedAudio(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default withStyles(styles)(compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage));
