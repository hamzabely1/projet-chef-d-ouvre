import {configureStore} from '@reduxjs/toolkit'
import { articlesSlice } from './ArticlesSlice'


export const store = configureStore({
reducer:{
articles:articlesSlice.reducer

}


})