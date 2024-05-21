import {TypedUseSelectorHook, useSelector} from "react-redux";
import { rootState } from "../redux/root";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector