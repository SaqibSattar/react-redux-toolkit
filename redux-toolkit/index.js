const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icecreamSlice");
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State ", store.getState());
// const unsubscribe = store.subscribe(() => {});
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.ordered(1));
// store.dispatch(icecreamActions.ordered(1));
// store.dispatch(icecreamActions.ordered(1));
// store.dispatch(icecreamActions.restocked(3));

// unsubscribe();
