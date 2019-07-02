import styled from '@emotion/styled'

export const imageStyle = (theme, actionStateToProcess) => ({
    height: '350px',
    backgroundImage: `url(${actionStateToProcess.BackgroundId})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(2px)',
    position: 'relative',
  });


export const GameImage = styled.img(props => ({
    height: '350px',
    width: '100%',
    backgroundImage: `url(${props.actionStateToProcess ? props.actionStateToProcess.BackgroundId : null})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(2px)',
    position: 'relative',
}));

  export const textInsetStyle = theme => ({
    height: '330px',
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
  });

  export const containerStyle = theme => ({
    paddingTop: '25px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '20px',
    backgroundImage: 'url("https://background-tiles.com/overview/red/patterns/large/1046.png")',
    backgroundRepeat: 'repeat',
    color: 'white',
    boxShadow: 'darkgrey 5px 10px 10px ',
  });

  export const actionStyle = theme => ({
    paddingTop: '25px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'rgba(255, 224, 158, 0.1)',
    borderRadius: '20px',
    color: 'white',
    boxShadow: 'black 5px 5px 5px ',
  });

  export const textStyle = theme => ({
    fontFamily: 'Arial',
  });

  export const innerContainerStyle = theme => ({
    maxHeight: '335px',
    overflow: 'hidden',
    border: '2px darkgrey',
    borderStyle: 'dotted',
    borderRadius: '5px',
  });