import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";

import {
    addScheduleCloseDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions";

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    saveSchedule: schedule => {
        dispatch(schedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value))
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
        } = stateProps;
        dispatchProps.saveSchedule(schedule);
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);