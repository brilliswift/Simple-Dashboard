import { useTheme } from '../../hooks/useTheme';
import { menuItems, getAccentColorClasses } from '../../constants/menuItems';

export const Sidebar = () => {
  const { theme, accentColor } = useTheme();
  const accentClasses = getAccentColorClasses(accentColor);
  
  const handleMenuClick = (id) => {
    console.log(`Menu clicked: ${id}`);
    // Add your navigation logic here
  };
  
  return (
    <aside className={`p-4 rounded-lg transition-all duration-300 ${
      theme === 'light' 
        ? 'bg-white text-gray-800 shadow-md' 
        : 'bg-gray-800 text-white shadow-xl'
    }`}>
      <h2 className={`text-lg font-semibold mb-4 ${accentClasses.text}`}>
        Menu
      </h2>
      
      <nav className="space-y-2">
        {menuItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => handleMenuClick(id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              theme === 'light'
                ? 'hover:bg-gray-100 text-gray-700'
                : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
