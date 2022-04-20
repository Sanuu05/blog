

const initial = {
    post: [],
    postdata: false
}


export default (state = initial, action) => {
    switch (action.type) {
        case "FETCH_POST":
            return {
                post: action.payload.data
            }
        case "DELETE_POSTS":
            return {
                post: state.post.filter((state) => state._id !== action.payload)
                // post:[]
            }

        default: return state


    }

}