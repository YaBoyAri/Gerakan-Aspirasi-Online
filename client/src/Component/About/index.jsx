import React, { useEffect, useRef } from "react";
import "./style.css";
import CardList from "../Card-List";
import { Element, Link } from "react-scroll";
const About = () => {
  const titleRef = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-animate");
          } else {
            entry.target.classList.remove("fade-up-animate");
          }
        });
      },
      { threshold: 0.3 } // Elemen terlihat jika 30% masuk ke viewport
    );

    // Observasi elemen teks dan gambar
    if (titleRef.current) observer.observe(titleRef.current);
    if (title2Ref.current) observer.observe(title2Ref.current);
    if (title3Ref.current) observer.observe(title3Ref.current);


    // Cleanup observer saat unmount
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (title2Ref.current) observer.unobserve(title2Ref.current);
      if (title3Ref.current) observer.unobserve(title3Ref.current);

    };
  }, []);

  return (
    <Element name="about">
      <section className="pt-44 about">
        <div>
          <h1 ref={titleRef} className="fade-up text-center text text-2xl font-medium">
            Tentang Kami
          </h1>
        </div>
        <div ref={title2Ref} className="lg:mt-12 fade-up mt-6">
          <h1 className="text-center text lg:text-3xl text-2xl font-medium">
            Dari Mahasiswa Untuk Kampus
          </h1>
        </div>
        <div>
          <p ref={title3Ref} className="fade-up md:mx-auto mx-4 text-center text-angular lg:text-lg text-sm max-w-[43rem] lg:mt-6 mt-8 font-normal">
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
