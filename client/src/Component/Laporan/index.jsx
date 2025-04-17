import { useState, useEffect } from "react";
import "./style.css";

function Laporan() {
  const [laporan, setLaporan] = useState([]);
  const [formData, setFormData] = useState({
    judul_aspirasi: "",
    nama_kebijakan: "",
    isi_aspirasi: "",
    proses: 0,
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/kebijakan_kampus")
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    submissionData.append("judul_aspirasi", formData.judul_aspirasi);
    submissionData.append("nama_kebijakan", formData.nama_kebijakan);
    submissionData.append("isi_aspirasi", formData.isi_aspirasi);
    submissionData.append("proses", formData.proses);
    if (file) submissionData.append("data_pendukung", file);

    fetch("http://localhost:5000/kebijakan_kampus", {
      method: "POST",
      body: submissionData,
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        setFormData({
          judul_aspirasi: "",
          nama_kebijakan: "",
          isi_aspirasi: "",
          proses: 0,
        });
        setFile(null);
        return fetch("http://localhost:5000/kebijakan_kampus");
      })
      .then((res) => res.json())
      .then((data) => setLaporan(data))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "600" }}>
        Pelaporan Kinerja Dosen
      </h1>
      <p style={{ maxWidth: "600px", margin: "0 auto 40px", color: "#555" }}>
        Sampaikan masukan dan evaluasi mengenai kinerja dosen secara objektif.
        Laporanmu akan menjadi pertimbangan untuk perbaikan dan peningkatan mutu pengajaran di kampus.
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
          { label: "Judul Aspirasi", name: "judul_aspirasi", type: "text" },
          { label: "Nama Dosen", name: "nama_kebijakan", type: "text" },
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
          <label style={{ fontWeight: "500" }}>Isi Aspirasi</label>
          <textarea
            name="isi_aspirasi"
            value={formData.isi_aspirasi}
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
          {/* Disembunyikan untuk menjaga konsistensi form, tapi tetap dikirim */}
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

        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500" }}>Upload Data Pendukung</label>
          <input
            type="file"
            name="data_pendukung"
            onChange={handleFileChange}
            style={{ marginTop: "8px" }}
          />
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
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Laporan;
