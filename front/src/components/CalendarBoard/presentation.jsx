import React from "react";

import { GridList, Typography } from "@material-ui/core";
import * as styles from "./style.css";

import CalendarElement from "../CalendarElement";

const days = ["日", "月", "火", "水", "木", "金", "土"]



const CalendarBoard = ({
    calendar,
    month,
    openAddScheduleDialog
    // schedules
}) => {
    console.log(calendar)
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {calendar.map(d => (
                    <li key={d}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {d}
                        </Typography>
                    </li>
                ))}
                {
                    calendar.map(({ date, schedules }) => (
                        <li
                            key={c.toISOString()}
                            onClick={() => openAddScheduleDialog(date)}
                        >
                            <CalendarElement day={date} month={month} schedules={schedules} />
                        </li>
                    ))
                }
            </GridList>
        </div >
    );
};

// dayjsはそのまま表示しようとするとエラー
export default CalendarBoard;