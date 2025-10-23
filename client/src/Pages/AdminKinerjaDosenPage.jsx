import AdminKinerjaDosen from "../Component/AdminKinerjaDosen";
import NavbarPages from "../Component/NavbarPages"

const AdminKinerjaDosenPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="w-full ">
        <NavbarPages/>
        <AdminKinerjaDosen />
      </div>
    </main>
  );
};

export default AdminKinerjaDosenPage;