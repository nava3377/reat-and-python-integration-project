
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-center">About TextProcessor</h1>
        
        <div className="prose prose-indigo max-w-none">
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            TextProcessor is a powerful tool designed to help you analyze, transform, and enhance your text using advanced AI technologies.
            Whether you need to summarize long documents, analyze sentiment, translate content, or improve your writing,
            our platform provides the tools you need to work more efficiently with text.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Our Features</h2>
          
          <ul className="space-y-4 list-disc pl-6 text-gray-700">
            <li>
              <strong>Text Summarization:</strong> Condense long articles or documents into concise summaries that capture the essential information.
            </li>
            <li>
              <strong>Sentiment Analysis:</strong> Understand the emotional tone behind texts to gauge public opinion, customer satisfaction, or audience reactions.
            </li>
            <li>
              <strong>Translation Services:</strong> Break language barriers by translating your content between multiple languages while maintaining context and meaning.
            </li>
            <li>
              <strong>Writing Enhancement:</strong> Improve your writing with suggestions for grammar, style, clarity, and vocabulary.
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">How It Works</h2>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our platform uses advanced natural language processing (NLP) algorithms to analyze and process text. 
            Simply input your text, select the desired processing option, and our system will analyze the content 
            and provide results in seconds.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Get Started Today</h2>
          
          <p className="text-gray-700 leading-relaxed">
            Ready to transform how you work with text? Try our text processing tool now and experience 
            the difference that advanced AI-powered text analysis can make for your content.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
