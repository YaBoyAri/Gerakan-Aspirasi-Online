import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Laporan from "../Component/Laporan";

const LaporanPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Laporan />
        <Footer />
      </div>
    </main>
  );
};

export default LaporanPage;