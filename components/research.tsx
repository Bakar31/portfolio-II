import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { publications } from "./constants";

// const ongoingResearch = [
//   "Exploring advanced techniques in medical image analysis using deep learning",
//   "Developing novel approaches for AI-generated content detection",
//   "Investigating the application of NLP in healthcare diagnostics",
// ];

export function Research() {
  return (
    <section
      id="research"
      className="py-20 mt-6 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Research
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-white/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Research Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              My research focuses on pushing the boundaries of artificial
              intelligence, particularly in the areas of deep learning, natural
              language processing, and computer vision. I am passionate about
              developing innovative AI solutions that can make a significant
              impact in healthcare, content analysis, and other critical
              domains.
            </p>
          </CardContent>
        </Card>

        {/* <Card className="bg-white/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Ongoing Research</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              {ongoingResearch.map((research, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {research}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card> */}

        <Card className="bg-white/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-800">Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <h4 className="font-semibold text-gray-800">
                    {pub.title}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </h4>
                  <p className="text-sm text-gray-600">{pub.journal}</p>
                  <p className="text-sm">
                    <span
                      className={`font-semibold ${
                        pub.status === "'Published'"
                          ? "'text-green-600'"
                          : "'text-yellow-600'"
                      }`}
                    >
                      {pub.status}
                    </span>{" "}
                    | {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
