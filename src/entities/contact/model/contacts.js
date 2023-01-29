import { createStore, createEffect, combine, forward, sample } from "effector";
import { createContact, getContactList } from "../api";
import { getLimitOffset } from "shared/lib";

export const getContactListFx = createEffect((params) => {
  return getContactList(getLimitOffset(params));
});

export const createContactFx = createEffect((params) => {
  return createContact(params);
});

export const $notification = createStore({ text: "", variant: "" }).on(
  createContactFx.failData,
  (_, payload) => ({
    text: payload.message,
    variant: "danger",
  })
);

const $contacts = createStore([]).on(
  getContactListFx.doneData,
  (_, payload) => payload.data.data
);
const $pagination = createStore({ page: 1, pageSize: 10, total: 0 }).on(
  getContactListFx.done,
  (state, { params, result }) => ({ ...params, total: result.data.total })
);

export const $contactsModel = combine({
  loading: getContactListFx.pending,
  contacts: $contacts,
  pagination: $pagination,
});

sample({
  clock: createContactFx.doneData,
  source: $pagination,
  target: getContactListFx,
});
