import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { certifications } from "./constants";

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Certifications 📜</h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2">
          {certifications.map((cert, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm flex items-center"
            >
              <span>
                {cert.name} [{cert.platform}]
              </span>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
