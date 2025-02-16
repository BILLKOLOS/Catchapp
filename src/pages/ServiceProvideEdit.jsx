import { useState } from 'react';
import { Plus, Trash2, ImagePlus, User } from 'lucide-react';

const ServiceProviderEdit = ({ onClose, initialData }) => {
  const [name, setName] = useState(initialData?.username || '');
  const [username, setUsername] = useState(initialData?.username || '');
  const [profilePicture, setProfilePicture] = useState(initialData?.profile || null);
  const [specialities, setSpecialities] = useState(initialData?.specialties || []);
  const [currentSpeciality, setCurrentSpeciality] = useState('');
  const [serviceCharges, setServiceCharges] = useState('');

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addSpeciality = () => {
    if (currentSpeciality.trim()) {
      setSpecialities([...specialities, currentSpeciality.trim()]);
      setCurrentSpeciality('');
    }
  };

  const removeSpeciality = (index) => {
    const updatedSpecialities = specialities.filter((_, i) => i !== index);
    setSpecialities(updatedSpecialities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      name,
      username,
      profilePicture,
      specialities,
      serviceCharges
    };
    console.log('Profile Data:', profileData);
    onClose();
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Edit Profile</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="relative">
            {profilePicture ? (
              <img 
                src={profilePicture} 
                alt="Profile" 
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-600"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            )}
            <label className="absolute bottom-0 right-0 bg-purple-500 text-white rounded-full p-2 cursor-pointer hover:bg-purple-600 transition-colors">
              <ImagePlus className="w-5 h-5" />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Username Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Choose a unique username"
            />
          </div>

          {/* Specialities */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Specialities</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentSpeciality}
                onChange={(e) => setCurrentSpeciality(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Add a speciality"
              />
              <button
                type="button"
                onClick={addSpeciality}
                className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Specialities List */}
            {specialities.length > 0 && (
              <div className="mt-2 space-y-2">
                {specialities.map((spec, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
                  >
                    <span className="text-white">{spec}</span>
                    <button
                      type="button"
                      onClick={() => removeSpeciality(index)}
                      className="text-red-400 hover:text-red-300 p-1 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Service Charges */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Service Charges</label>
            <input
              type="number"
              value={serviceCharges}
              onChange={(e) => setServiceCharges(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your service charges"
              min="0"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ServiceProviderEdit;