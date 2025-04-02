import React from "react";
import "./style.css";
import CardList from "../Card-List";
import { Element, Link } from "react-scroll";
const About = () => {
  return (
    <Element name="about">
      <section className="pt-44 about">
        <div>
          <h1 className="text-center text text-2xl font-medium">
            Tentang Kami
          </h1>
        </div>
        <div className="lg:mt-12 mt-6">
          <h1 className="text-center text lg:text-3xl text-2xl font-medium">
            Dari Mahasiswa Untuk Kampus
          </h1>
        </div>
        <div>
          <p className="md:mx-auto mx-4 text-center text-angular lg:text-lg text-sm max-w-[43rem] lg:mt-6 mt-8 font-normal">
            GASPOL merupakan salah satu Program kerja kolaborasi dari Dinas
            Kastrad dan Dinas Ristek BEM KM Fasilkom Kabinet Adibrata Kriya.
            GASPOL sendiri berfungsi agar mahasiswa dapat lebih mudah dalam
            melakukan pelaporan seputar kampus Fakultas Ilmu Komputer
            Universitas Sriwijaya. Semua laporan yang telah dibuat nantinya akan
            diaudiensikan dengan pihak dekanat.
          </p>
        </div>
        <div className="mt-36">
          <CardList />
        </div>
      </section>
    </Element>
  );
};

export default About;
