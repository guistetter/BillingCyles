import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import DashBoardReducer from "../dashBoard/dashBoardReducer";
import TabReducer from "../common/tab/tabReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
  dashboard: DashBoardReducer, //() => ({ summary: { credit: 100, debt: 50 } })
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
});
export default rootReducer;
