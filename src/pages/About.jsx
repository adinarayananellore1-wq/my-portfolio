import profileImg from '../assets/profile.jpg'

function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub']
  const interests = ['Web Development', 'Problem Solving', 'Travel & Exploration', 'Photography']

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div className="md:col-span-2">
          <p className="text-blue-600 font-semibold mb-2">About Me</p>
          <h1 className="text-3xl font-bold text-gray-900">I'm Adhi</h1>
          <h2 className="text-xl text-blue-600 font-semibold mb-4">Frontend Developer</h2>
          <p className="text-gray-600 mb-6">
            I am a passionate Frontend Developer with a strong interest in
            building creative and interactive web applications. I love
            learning new technologies and turning ideas into real projects.
          </p>

          <ul className="text-gray-700 space-y-2 mb-6">
            <li><strong>Name:</strong> Adhi</li>
            <li><strong>Location:</strong> Hyderabad, India</li>
            <li><strong>Email:</strong> youremail@example.com</li>
            <li><strong>Education:</strong> B.E./B.Tech</li>
          </ul>

          <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
            Download Resume
          </button>
        </div>

        <img
          src={profileImg}
          alt="Adhi"
          className="w-full h-64 rounded-2xl object-cover object-top"
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-3">Education</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
            <p className="font-medium">B.E./B.Tech</p>
            <p className="text-sm text-gray-500">Your College Name, City</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Interests</h3>
          <ul className="text-gray-700 space-y-2">
            {interests.map(function (item) {
              return <li key={item}>- {item}</li>
            })}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(function (skill) {
            return (
              <span
                key={skill}
                className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About