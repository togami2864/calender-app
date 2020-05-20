import { connect } from "react-redux";
import CalendarBoard from "./presentation";

import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions"
// import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({ calendar: state.calendar });

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: () => {
        dispatch(addScheduleOpenDialog())
    }
})
// const mapDispatchToProps = dispatch => ({
//     closeDialog: () => {
//         dispatch(addScheduleCloseDialog());
//     }
// });

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);