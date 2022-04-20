import {combineReducers} from 'redux';
import post from './post'
import postdata from './postdata'
import detail from './details'
export default combineReducers({
    post,
    postdata,
    detail

})