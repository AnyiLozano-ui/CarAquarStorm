import { Home, MapPin, Wrench, MessageCircle, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explorar', icon: MapPin },
    { id: 'services', label: 'Servicios', icon: Wrench },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="flex justify-around items-center py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 flex-1 py-2 transition"
            >
              <Icon
                size={24}
                className={isActive ? 'text-purple-600' : 'text-gray-400'}
              />
              <span
                className={`text-xs font-medium ${
                  isActive ? 'text-purple-600' : 'text-gray-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNavigation;
