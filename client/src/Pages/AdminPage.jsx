import Admin from "../Component/AdminDashboard";

const AdminPage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full ">
        <Admin />
      </div>
    </main>
  );
};

export default AdminPage;