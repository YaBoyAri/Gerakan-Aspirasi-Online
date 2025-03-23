import { useState, useEffect } from "react";

function App() {
  const [laporan, setLaporan] = useState([]);
  const [formData, setFormData] = useState({
    Nama: "",
    Jurusan: "",
    judul_aspirasi: "",
    nama_kebijakan: "",
    isi_aspirasi: "",
    proses: 0, // Default status: 0 (misal: Pending)
  });
  const [file, setFile] = useState(null);

  // Mengambil data laporan dari backend saat komponen pertama kali render
  useEffect(() => {
    fetch("http://localhost:5000/kebijakan_kampus")
      .then((res) => res.json())
      .then((data) => setLaporan(data))
      .catch((err) => console.error(err));
  }, []);

  // Handler untuk field teks
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "proses" ? parseInt(value) : value,
    }));
  };

  // Handler untuk input file
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handler submit form dengan FormData
  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat objek FormData
    const submissionData = new FormData();
    submissionData.append("Nama", formData.Nama);
    submissionData.append("Jurusan", formData.Jurusan);
    submissionData.append("judul_aspirasi", formData.judul_aspirasi);
    submissionData.append("nama_kebijakan", formData.nama_kebijakan);
    submissionData.append("isi_aspirasi", formData.isi_aspirasi);
    submissionData.append("proses", formData.proses);
    if (file) {
      submissionData.append("data_pendukung", file);
    }

    fetch("http://localhost:5000/kebijakan_kampus", {
      method: "POST",
      body: submissionData,
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        // Reset form dan file
        setFormData({
          Nama: "",
          Jurusan: "",
          judul_aspirasi: "",
          nama_kebijakan: "",
          isi_aspirasi: "",
          proses: 0,
        });
        setFile(null);
        // Refresh data laporan
        return fetch("http://localhost:5000/kebijakan_kampus");
      })
      .then((res) => res.json())
      .then((data) => setLaporan(data))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pelaporan Mahasiswa</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Nama: </label>
          <input
            type="text"
            name="Nama"
            value={formData.Nama}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Jurusan: </label>
          <input
            type="text"
            name="Jurusan"
            value={formData.Jurusan}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Judul Aspirasi: </label>
          <input
            type="text"
            name="judul_aspirasi"
            value={formData.judul_aspirasi}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nama Kebijakan: </label>
          <input
            type="text"
            name="nama_kebijakan"
            value={formData.nama_kebijakan}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Isi Aspirasi: </label>
          <textarea
            name="isi_aspirasi"
            value={formData.isi_aspirasi}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Data Pendukung: </label>
          <input
            type="file"
            name="data_pendukung"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Proses: </label>
          <select
            name="proses"
            value={formData.proses}
            onChange={handleChange}
            required
          >
            <option value={0}>Pending</option>
            <option value={1}>Diproses</option>
            <option value={2}>Selesai</option>
          </select>
        </div>
        <button type="submit">Kirim Laporan</button>
      </form>
      <h2>Daftar Laporan</h2>
      <ul>
        {laporan.map((item) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            <strong>{item.Nama}</strong> ({item.Jurusan})<br />
            <em>{item.judul_aspirasi}</em>
            <br />
            <p>{item.isi_aspirasi}</p>
            <p>
              Data Pendukung:{" "}
              {item.data_pendukung ? (
                <a
                  href={`http://localhost:5000/uploads/${item.data_pendukung}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.data_pendukung}
                </a>
              ) : (
                "Tidak ada file"
              )}
            </p>
            <p>
              Status:{" "}
              {item.proses === 0
                ? "Pending"
                : item.proses === 1
                ? "Diproses"
                : "Selesai"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
