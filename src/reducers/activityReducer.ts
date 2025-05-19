import { Activity } from "../types"


export type ActivityActions = {
    
    type: 'save-activity', payload: {newActivity: Activity}

}


type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState =  {
    activities: []
}

export type ActivityReducer = (
        state: ActivityState,
        action: ActivityActions
    ) =>  ActivityState;

    
export const activityReducer: ActivityReducer = (
    state = initialState, 
    action
) => {
switch (action.type) {
    case 'save-activity':
      return {
        ...state,
        activities: [...state.activities, action.payload.newActivity],
      };
    default:
      return state; // ⚠️ esto también es obligatorio
  }
}
