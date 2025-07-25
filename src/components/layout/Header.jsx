import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useUser } from '../../hooks/useUser';
import { getAccentColorClasses } from '../../constants/menuItems';

export const Header = () => {
  const { theme, toggleTheme, accentColor } = useTheme();
  const { user } = useUser();
  const accentClasses = getAccentColorClasses(accentColor);

  return (
      <header className={`p-4 rounded-lg mb-6 transition-all duration-300 ${
          theme === 'light'
              ? 'bg-white text-gray-800 shadow-md'
              : 'bg-gray-800 text-white shadow-xl'
      }`}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`text-2xl font-bold ${accentClasses.text}`}>
              Dashboard
            </h1>
            <p className="text-sm opacity-75">
              Welcome back, {user.name}!
            </p>
          </div>

          <div className="flex items-center gap-3">
          <span className="text-sm">
            Current theme: <span className="font-semibold">{theme}</span>
          </span>
            <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                    theme === 'light'
                        ? 'bg-gray-100 hover:bg-gray-200'
                        : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;
