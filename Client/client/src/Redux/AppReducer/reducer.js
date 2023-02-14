
const initialState = {
  Recipes: [],
  loading: false,
 RecipeBook: []
};

const reducer = (state = initialState, action ) => {

  switch(action.type){
  
    case "GET_RECIPE_DATA_REQUEST":
      return {
          ...state,
          Recipes: action.payload
      }

      case "LOADING_REQUEST":
        return{
           ...state,
           loading: action.payload
        }
        
        case "ADD_RECIPE":
        return{
           ...state,
           RecipeBook: action.payload
        }


    

      default:
      return state;

  };






  return state;
};

export { reducer };
