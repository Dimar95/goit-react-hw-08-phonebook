export const filterSelector = state => state.phonebook.filter

export const loaderSelector = state => state.phonebook.contacts.isLoading

export const itemsSelector = state => state.phonebook.contacts.items

export const errorRequestelector = state => state.phonebook.contacts.error

export const errorUserRequestSelector = state => state.userState.user.error

export const userTokenSelector = state => state.userState.token

export const userNameSelector = state => state.userState.user.name

export const userEmailSelector = state => state.userState.user.email 

export const isLogggedInSelector = state => state.userState.user.isLogggedIn 

export const isLoadingCurrentSelector = state => state.userState.user.isLoading 


