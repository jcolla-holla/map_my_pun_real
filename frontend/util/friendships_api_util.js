export const createFriendship = friendship => {
    return $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: { friendship }
    })
}

export const getFriendships = () => {
    return $.ajax({
        method: "GET",
        url: '/api/friendships'
    })
}

export const getFriendship = (friendshipId) => {
    return $.ajax({
        method: "GET",
        url: `/api/friendships/${friendshipId}`
    })
}

export const updateFriendship = (friendship) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/friendships/${friendship.id}`,
        data: { friendship }
    })
}

export const deleteFriendship = (friendshipId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/friendships/${friendshipId}`
    })
}