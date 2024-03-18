const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes -= action.payload
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions