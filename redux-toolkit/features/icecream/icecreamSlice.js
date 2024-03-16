const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIcecreams: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // extraReducers: {  // old way
  //   ['cake/ordered']: (state) => {
  //     state.numOfIcecreams--;
  //   },
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;