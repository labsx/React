import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { FaEllipsisV, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaGlobe, FaLinkedin, FaGithub, FaAward } from 'react-icons/fa';
import ContactInformation from '../components/contactinformation';
import { useForm } from 'react-hook-form'
import { Profile } from '../types/profile'
import { profileQueryOptions } from '../queries/profile-queries'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {

  const search = Route.useSearch()
  const navigate = useNavigate()
  const userQuery = useQuery(profileQueryOptions({
    ...search
  }))
  const profile = userQuery.data
  console.log(profile, 'test');

  return profile?.data?.map((user) => (
    <div key={user.id}>
      {/* <div className="absolute top-4 right-4">
      <FaEllipsisV
        className="text-white cursor-pointer"
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Add</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </div> */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto text-white">

        <div className="flex items-center gap-6 border-b border-white pb-6 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="Profile"
            className="rounded-full w-32 h-32 border-4 border-white shadow-lg"
          />
          <div>
            <h1 className="text-5xl font-extrabold">{user.first_name} {user.middle_name} {user.last_name} {user.suffix}</h1>
            <p className="text-xl text-purple-300">{user.job}</p>
          </div>
        </div>

        <div>
          <ContactInformation contact_information={user} />
        </div>


        {/* <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="bg-purple-700 p-4 rounded-lg shadow-lg space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-bold">JavaScript:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-9/12"></div></div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold">React:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-8/12"></div></div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold">Node.js:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-7/12"></div></div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold">PHP:</span> <div className="w-full h-2 bg-purple-300 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-6/12"></div></div>
          </div>
        </div>
      </div> */}


        {/* <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="bg-purple-700 p-4 rounded-lg shadow-lg">
          <p className="flex items-center gap-2">
            <FaBriefcase className="text-purple-200" />
            <span className="font-bold">Senior Developer - InnovateTech</span>
          </p>
          <p className="text-purple-300">March 2021 - Present</p>
          <p>Built scalable applications, improved system architecture, and mentored junior developers.</p>
        </div>
        <div className="bg-purple-700 p-4 rounded-lg shadow-lg mt-4">
          <p className="flex items-center gap-2">
            <FaBriefcase className="text-purple-200" />
            <span className="font-bold">Junior Developer - WebSolutions Inc.</span>
          </p>
          <p className="text-purple-300">July 2018 - February 2021</p>
          <p>Developed web applications, contributed to UI/UX improvements, and collaborated with cross-functional teams.</p>
        </div>
      </div> */}


        {/* <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="bg-purple-700 p-4 rounded-lg shadow-lg">
          <p className="flex items-center gap-2">
            <FaGraduationCap className="text-purple-200" />
            <span className="font-bold">Bachelor of Science in Computer Science</span>
          </p>
          <p className="text-purple-300">Stanford University - 2018</p>
        </div>
      </div> */}

        {/* <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <div className="bg-purple-700 p-4 rounded-lg shadow-lg">
          <p className="flex items-center gap-2">
            <FaAward className="text-purple-200" />
            <span className="font-bold">AWS Certified Solutions Architect</span>
          </p>
          <p className="text-purple-300">Issued May 2022 - AWS</p>
        </div>
      </div> */}
      </div>

    </div>
  ));
}
