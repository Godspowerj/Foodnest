'use client';

import { useContext } from 'react';
import { AppContext } from '@/components/AppContextApi/AppContext';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext)!;
  const router = useRouter();

  const handleSignOut = () => {
    setCurrentUser(null);
    router.push('/');
  };

  if (!currentUser) {
    return (
      <div className="h-screen flex items-center justify-center text-center text-gray-600 text-lg">
        You are not signed in.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 space-y-6 border-r">
        <h2 className="text-lg font-bold text-[#6e4231]">My Account</h2>
        <nav className="space-y-4 text-sm text-gray-700">
          <a href="#" className="block font-semibold text-[#6e4231]">My details</a>
          <a href="#">My address book</a>
          <a href="#">My orders</a>
          <a href="#">My newsletters</a>
          <a href="#">Account settings</a>
        </nav>

        <button
          onClick={handleSignOut}
          className="mt-auto w-full bg-[#6e4231] text-white px-4 py-2 rounded-md hover:bg-[#5b3426] text-sm"
        >
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6 text-[#6e4231]">My details</h1>

        <div className="bg-white shadow-sm rounded-xl p-8 space-y-8 border max-w-3xl">
          {/* Personal Info */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input type="text" defaultValue={currentUser.name.split(' ')[0]} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Second Name</label>
                <input type="text" defaultValue={currentUser.name.split(' ')[1] || ''} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Birth Date</label>
                <input type="date" className="w-full mt-1 px-3 py-2 border rounded-md text-sm" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone Number</label>
                <input type="tel" defaultValue={currentUser.phone || ''} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" />
              </div>
            </div>
            <button className="mt-6 bg-[#6e4231] text-white px-5 py-2 rounded-md text-sm hover:bg-[#5b3426]">Save</button>
          </section>

          {/* Email Section */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">E-mail address</h2>
            <input type="email" defaultValue={currentUser.email} className="w-full mt-1 px-3 py-2 border rounded-md text-sm" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
