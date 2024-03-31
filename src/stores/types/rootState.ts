import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../../main";
import rootReducer from "../rootReducer";

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector