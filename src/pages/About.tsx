import { Button } from '@nextui-org/react';

const Home = () => {
  return (
    <div className="relative h-screen flex bg-cover bg-center"
         style={{ backgroundImage: 'url("/images/developer.jpg")' }}>
      
      {/* Left content */}
      <div className="flex-1 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-center p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to MyApp</h1>
          <p className="text-lg mb-6">
            Discover the amazing features of our platform and get started today!
          </p>
          <Button color="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
      
    
    </div>
  );
};

export default Home;
