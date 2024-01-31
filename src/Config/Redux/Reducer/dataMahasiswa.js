const initialState = {
  data: [],
  dataById: {},
  isLoading: false,
  totalData: 0,
};

const dataMahasiswa = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_MAHASISWA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_DATA_MAHASISWA_BY_ID":
      return {
        ...state,
        dataById: action.payload,
      };
    case "SEARCH_MAHASISWA":
      return {
        ...state,
        data: action.payload,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "TOTAL_DATA":
      return {
        ...state,
        totalData: action.payload,
      };
    default:
      return state;
  }
};

export default dataMahasiswa;
