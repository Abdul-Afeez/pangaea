import {GlobalActions} from "../Actions/GlobalAction";

export const MapGlobalDispatchToProp = (dispatch)=> ({
    toggleCartSummary:(data) => dispatch(GlobalActions.toggleCartSummary(data)),
    updateCart:(data) => dispatch(GlobalActions.updateCart(data))
});
