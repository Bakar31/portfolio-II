import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

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
      "CGPA: 3.79/4.00",
      "Relevant Coursework: Software Engineering, Artificial Intelligence, Robotics, Machine Learning Algorithms, Numerical Analysis & Statistics, Digital Signal Processing Vision, Embedded Systems, Automation",
    ],
  },
  {
    degree: "HSC, Science",
    institution:
      "President Professor Dr. Iajuddin Ahmed Residential Model School and College",
    duration: "March 2016 - April 2018",
    details: [],
  },
  // {
  //   degree: "SSC",
  //   institution: "Bajrajogini J.K High School",
  //   duration: "January 2011 - April 2016",
  //   details: [],
  // },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <h2 className="mb-8 text-3xl font-bold text-center">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
              <CardDescription>{edu.institution}</CardDescription>
              <CardDescription>{edu.duration}</CardDescription>
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
