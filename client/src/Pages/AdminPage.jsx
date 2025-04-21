import Navbar from "../Component/Navbar";
import Admin from "../Component/AdminDashboard";
import Footer from "../Component/Footer";

const AdminPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full ">
        <Navbar />
        <Admin />
        <Footer />
      </div>
    </main>
  );
};

export default AdminPage;
