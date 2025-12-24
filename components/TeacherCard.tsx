import { Globe, GraduationCap, User } from 'lucide-react'; // Optional: npm install lucide-react
import umairImage from "@/public/images/Umair Teacher.jpg"
import JawwadImage from "@/public/images/Jawwad Teacher.jpg"
import sabirImage from "@/public/images/Sabir Teacher.jpg"

const TeacherCard = () => {
   const teachers = [
        { name: "Muhammad Umair", title: "Hafiz", languages: ["Urdu", "Spanish"], imageUrl: umairImage, description: "Specializing in Tajweed and Fiqh with over 10 years of teaching experience in classical Islamic sciences.", },
        { name: "Muhammad Sabir", title: "Hafiz & Islamic Scholar", languages: ["Urdu", "Spanish"], imageUrl: sabirImage, description: "Specializing in Tajweed and Fiqh with over 10 years of teaching experience in classical Islamic sciences.", },
        { name: "Muhammad Jawwad", title: "Hafiz", languages: ["Urdu", "English"], imageUrl: JawwadImage, description: "Specializing in Tajweed and Fiqh with over 10 years of teaching experience in classical Islamic sciences.", },
    ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {teachers.map((teacher, index) => (
        <div key={index} className="max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group">
          {/* Top Image Section */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={teacher.imageUrl.src} 
              alt={teacher.name}
              className="w-full h-full object-cover tra ,nsition-transform duration-500 group-hover:scale-110"
            />
            {/* Knowledge Label Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
              <GraduationCap size={14} />
              {teacher.title}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
            
            {/* Languages */}
            <div className="flex items-center gap-2 text-blue-600 mb-3">
              <Globe size={16} />
              <p className="text-sm font-medium">
                {teacher.languages.join(", ")}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
              {teacher.description}
            </p>

            {/* Button */}
            <button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
              <User size={18} />
              View Full Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherCard;