import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    people : [],
    
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addPerson:(state, action) => {
              state.people = action.payload;
        },

        removePerson: (state, action) => {
            
            var newpeople = [...state.people];
             newpeople = newpeople.filter((item)=>{
                item.id !== action.payload;
             })

             state.people = newpeople;
        }
    }
})


export const {addPerson, removeperson} = cardSlice.actions;
export default cardSlice.reducer;

