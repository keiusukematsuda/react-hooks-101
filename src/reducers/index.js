const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE-EVENT':
            const event = { title:action.title, body: action.body };
            const length = state.length;
            let id = (length === 0 ? 1 : state[length - 1].id + 1 );
            return [...state, {id, ...event}];
        case 'DELETE-EVENT':
            return 
        case 'DELETE-ALL-EVENTS':
            return [];
                    default:
            return state;
    }
}

export default events;