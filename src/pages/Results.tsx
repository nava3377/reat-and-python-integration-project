
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Layout from "@/components/Layout";

interface ResultData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface LocationState {
  data: ResultData;
  originalText: string;
  option: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  // If no data is found, redirect to the form
  if (!state?.data) {
    navigate("/form");
    return null;
  }

  const { data, originalText, option } = state;
  
  // In a real application, we would display real processed results
  // Here we're simulating different result displays based on the option
  const getResultContent = () => {
    switch (option) {
      case "summarize":
        return (
          <div>
            <p className="text-lg font-medium mb-2">Summary</p>
            <p className="mb-4">{data.body.split(" ").slice(0, 20).join(" ")}...</p>
          </div>
        );
      case "analyze":
        // Simulate sentiment analysis with a random score
        const score = Math.random();
        let sentiment, color;
        
        if (score > 0.7) {
          sentiment = "Positive";
          color = "text-green-600";
        } else if (score > 0.4) {
          sentiment = "Neutral";
          color = "text-amber-600";
        } else {
          sentiment = "Negative";
          color = "text-red-600";
        }
        
        return (
          <div>
            <p className="text-lg font-medium mb-2">Sentiment Analysis</p>
            <div className="flex items-center gap-3 mb-4">
              <span>Overall sentiment:</span>
              <span className={`font-semibold ${color}`}>{sentiment}</span>
              <span className="text-gray-500">({(score * 100).toFixed(1)}%)</span>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${score > 0.7 ? 'bg-green-500' : score > 0.4 ? 'bg-amber-500' : 'bg-red-500'}`} 
                style={{ width: `${score * 100}%` }}
              ></div>
            </div>
          </div>
        );
      case "translate":
        return (
          <div>
            <p className="text-lg font-medium mb-2">Translation</p>
            <p className="mb-4">{data.body}</p>
            <p className="text-sm text-gray-500">Translated from English to Spanish</p>
          </div>
        );
      case "enhance":
        return (
          <div>
            <p className="text-lg font-medium mb-2">Enhanced Version</p>
            <p className="mb-4">{data.body}</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Grammar Improved</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Vocabulary Enhanced</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Readability Score: 85%</span>
            </div>
          </div>
        );
      default:
        return <p>{data.body}</p>;
    }
  };
  
  // Format the option name for display
  const formatOption = (opt: string) => {
    return opt.charAt(0).toUpperCase() + opt.slice(1);
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto animate-fade-in">
        <Card className="shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Your Results</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {getResultContent()}
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-700 mb-2">Original Text</h3>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-md text-sm">
                {originalText}
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
            <Button 
              onClick={() => navigate("/form")}
              variant="outline"
            >
              Process Another Text
            </Button>
            <div className="flex gap-3">
              <Button 
                variant="secondary"
                onClick={() => {
                  // In a real app, this would trigger a download of results
                  alert("Download functionality would be implemented here");
                }}
              >
                Download Results
              </Button>
              <Button 
                className="bg-indigo-500 hover:bg-indigo-600"
              >
                Share Results
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Results;
