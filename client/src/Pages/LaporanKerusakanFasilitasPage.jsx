import React from "react";
import LaporanKerusakanFasilitas from "../Component/LaporanKerusakanFasilitas";
import NavbarPages from "../Component/NavbarPages"

const LaporanKerusakanFasilitasPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full">
        <NavbarPages/>
        <LaporanKerusakanFasilitas />
      </div>
    </main>
  );
};

export default LaporanKerusakanFasilitasPage;