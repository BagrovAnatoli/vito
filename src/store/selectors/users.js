export const storeUsersSelector = (store) => {
    console.log(store);
    return store?.users;
};

export const usersSelector = (store) => storeUsersSelector(store)?.users;

export const usersLoadingSelector = (store) => storeUsersSelector(store)?.usersLoading;

export const usersErrorSelector = (store) => storeUsersSelector(store)?.usersError;

export const userByIdSelector = (userId) => (store) => {
    console.log(usersSelector(store));
    return usersSelector(store)?.find((user) => user.id === userId);
};
