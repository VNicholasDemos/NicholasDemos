import axios from 'axios';

function parseStr(str) {
  return str.split('&').reduce((params, param) => {
    const newValue = params;
    const paramSplit = param.split('=').map((value) => decodeURIComponent(value.replace('+', ' ')));
    newValue[paramSplit[0]] = paramSplit[1];
    return newValue;
  }, {});
}

export function getMusicData(vid) {
  // vid = '3r_Z5AYJJd4';
  const audioStreams = {};
  // console.log(`https://cors-anywhere.herokuapp.com/https://www.youtube.com/get_video_info?video_id=${vid}`);
  const finalvalue = axios.get(`https://cors-anywhere.herokuapp.com/https://www.youtube.com/get_video_info?video_id=${vid}`).then((res) => {
    const data = parseStr(res.data);
    // console.log(data);
    const streams = (`${data.url_encoded_fmt_stream_map  },${  data.adaptive_fmts}`).split(',');
    streams.forEach(s => {
      const stream = parseStr(s);
      const itag = stream.itag * 1;
      let quality = false;
      switch (itag) {
        default:
          break;
        case 139:
          quality = "48kbps";
          break;
        case 140:
          quality = "128kbps";
          break;
        case 141:
          quality = "256kbps";
          break;
      }
      if (quality) audioStreams[quality] = stream.url;
    });
    // console.log(audioStreams['128kbps']);
    return audioStreams['128kbps'];
  })
    .catch((res) => {
      console.log('error', res);
      return {};
    });

  return finalvalue;
}
