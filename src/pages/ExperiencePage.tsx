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
    role: 'Sales & Field Team Lead',
    company: 'Brightspeed',
    period: '2025 to 2026',
    description:
      'Directed field operations and optimized workflows for fiber optic installation projects. Executed technical procedures for equipment handling and maintained strict safety and operational standards.',
    skills: ['Field Operations', 'Fiber Optics', 'Workflow Optimization'],
  },
  {
    role: 'Dispatch & Delivery Associate',
    company: 'Zyp Run',
    period: '2023 to 2025',
    description:
      'Streamlined logistics and routing systems to achieve high volume order fulfillment targets in high pressure environments. Resolved delivery issues via structured problem solving.',
    skills: ['Logistics', 'Routing', 'Problem Solving'],
  },
  {
    role: 'Product Specialist (Field Installation)',
    company: 'Nagra Kudelski Group',
    period: '2024',
    description:
      'Partnered with DevOps and sales teams to execute lot management system installations at automotive dealerships. Deployed and configured connected devices, verifying full functionality prior to handoff.',
    skills: ['Device Configuration', 'Field Installation', 'Compliance Auditing'],
  },
  {
    role: 'Retirement Planning Specialist',
    company: 'Senior Life Services',
    period: 'Dec 2022 to Jun 2023',
    description:
      'Guided clients through personalized retirement planning strategies, focusing on life insurance and long-term financial security. Educated clients on policy options.',
    skills: ['Financial Analysis', 'Client Relations', 'Retirement Planning'],
  },
  {
    role: 'Sales Engineer Trainee',
    company: 'Careerist',
    period: 'Jul 2022 to Dec 2022',
    description:
      'Completed intensive training in SaaS sales engineering. Gained hands on experience with CRM tools, sales pipelines, product demos, and cross functional collaboration between sales and engineering teams.',
    skills: ['SaaS', 'Technical Demos', 'CRM Tools'],
  },
  {
    role: 'Front Desk Attendant',
    company: 'Crunch Fitness',
    period: 'Aug 2021 to Jul 2022',
    description:
      'Provided excellent customer service, managed check ins, supported membership inquiries, and ensured smooth daily operations within a fast paced environment.',
    skills: ['Customer Service', 'Operations'],
  },
  {
    role: 'Solar Appointment Setter & Closer',
    company: 'Empower Energy Solutions',
    period: 'Jul 2020 to May 2021',
    description:
      'Generated and closed qualified solar appointments through door to door outreach, educating homeowners on renewable energy systems. Handled objections and consistently met sales targets.',
    skills: ['Lead Generation', 'Sales', 'Renewable Energy'],
  },
  {
    role: 'Lab Supervisor (Work Study)',
    company: 'University of Connecticut',
    period: 'Sep 2019 to May 2020',
    description:
      'Oversaw daily operations of the student computer lab. Assisted peers with technical troubleshooting, maintained equipment functionality, and ensured adherence to lab policies.',
    skills: ['Technical Support', 'Lab Management', 'Troubleshooting'],
  },
  {
    role: 'Summer Camp Counselor',
    company: 'The Salvation Army',
    period: 'Jun 2015 to Aug 2019',
    description:
      'Supervised and mentored youth in a structured environment, coordinating educational programs and resolving conflicts while maintaining an inclusive atmosphere.',
    skills: ['Leadership', 'Mentoring'],
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
