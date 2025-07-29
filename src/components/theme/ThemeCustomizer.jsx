import { useTheme, getContainerClasses } from '../../hooks/useTheme';
import { accentColors, getAccentColorClasses } from '../../constants/menuItems';

export const ThemeCustomizer = () => {
  const { theme, accentColor, changeAccentColor } = useTheme();
  const accentClasses = getAccentColorClasses(accentColor);
  
  const handleColorChange = (colorValue) => {
    changeAccentColor(colorValue);
  };
  
  return (
    <div className={getContainerClasses(theme)}>
      <h2 className={`text-xl font-semibold mb-4 ${accentClasses.text}`}>
        Theme Customizer
      </h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Accent Color:</h3>
          <div className="flex gap-2">
            {accentColors.map((color) => (
              <button
                key={color.value}
                onClick={() => handleColorChange(color.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  accentColor === color.value 
                    ? 'border-gray-400 scale-110' 
                    : 'border-gray-300 hover:scale-105'
                } ${color.classes.bg}`}
                title={color.name}
                aria-label={`Set accent color to ${color.name}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-sm opacity-75">
          <p>Current accent: <span className="font-semibold">{accentColor}</span></p>
          <p>Current theme: <span className="font-semibold">{theme}</span></p>
        </div>
      </div>
    </div>
  );
};
