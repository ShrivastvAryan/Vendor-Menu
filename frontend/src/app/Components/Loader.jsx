const LogoLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <img 
        src="/loader.png" 
        alt="Logo" 
        className="w-16 h-16 lg:w-56 lg:h-56 animate-bounce"
      />
    </div>
  );
};

export default LogoLoader;
