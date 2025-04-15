import React from "react";
import icon from "../../assets/icon/image.png";
import CardAbout from "../Card_About";

const cardlist = [
  {
    image: icon,
    tittle: "Laporan Kampus",
    text: "Tempat mahasiswa menyampaikan keluhan dan saran seputar kampus dengan mudah",
  },
  {
    image: icon,
    tittle: "Tindak Lanjut Aduan",
    text: "Setiap laporan yang masuk akan dikaji dan diteruskan ke pihak terkait untuk ditindaklanjuti",
  },
  {
    image: icon,
    tittle: "Kolaborasi Mahasiswa",
    text: "Bersama-sama wujudkan perubahan dengan aspirasi yang didukung banyak mahasiswa",
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {cardlist.map((cert, index) => (
        <div key={index} className={`mt-12 ${index === 1 ? "md:mt-36" : "md:mt-12"}`}>
          <CardAbout image={cert.image} tittle={cert.tittle} text={cert.text} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
