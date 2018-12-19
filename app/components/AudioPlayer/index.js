/**
*
* LayoutBody
*
*/

import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.Component {
  state = {
    // refreshLabel: '',
  };

  static propTypes = {
    changedAudio: PropTypes.bool.isRequired,
    setaudioChanged: PropTypes.func.isRequired,
  };

  componentDidUpdate(){
    console.log(this.props.changedAudio);
    if(this.props.changedAudio){
      console.log('Update detected');
      const audios = document.getElementsByTagName('audio');
      for(let i = 0, len = audios.length; i < len;i++){
        audios[i].load();
        audios[i].play();
      }
      this.props.setaudioChanged();

    }
  }

  render() {
    const { GameMusic } = this.props;

    return (
      <div>
        <audio autoPlay loop controls>
          <source src={GameMusic} />
        </audio>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  changedAudio: PropTypes.bool.isRequired,
  GameMusic: PropTypes.string.isRequired,
  setaudioChanged: PropTypes.func.isRequired,
};

export default AudioPlayer;
