import {configureStore} from '@reduxjs/toolkit'
import { articlesSlice } from './ArticlesSlice'

import { registerslice } from './RegisterSlice'
export const store = configureStore({
reducer:{
articles:articlesSlice.reducer,
register:registerslice.reducer
}


})