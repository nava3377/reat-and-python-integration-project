
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Text with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Submit your text and our intelligent API will process it, providing insights and enhancements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/form')} 
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/about')} 
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-indigo-600 text-xl font-bold">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Submit Your Text</h3>
            <p className="text-gray-600">
              Enter your text into our simple form. We accept everything from short phrases to longer paragraphs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-indigo-600 text-xl font-bold">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">API Processing</h3>
            <p className="text-gray-600">
              Our advanced API analyzes your text, processing it according to your selected options.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-indigo-600 text-xl font-bold">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">View Results</h3>
            <p className="text-gray-600">
              Receive detailed results and insights based on your submitted text.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
