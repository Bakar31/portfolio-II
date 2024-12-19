import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Education {
  degree: string;
  institution: string;
  duration: string;
  details: string[];
}

const educationData: Education[] = [
  {
    degree: "BSC in Mechatronics Engineering",
    institution: "Rajshahi University of Engineering & Technology",
    duration: "January 2019 - May 2024",
    details: [
      "CGPA: 3.79/4.00 (3rd)",
      "Relevant Coursework: Software Engineering, Artificial Intelligence, Robotics, Machine Learning Algorithms, Numerical Analysis & Statistics, Digital Signal Processing Vision, Embedded Systems, Automation",
    ],
  },
  {
    degree: "HSC, Science",
    institution:
      "President Prof. Dr. Iajuddin Ahmed Residential Model School & College",
    duration: "March 2016 - April 2018",
    details: [
      "Grade: 5.00/5.00",
      "Best Student Award",
      "1st runner-up in the district-level quiz competition (2017)",
      "1st runner-up in the district-level project showcasing competition (2017)",
    ],
  },
  {
    degree: "SSC",
    institution: "Bajrajogini J.K High School",
    duration: "January 2011 - April 2016",
    details: [
      "Grade: 5.00/5.00",
      "Best Student Award (4x)",
      "Best Science Student of the District (1x)",
      "Best Science Student of the Subdistrict (1x)",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <h2 className="mb-8 text-3xl font-bold text-center">Education</h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <span className="px-2 py-1 rounded-md font-bold text-blue-800">
                  {edu.degree}
                </span>
              </CardTitle>
              <CardDescription>
                <Badge
                  variant="outline"
                  className="bg-white text-sm px-2 py-1 rounded-full font-bold text-orange-800 mr-1"
                >
                  {edu.institution}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white text-sm px-2 py-1 rounded-full font-bold text-purple-800 mx-1"
                >
                  {edu.duration}
                </Badge>
              </CardDescription>
            </CardHeader>
            {edu.details.length > 0 && (
              <CardContent>
                <ul className="list-disc list-inside">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
