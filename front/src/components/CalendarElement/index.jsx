import React from "react";

import dayjs from "dayjs";

import { Typography } from "@material-ui/core";

import * as styles from "./style.css";
import { isSameMonth, isFirstDay, isSameDay } from "../../services/calendar";

const CalendarElement = ({ day }) => {

    const today = dayjs();
    // 当日かどうか判断
    const isToday = isSameDay(day, today);
    //初日かどうか
    const format = isFirstDay(day) ? "M月D日" : "D";

    // 今月以外をグレーダウン
    const isCurrentMonth = isSameMonth(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

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