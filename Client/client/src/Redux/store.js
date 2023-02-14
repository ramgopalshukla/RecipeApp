
import  {legacy_createStore as createstore} from 'redux'
import { reducer as Authreducer } from './AuthReducer/reducer';
import { reducer as Appreducer } from './AppReducer/reducer';

import {combineReducers} from 'redux'

 const reducers=  combineReducers({Authreducer, Appreducer})

const store = createstore(reducers);

export { store };



