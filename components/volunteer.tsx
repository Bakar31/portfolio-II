import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { volunteerExperiences } from "./constants";

export function Volunteer() {
  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Volunteer Experience 🤝
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {volunteerExperiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.organization} | {exp.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
