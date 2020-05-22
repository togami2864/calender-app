import { connect } from "react-redux";
import CalendarBoard from "./presentation";

import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/actions"
// import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";
import { setSchedules } from "../../services/schedule";

const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog())
        dispatch(addScheduleSetValue({ date: d }))
    }
})


const mergeProps = (stateProps, dispatchProps) => {
    const {
        calendar: month,
        schedules: { items: schedules }
    } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules);
    // console.log(createCalendar(month))
    // console.log(schedules)
    // console.log(calendar)

    return {
        ...stateProps,
        ...dispatchProps,
        calendar,
        month
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);