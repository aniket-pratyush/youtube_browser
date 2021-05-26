import axios from 'axios';
const KEY =  'AIzaSyBhuxQpJGNCR6W0mrQk4vAgLP_9JFaelE0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key : KEY
    }
     
});