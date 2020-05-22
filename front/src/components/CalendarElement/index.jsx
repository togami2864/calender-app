import React from "react";

import dayjs from "dayjs";

import { Typography } from "@material-ui/core";

import * as styles from "./style.css";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar";
import Schedule from "../Schedule";

const CalendarElement = ({ day, month, schedules }) => {

    //初日かどうか
    const format = isFirstDay(day) ? "M月D日" : "D";

    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);

    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    // 今月以外をグレーダウン

    // 当日かどうか判断
    const today = dayjs();
    const isToday = isSameDay(day, today);

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align="center"
                color={textColor}
                variant="caption"
                component="div"
            >
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
            <div className={styles.schedules}>
                {schedules.map(e => (
                    <Schedule key={e.id} schedule={e} />
                ))}
            </div>
        </div>
    );
};

export default CalendarElement;