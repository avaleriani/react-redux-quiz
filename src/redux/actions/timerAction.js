import { TIMER_START, TIMER_RESET, TIMER_END, TIMER_DECREMENT } from "../types";

export const timerStart = () => ({ type: TIMER_START });
export const timerReset = () => ({ type: TIMER_RESET });
export const timerEnd = () => ({ type: TIMER_END });
export const timerDecrement = () => ({ type: TIMER_DECREMENT });