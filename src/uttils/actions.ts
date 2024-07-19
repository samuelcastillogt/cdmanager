import { CLOSE_MODAL } from "../redux/slices/modal.slice";
import { store } from "../redux/store";

export const actionToStore={
    reload: ()=> window.location.reload(),
    closeModal: ()=> store.dispatch(CLOSE_MODAL())
}