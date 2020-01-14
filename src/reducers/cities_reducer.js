export default function(state, action){
  if (state === undefined){
    // Reducer initialisation
    return [];
  }

  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
}
