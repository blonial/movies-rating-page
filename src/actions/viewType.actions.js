export const viewTypeActions = {
  setViewType: 'viewType/viewType/set',
  resetViewType: 'viewType/reset',
};

export const setViewType = (viewType) => (dispatch) =>
  dispatch({ type: viewTypeActions.setViewType, payload: viewType });

export const resetViewType = () => (dispatch) =>
  dispatch({ type: viewTypeActions.resetViewType });
