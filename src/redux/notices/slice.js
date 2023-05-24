import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import{
    getNotices,
    getNoticesByQuery,
    getNoticesById,
    getUsersNotices,
    getFavoriteNotices,
    addNotice,
    updateNotice,
    removeNotice,
    addFavoriteNotice,
    removeFavoriteNotice,
} from './operations';

const initialState = {
    items:[],
    currentNotice:null,
    hits:0,
    totalHits:0,
    newNotice:{},
    isLoading:false,
    error:null,
};

const noticesSlice = createSlice({
    name:'notices',
    initialState,
    extraReducers:builder=>{
        builder
        .addCase()
    }
})