

const initial = {
    detail:[]
}


export default (state = initial, action) => {
    switch (action.type) {

        
        case "DETAIL_POST":
             
            return {
                // del:[],
                detail: action.payload.data
            }
            
            
                   
        default: return state


    }

}