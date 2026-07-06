import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  Briefcase,
  FolderGit2,
  Mail,
  User,
  Sparkles,
} from 'lucide-react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import { ScrollToTop } from './components';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/projects', icon: FolderGit2, label: 'Projects' },
  { to: '/experience', icon: Briefcase, label: 'Experience' },
  { to: '/contact', icon: Mail, label: 'Contact' },
];

export default function App() {
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 flex-col bg-black border-r border-zinc-800 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-zinc-100">Jamin Ware</h1>
            <p className="text-xs text-zinc-500">IT & Software</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800 text-sky-400'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <div className="card-gradient rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-medium text-zinc-300">Available for work</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Open to freelance projects and full time opportunities.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 md:px-8 border-b border-zinc-800/50 bg-[#2b2e33]/80 backdrop-blur-xl">
          <div className="md:hidden flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-zinc-100">Jamin Ware</span>
          </div>
          <h2 className="hidden md:block text-sm font-medium text-zinc-400">
            {navItems.find((item) => item.to === location.pathname)?.label ?? 'Home'}
          </h2>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
            <span className="text-xs text-zinc-500">Online</span>
          </div>
        </header>

        {/* Mobile Nav */}
        <nav className="md:hidden flex items-center gap-1 px-4 py-3 border-b border-zinc-800/50 overflow-x-auto">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-zinc-800 text-sky-400'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/article/learners-hub" element={<ArticlePage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
