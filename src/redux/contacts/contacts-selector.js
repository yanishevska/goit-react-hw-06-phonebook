export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getFilterContacts = state => {
    const lowerCaseFilter = getFilter(state).toLowerCase();
    const filteredContacts = getContacts(state).filter(({ name }) =>
        name.toLowerCase().includes(lowerCaseFilter))
        .sort((a, b) => a.name.localeCompare(b.name));
    return filteredContacts
};