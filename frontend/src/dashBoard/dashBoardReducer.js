const INITIAL_STATE = { summary: { credit: 10, debt: 5 } };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BILLING_SUMMARY_FETCHED":
      return { ...state, summary: action.payload.data };
    default:
      return state;
  }
}
