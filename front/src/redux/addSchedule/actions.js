export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";

export const addScheduleSetValue = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
    payload
})

//payload {[key]:value]}

export const addScheduleOpenDialog = payload => ({
    type: ADD_SCHEDULE_OPEN_DIALOG
})

export const addScheduleCloseDialog = payload => ({
    type: ADD_SCHEDULE_CLOSE_DIALOG
})