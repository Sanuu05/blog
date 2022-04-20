

const initial = {
    postdata: [],
    del:[],
    update:[]
}


export default (state = initial, action) => {
    switch (action.type) {

        case "POST_DATA":
            return {
                postdata: action.payload.data.savedata
            }
        case "DELETE_POST":
             
            return {
                // del:[],
                del: action.payload.data
            }
            
            case "UPDATE_POST":
             
                return {
                    // del:[],
                    update: action.payload.data
                }    
        default: return state


    }

}