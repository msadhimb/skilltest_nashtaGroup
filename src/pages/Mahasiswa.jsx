import { TextInput } from "flowbite-react";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataMahasiswa,
  deleteDataMahasiswa,
  getDataMahasiswa,
  getDataMahasiswaById,
  searchDataMahasiswa,
  updateDataMahasiswa,
} from "../Config/Redux/Action/mahasiswaAction";
import { useEffect, useState } from "react";
import Modals from "../components/Modal";

const Mahasiswa = () => {
  const dispatch = useDispatch();
  const { data, dataById } = useSelector((state) => state.dataMahasiswa);
  const [search, setSearch] = useState("");
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [addForm, setAddForm] = useState({
    nama: "",
    nim: "",
    jurusan: "",
    ipk: "",
  });
  const [editForm, setEditForm] = useState({
    nama: "",
    nim: "",
    jurusan: "",
    ipk: "",
  });

  const [idData, setIdData] = useState("");

  const handleChangeAdd = (e) => {
    setAddForm({
      ...addForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeEdit = (e) => {
    setEditForm({
      ...editForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    dispatch(addDataMahasiswa(addForm));
    setOpenModalAdd(false);
    dispatch(getDataMahasiswa());
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(updateDataMahasiswa(idData, editForm));
    setOpenModalEdit(false);
    dispatch(getDataMahasiswa());
  };

  const deleteData = (id) => {
    dispatch(deleteDataMahasiswa(id));
  };

  useEffect(() => {
    if (search === "") {
      dispatch(getDataMahasiswa());
    } else {
      dispatch(searchDataMahasiswa(search, data));
    }
  }, [dispatch, search]);

  useEffect(() => {
    if (idData !== "") {
      dispatch(getDataMahasiswaById(idData));
    }
  }, [idData, dispatch]);

  useEffect(() => {
    setEditForm({
      nama: dataById?.nama,
      nim: dataById?.nim,
      jurusan: dataById?.jurusan,
      ipk: dataById?.ipk,
    });
  }, [dataById]);

  return (
    <div className="mt-[5rem]">
      <div className="flex my-3">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded"
          onClick={() => setOpenModalAdd(true)}
        >
          Tambah
        </button>
        <TextInput
          id="small"
          type="text"
          sizing="md"
          placeholder="Search"
          className="w-[25rem] mx-3"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Table
        data={data}
        idData={setIdData}
        setOpenModal={setOpenModalEdit}
        deleteData={deleteData}
      />
      <Modals
        setOpenModal={setOpenModalAdd}
        openModal={openModalAdd}
        title="Add Data"
        handleChange={handleChangeAdd}
        handleSubmit={handleSubmitAdd}
      />
      <Modals
        setOpenModal={setOpenModalEdit}
        openModal={openModalEdit}
        title="Edit Data"
        handleChange={handleChangeEdit}
        handleSubmit={handleSubmitEdit}
        form={editForm}
      />
    </div>
  );
};

export default Mahasiswa;
