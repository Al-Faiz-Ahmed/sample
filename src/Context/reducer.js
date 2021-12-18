export let data = {
  sample: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "SAMPLE": {
      return {
        ...state,
        // something to do
      };
    }

    default:
      return state;
  }
}
