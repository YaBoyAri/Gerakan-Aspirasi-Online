import React from "react";
import LaporanOrmawa from "../Component/LaporanOrmawa";
import NavbarPages from "../Component/NavbarPages"

const LaporanOrmawaPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="w-full">
        <NavbarPages/>
        <LaporanOrmawa />
      </div>
    </main>
  );
};

export default LaporanOrmawaPage;