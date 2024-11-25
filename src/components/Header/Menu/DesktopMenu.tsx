import useNavigation from "./useNavigation";

const DesktopMenu = () => {
    const { handleRedirect } = useNavigation();
  
    return (
      <div className="hidden lg:flex items-center justify-center gap-10 py-2 px-4 sm:px-8 bg-gray-800 bg-opacity-50 backdrop-blur rounded-lg border border-gray-700 mx-auto">
            <button className="text-gray-300 hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" onClick={() => handleRedirect('/#about')}>About</button>
            <button className="text-gray-300 hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" onClick={() => handleRedirect('/projects')}>Projects</button>
            <button className="text-gray-300 hover:bg-gray-700 py-1 sm:px-4 px-2 rounded-md transition-all duration-300" onClick={() => handleRedirect('/#contact')}>Contact</button>
      </div>
    );
};

export default DesktopMenu;