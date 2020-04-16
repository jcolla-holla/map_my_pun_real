export const getUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    });
};

export const getUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    });
};