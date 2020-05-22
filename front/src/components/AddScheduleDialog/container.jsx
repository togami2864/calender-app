import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";

import {
    addScheduleCloseDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions";

import { crateCalendar } from "../../services/calendar"

import { schedulesAddItem } from "../../redux/schedules/action"

const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.addSchedules
});

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value))
    },
    saveSchedule: schedule => {
        dispatch(schedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog())
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: crateCalendar(stateProps.calendar)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);