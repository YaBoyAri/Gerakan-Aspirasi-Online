import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/laporan")
      .then((res) => setLaporan(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="pt-16">
      <h1 className="text-2xl font-bold mb-4">Semua Laporan Mahasiswa</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Kategori</th>
              <th className="border px-4 py-2">Judul</th>
              <th className="border px-4 py-2">Isi</th>
              <th className="border px-4 py-2">Proses</th>
              <th className="border px-4 py-2">Lampiran</th>
            </tr>
          </thead>
          <tbody>
            {laporan.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.kategori}</td>
                <td className="border px-4 py-2">{item.judul}</td>
                <td className="border px-4 py-2">{item.isi}</td>
                <td className="border px-4 py-2">{item.proses || "-"}</td>
                <td className="border px-4 py-2">
                  {item.lampiran ? (
                    <a
                      href={`http://localhost:5000/uploads/${item.lampiran}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Lihat File
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;