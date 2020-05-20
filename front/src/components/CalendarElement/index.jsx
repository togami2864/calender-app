import React from "react";

import dayjs from "dayjs";

import { Typography } from "@material-ui/core";

import * as styles from "./style.css";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar";

const CalendarElement = ({ day, month }) => {

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
        </div>
    );
};

export default CalendarElement;