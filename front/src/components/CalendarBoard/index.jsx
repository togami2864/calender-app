import React from "react";

import { GridList } from "@material-ui/core";
import * as styles from "./style.css";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const createCalendar = () => {
    const firstDay = dayjs().startOf("month");// 今月の最初の日のデータ
    const firstDayIndex = firstDay.day();//最初の日の曜日
    console.log(firstDayIndex)
    return Array(35)
        .fill(0)
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, "day");

            return day;
        });
};
const calendar = createCalendar();



const CalendarBoard = () => {
    console.log(calendar)
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {calendar.map(c => (
                    <li key={c.toISOString()}>
                        <div className={styles.element}>{c.format("D")}</div>
                    </li>
                ))}
            </GridList>
        </div>
    );
};

// dayjsはそのまま表示しようとするとエラー
export default CalendarBoard;