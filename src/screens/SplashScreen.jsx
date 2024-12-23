import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SplashScreen() {
    const navigate = useNavigate();

    // Simulate a loading or splash screen effect
    useEffect(() => {
      const timer = setTimeout(() => {
        // Navigate to the Home screen after 3 seconds
        navigate('/firstboard');
      }, 5000); // 3 seconds
  
      return () => clearTimeout(timer); // Clean up the timer
    }, [navigate]);
    return (
        <div className="bg-custom-blue w-full h-screen m-0 flex items-center justify-center">
            <div className="relative">
                <div className="relative">
                    <h1 className="font-bold text-8xl text-white z-20 relative">
                        Learner
                    </h1>
                    <div className="h-24 w-24 rounded-full bg-yellow-500 absolute right-[-0.3rem] top-4 z-0"></div>
                </div>

            </div>
        </div>
    )
}

export default SplashScreen