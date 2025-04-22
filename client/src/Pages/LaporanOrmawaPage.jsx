import React from "react";
import LaporanOrmawa from "../Component/LaporanOrmawa";

const LaporanOrmawaPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full">
        <LaporanOrmawa />
      </div>
    </main>
  );
};

export default LaporanOrmawaPage;