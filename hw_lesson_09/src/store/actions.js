// action type
const DELETE_COUNTRY_ITEM_FROM_LIST = `DELETE_COUNTRY_ITEM_FROM_LIST`;

// actions
const deleteCountryItemFromList = (payload) => ({
    type: DELETE_COUNTRY_ITEM_FROM_LIST,
    payload,
});

export {
    DELETE_COUNTRY_ITEM_FROM_LIST,
    deleteCountryItemFromList
}