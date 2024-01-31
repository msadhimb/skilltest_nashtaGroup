/* eslint-disable react/prop-types */
import { Table as Tables } from "flowbite-react";

const Table = ({ data, idData, setOpenModal, deleteData }) => {
  const handleClickEdit = (item) => {
    setOpenModal(true);
    idData(item.id);
  };
  return (
    <div className="overflow-x-auto">
      <Tables className="table-auto w-full ">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="p-3">Nama</th>
            <th className="w-[25rem]">NIM</th>
            <th className="w-[25rem]">Jurusan</th>
            <th className="w-[10rem]">IPK</th>
            <th className="w-[10rem] text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((item) => (
            <tr className="bg-white " key={item.id}>
              <td className="p-3">{item.nama}</td>
              <td>{item.nim}</td>
              <td>{item.jurusan}</td>
              <td>{item.ipk}</td>
              <td>
                <div className="flex gap-2 justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                    onClick={() => handleClickEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
                    onClick={() => deleteData(item.id)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Tables>
    </div>
  );
};

export default Table;
