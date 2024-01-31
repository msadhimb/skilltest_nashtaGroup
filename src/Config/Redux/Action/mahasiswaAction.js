import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Swal from "sweetalert2";

export const getDataMahasiswa = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "mahasiswa"));
    const dataDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({ type: "SET_DATA_MAHASISWA", payload: dataDocs });
  };
};

export const getTotalDataMahasiswa = () => {
  return async (dispatch) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const querySnapshot = await getDocs(collection(db, "mahasiswa"));
      dispatch({ type: "TOTAL_DATA", payload: querySnapshot.size });
      dispatch({ type: "IS_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };
};
export const searchDataMahasiswa = (searchQuery, data) => {
  return async (dispatch) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      // Membuat query untuk mencari data mahasiswa yang dimulai dengan searchQuery
      const filteredData = data.filter((item) => {
        return item.nama.toLowerCase().includes(searchQuery.toLowerCase());
      });

      dispatch({ type: "SET_DATA_MAHASISWA", payload: filteredData });
      dispatch({ type: "IS_LOADING", payload: false });
    } catch (error) {
      console.error("Error searching data: ", error);
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };
};

export const getDataMahasiswaById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "IS_LOADING", payload: true });

      const colRef = collection(db, "mahasiswa");
      const docSnap = doc(colRef, id);
      const unsub = await onSnapshot(docSnap, (doc) => {
        dispatch({ type: "SET_DATA_MAHASISWA_BY_ID", payload: doc.data() });

        return unsub;
      });

      dispatch({ type: "IS_LOADING", payload: false });
    } catch (error) {
      console.error("Error searching data: ", error);
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };
};

export const addDataMahasiswa = (data) => {
  return async (dispatch) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      await addDoc(collection(db, "mahasiswa"), data);

      dispatch({ type: "IS_LOADING", payload: false });
    } catch (error) {
      console.error("Error adding data: ", error);
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };
};

export const updateDataMahasiswa = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "IS_LOADING", payload: true });

      const colRef = collection(db, "mahasiswa");
      const docRef = doc(colRef, id);
      await updateDoc(docRef, data);

      dispatch({ type: "IS_LOADING", payload: false });
    } catch (error) {
      console.error("Error updating data: ", error);
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };
};

export const deleteDataMahasiswa = (id) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          dispatch({ type: "IS_LOADING", payload: true });

          await deleteDoc(doc(db, "mahasiswa", id));

          dispatch(getDataMahasiswa());
          dispatch({ type: "IS_LOADING", payload: false });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (error) {
      console.error("Error deleting data: ", error);
      dispatch({ type: "IS_LOADING", payload: false });
    }
  };
};
