import axios from 'axios';

var searchYouTube = ({key, query, max = 5}, callback) => {
  return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${query}&maxResults=${max}&type=video&videoEmbeddable=true`)
    .then((data) => {
      return new Promise((resolve, reject) => {
        resolve(data.data.items); 
        reject();
      });
    });
};

export default searchYouTube;