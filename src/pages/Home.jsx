import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalDataMahasiswa } from "../Config/Redux/Action/mahasiswaAction";
import loaders from "../loaders/loaders.svg";

const Home = () => {
  const dispatch = useDispatch();
  const { totalData, isLoading } = useSelector((state) => state.dataMahasiswa);

  useEffect(() => {
    totalData === 0 && dispatch(getTotalDataMahasiswa());

    return () => {
      dispatch(getTotalDataMahasiswa());
    };
  }, [dispatch, totalData]);

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center w-full">
          <img src={loaders} alt="loading" />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center w-full flex-col">
          <h1 className="font-bold text-3xl">Mahasiswa</h1>
          <h3 className="font-bold text-xl">
            Jumlah mahasiswa adalah {totalData}
          </h3>
        </div>
      )}
    </>
  );
};

export default Home;
