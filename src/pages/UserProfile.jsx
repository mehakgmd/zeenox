import React from "react";
import { FaUser, FaPhoneAlt, FaIdCard, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAccountBalance, MdOutlineTitle } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const UserProfile = ({
  name = "John Doe",
  phone = "+92 300 1234567",
  cnic = "12345-6789012-3",
  address = "Karachi, Pakistan",
  email = "johndoe@example.com",
  whatsapp = "+92 300 7654321",
  bankAccountNumber = "1234-5678-9012",
  bankAccountTitle = "Savings",
  accountHolderName = "John Doe",
  selfieUrl = "https://i.pravatar.cc/150?img=3",
  cnicFrontUrl = "/cnic.png",
  cnicBackUrl = "/cnic.png"
}) => {
  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* Greeting */}
      <div className="bg-gradient-to-r from-gray-700 to-blue-500 text-white p-6 rounded-xl shadow-lg mb-6 flex items-center gap-4">
        <img
          src={selfieUrl}
          alt="Profile Selfie"
          className="w-16 h-16 rounded-full border-2 border-white object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">Hello, {name} 👋</h1>
          <p className="text-sm text-blue-100">Welcome back to ZEENOX EQUITY Dashboard</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileField icon={<FaUser />} label="Full Name" value={name} />
          <ProfileField icon={<FaPhoneAlt />} label="Phone Number" value={phone} />
          <ProfileField icon={<FaIdCard />} label="CNIC" value={cnic} />
          <ProfileField icon={<FaMapMarkerAlt />} label="Address" value={address} />
          <ProfileField icon={<FaRegEnvelope />} label="Email" value={email} />
          <ProfileField icon={<FaWhatsapp />} label="Whatsapp Number" value={whatsapp} />
          <ProfileField icon={<MdOutlineAccountBalance />} label="Bank Account Number" value={bankAccountNumber} />
          <ProfileField icon={<MdOutlineTitle />} label="Bank Account Title" value={bankAccountTitle} />
          <ProfileField icon={<IoMdContact />} label="Account Holder Name" value={accountHolderName} />
        </div>
      </div>

      {/* CNIC Images */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">CNIC Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">CNIC Front</p>
            <img src={cnicFrontUrl} alt="CNIC Front" className="rounded-lg shadow border" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">CNIC Back</p>
            <img src={cnicBackUrl} alt="CNIC Back" className="rounded-lg shadow border" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Field Component
const ProfileField = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-blue-600 text-lg">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  </div>
);

export default UserProfile;
