const LogoLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <img 
        src="/loader.png" 
        alt="Logo" 
        className="w-6 h-6 lg:w-16 lg:h-16 animate-bounce"
      />
    </div>
  );
};

export default LogoLoader;
