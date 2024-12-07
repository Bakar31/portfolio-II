import { Badge } from "@/components/ui/badge";

const certifications = [
  "Python [Kaggle]",
  "Intermediate Python [Datacamp]",
  "Divide and Conquer, Sorting Searching, Randomized Algorithms(Ongoing)[Coursera]",
  "Data Visualization with Python [Coursera]",
  "Machine Learning Explainability [Kaggle]",
  "Neural Networks and Deep Learning [Coursera]",
  "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization [Coursera]",
  "Convolutional Neural Networks [Coursera]",
  "Advanced Deep Learning with Keras [Datacamp]",
  "Natural Language Processing [Coursera]",
  "Natural Language Processing in TensorFlow [Coursera]",
  "Introduction to Embedded Machine Learning [Coursera]",
  "OpenCV 102 — Basic Image Processing Operations [PyImageSearch]",
  "Object Detection 201 — Fundamentals of Deep Learning [PyImageSearch]",
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Certifications</h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2">
          {certifications.map((cert, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {cert}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
