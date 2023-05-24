import { createAction } from "@reduxjs/toolkit"; 

const setCurrentNotice = createAction('notices/setCurrentNotices');

const setNotices = createAction('notices/setNotices');

export {setCurrentNotice,setNotices};