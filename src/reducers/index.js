import { combineReducers } from "redux";

import { auth } from "./auth.reducer";
import { questions } from "./questions.reducer";

export default combineReducers({
    auth,
    questions
});