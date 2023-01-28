import { createStore, combine, createEffect, createEvent } from "effector";
import { getContactList, getContactById } from "../api";

const getContactListFx = createEffect((params) => {
  return getContactList(params);
});
const getContactByIdFx = createEffect((params) => {
  return getContactById(params);
});

export const $contacts = createStore([])
  .on(getContactListFx.doneData, (_, payload) => payload.data.data)
  .on(getContactByIdFx.doneData, (state, payload) => ({
    ...state,
    ...payload.data,
  }));

export const $contactListLoading = getContactListFx.pending;

export const effects = {
  getContactByIdFx,
  getContactListFx,
};
