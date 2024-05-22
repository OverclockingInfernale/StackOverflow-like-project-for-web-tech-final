import {TypedUseSelectorHook, useSelector} from "react-redux";
import { rootState } from "../redux/root.ts";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector