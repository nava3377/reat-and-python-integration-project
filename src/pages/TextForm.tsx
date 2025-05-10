
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";

// This would normally come from an API or environment variable
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

const TextForm = () => {
  const [text, setText] = useState("");
  const [option, setOption] = useState("summarize");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to process",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, we'd send the actual text and option to the API
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: option,
          body: text,
          userId: 1,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to process text");
      }
      
      const data = await response.json();
      
      // Navigate to results page with the response data
      navigate("/results", { state: { data, originalText: text, option } });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your text. Please try again.",
        variant: "destructive",
      });
      console.error("Error processing text:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto animate-fade-in">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Process Your Text</CardTitle>
            <CardDescription>
              Enter the text you want to analyze and select a processing option
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="text-input">Your Text</Label>
                <Textarea
                  id="text-input"
                  placeholder="Enter text here..."
                  className="min-h-[200px] resize-y"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="option">Processing Option</Label>
                <Select value={option} onValueChange={setOption}>
                  <SelectTrigger id="option">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summarize">Summarize</SelectItem>
                    <SelectItem value="analyze">Analyze Sentiment</SelectItem>
                    <SelectItem value="translate">Translate</SelectItem>
                    <SelectItem value="enhance">Enhance Writing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-indigo-500 hover:bg-indigo-600"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Process Text"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default TextForm;
