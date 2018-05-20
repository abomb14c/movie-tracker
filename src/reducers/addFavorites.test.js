import  addFavoritesReducer  from "./addFavoritesReducer"

describe('addFavoritesReducer', () => {
  it('should return a state of newFavorites', () => {
    const mockInitialState = []
    const mockAction = {
        type:"ADD_FAVORITES",
        favorites:[{},{}]
    }
    const mockState = [{},{}]
    
    const actual = addFavoritesReducer(mockInitialState, mockAction)

    expect(actual).toEqual(mockState)
  });

  it('should filter favorites and return objects the dont match id', () => {
    const mockState = [{movie_id: 23 }, { movie_id: 3526}]
    const mockAction = {
      type: 'REMOVE_FAVORITE',
      movie_id: 23
    }
    const expected = [{movie_id: 3526}]
    const actual = addFavoritesReducer(mockState, mockAction)

    expect(actual).toEqual(expected)
  })
});