const experiences = [
  {
    role: 'AI Enabled Healthcare IT Technician Trainee',
    company: 'Per Scholas',
    period: '2026 to Present',
    description:
      'Currently completing intensive hands on training in enterprise IT support fundamentals. Mastering hardware/software troubleshooting, help desk operations, and networking. Successfully passed CompTIA A+ Core 1 (814/900) and preparing for Core 2, with upcoming specialized modules in AI enabled healthcare systems and IT compliance.',
    skills: ['IT Support', 'Hardware Troubleshooting', 'Networking', 'CompTIA A+'],
  },
  {
    role: 'Deployment Manager',
    company: 'Brightspeed (Contract)',
    period: 'Sep 2025 to Mar 2026',
    description:
      'Managed campaigns for residential internet installations across assigned regions. Coordinated technicians scheduling and logistics to ensure timely and efficient service delivery. Monitored installation progress resolved operational issues and ensured quality standards were met. Acted as a point of contact between field teams and internal stakeholders. Improved workflow efficiency by addressing bottlenecks and optimizing deployment processes.',
    skills: ['Project Coordination', 'Field Service Management'],
  },
  {
    role: 'Dispatch Associate',
    company: 'Zyp Run (Part time)',
    period: 'Jul 2023 to Jul 2025',
    description:
      'Managed real time scheduling and routing of drivers to ensure timely order fulfillment. Communicated with drivers and internal teams to resolve delivery and operational issues. Maintained accurate tracking and updates for active orders and service status. Supported workflow efficiency by prioritizing urgent requests and adjusting schedules as needed.',
    skills: ['Dispatching', 'Incident Response'],
  },
  {
    role: 'Product Specialist',
    company: 'NAGRA (Full time)',
    period: 'Apr 2024 to Oct 2024',
    description:
      'Installed and configured vehicle anti theft and recovery systems across dealership environments. Performed system diagnostics and troubleshooting to ensure proper device functionality and connectivity. Utilized deployment tools and floor plan data to optimize device placement and coverage. Collaborated with dealership staff to ensure seamless integration and minimal operational disruption. Provided technical support and resolved on site hardware and connectivity issues.',
    skills: ['Technical Support', 'Data Collection'],
  },
  {
    role: 'Retirement Planning Specialist',
    company: 'Senior Life Services (Full time)',
    period: 'Dec 2022 to Jun 2023',
    description:
      'Guided clients through personalized retirement planning strategies focusing on life insurance and long term financial security. Educated seniors on policy options and benefits to help them make informed decisions for their future.',
    skills: ['Retirement Planning', 'Financial Analysis'],
  },
  {
    role: 'Sales Engineer Trainee',
    company: 'Careerist (Apprenticeship)',
    period: 'Jul 2022 to Dec 2022',
    description:
      'Completed intensive training in SaaS sales engineering focusing on product demos technical presentations and customer success strategies. Gained hands on experience with CRM tools sales pipelines and cross functional collaboration between sales and engineering teams.',
    skills: ['Technical Demonstrations', 'SaaS Sales'],
  },
  {
    role: 'Front Desk Attendant',
    company: 'Crunch Fitness (Full time)',
    period: 'Aug 2021 to Jul 2022',
    description:
      'Provided excellent customer service by greeting members managing check ins and maintaining a clean organized front desk area. Supported membership inquiries scheduled appointments and ensured smooth daily operations within a fast paced fitness environment.',
    skills: ['Customer Service', 'Operations'],
  },
  {
    role: 'Solar Appointment Setter & Closer',
    company: 'Empower Energy Solutions (Full time)',
    period: 'Jul 2020 to May 2021',
    description:
      'Generated and closed qualified solar appointments through door to door outreach educating homeowners on renewable energy benefits and cost saving opportunities. Built rapport quickly handled objections and consistently met or exceeded weekly appointment and sales targets.',
    skills: ['Renewable Energy Systems', 'Lead Generation'],
  },
  {
    role: 'Lab Supervisor',
    company: 'University of Connecticut (Work Study Program Part time)',
    period: 'Sep 2019 to May 2020',
    description:
      'Served as a Lab Supervisor through the university work study program overseeing daily operations of the student computer lab. Assisted peers with technical troubleshooting maintained equipment functionality and ensured adherence to lab policies. Supported a collaborative learning environment while managing scheduling and resource organization.',
    skills: ['Technical Support', 'Computer Lab Management'],
  },
  {
    role: 'Summer Camp Counselor',
    company: 'The Salvation Army (Seasonal)',
    period: 'Jun 2015 to Aug 2019',
    description:
      'Supervised and mentored youth in a structured camp environment leading daily activities ensuring safety and promoting positive social development. Coordinated group games educational programs and conflict resolution while maintaining an encouraging and inclusive atmosphere.',
    skills: ['Youth Mentoring', 'Leadership'],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-zinc-100">Experience</h1>
        <p className="text-sm text-zinc-500">My professional journey and career highlights.</p>
      </div>

      <div className="relative space-y-6">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-zinc-800" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-sky-500 bg-zinc-900" />

            <div className="card-gradient rounded-xl p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-sm font-semibold text-zinc-200">{exp.role}</h3>
                <span className="text-[11px] text-zinc-500 font-mono">{exp.period}</span>
              </div>
              <p className="text-xs font-medium text-sky-400">{exp.company}</p>
              <p className="text-xs text-zinc-500 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
