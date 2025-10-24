import Image from 'next/image'

export default function Team() {
  const team = [
    {
      name: "Meheduz Zaman",
      role: "CEO & Founder",
      image: "/team/meheduz-zaman.jpg",
      description: "Visionary leader driving innovation and strategic growth"
    },
    {
      name: "Tanjumul Alom", 
      role: "CTO & Co-founder",
      image: "/team/tanjumul-alom.jpg",
      description: "Architect & deployment expert building scalable solutions"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate founders building the future of software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}