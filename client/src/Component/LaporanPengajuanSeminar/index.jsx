import { useState, useEffect } from "react";
import "./style.css";

function LaporanPengajuanSeminar() {
  const [laporan, setLaporan] = useState([]);
  const [formData, setFormData] = useState({
    Jurusan: "",
    Judul_Seminar: "",
    Deskripsi_Seminar: "",
    proses: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/pengajuan_seminar")
      .then((res) => res.json())
      .then((data) => setLaporan(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "proses" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    submissionData.append("Jurusan", formData.Jurusan);
    submissionData.append("Judul_Seminar", formData.Judul_Seminar);
    submissionData.append("Deskripsi_Seminar", formData.Deskripsi_Seminar);
    submissionData.append("proses", formData.proses);

    fetch("http://localhost:5000/pengajuan_seminar", {
      method: "POST",
      body: submissionData,
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        setFormData({
          Jurusan: "",
          Judul_Seminar: "",
          Deskripsi_Seminar: "",
          proses: 0,
        });
        return fetch("http://localhost:5000/pengajuan_seminar");
      })
      .then((res) => res.json())
      .then((data) => setLaporan(data))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
        Pengajuan Seminar
      </h1>
      <p style={{ maxWidth: "600px", margin: "0 auto 40px", color: "#555" }}>
        Silakan isi form berikut untuk mengajukan seminar. Pastikan informasi
        yang Anda berikan akurat dan lengkap.
      </p>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          border: "1px solid #aaa",
          padding: "30px",
          borderRadius: "6px",
          textAlign: "left",
        }}
      >
        {[
          { label: "Jurusan", name: "Jurusan", type: "text" },
          { label: "Judul Seminar", name: "Judul_Seminar", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "500" }}>{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid #000",
                padding: "8px 4px",
                outline: "none",
                fontSize: "14px",
                background: "transparent",
              }}
            />
          </div>
        ))}

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500" }}>Deskripsi Seminar</label>
          <textarea
            name="Deskripsi_Seminar"
            value={formData.Deskripsi_Seminar}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              border: "none",
              borderBottom: "1px solid #000",
              padding: "8px 4px",
              fontSize: "14px",
              background: "transparent",
              resize: "vertical",
              minHeight: "80px",
              outline: "none",
            }}
          ></textarea>
        </div>

        <div style={{ display: "none" }}>
          {/* Tetap dikirim untuk keperluan backend */}
          <label>Proses</label>
          <select
            name="proses"
            value={formData.proses}
            onChange={handleChange}
          >
            <option value={0}>Pending</option>
            <option value={1}>Diproses</option>
            <option value={2}>Selesai</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #000",
            background: "white",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Kirim Pengajuan
        </button>
      </form>
    </div>
  );
}

export default LaporanPengajuanSeminar;