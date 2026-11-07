
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GraduationCap, Award, CalendarDays } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Naga College Foundation",
    period: "2025 - Present",
    description:
      "Focused on software development, data structures, databases, algorithms, and web development.",
    achievements: [
      "High School Graduate",
      "Dean's List (1st Semester & 2nd Semester in First Year)",
      "NC II in Computer Systems Servicing (CSS)",
    ],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto text-white">

      {/* Page Heading */}
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
          My Academic Journey
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          My <span className="text-[#D4AF37]">Education</span>
        </h1>

        <p className="text-gray-400 text-lg">
          Academic background, achievements, and formal training.
        </p>

        <div className="w-20 h-1 bg-[#D4AF37] rounded-full"></div>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">

        {educationList.map((item, idx) => (
          <Card
            key={idx}
            className="bg-[#171717] border border-[#D4AF37]/30 text-white rounded-2xl shadow-lg hover:border-[#D4AF37]/70 transition duration-300"
          >

            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                {/* Degree and Institution */}
                <div className="flex items-start gap-4">

                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]">
                    <GraduationCap className="h-7 w-7" />
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-xl leading-snug">
                      {item.degree}
                    </CardTitle>

                    <CardDescription className="text-gray-400">
                      {item.institution}
                    </CardDescription>
                  </div>

                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#D4AF37] whitespace-nowrap">
                  <CalendarDays className="h-4 w-4" />
                  {item.period}
                </div>

              </div>
            </CardHeader>

            <CardContent className="space-y-6">

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="h-px bg-[#D4AF37]/20"></div>

              {/* Achievements */}
              <div className="space-y-3">

                <h4 className="text-sm font-semibold flex items-center gap-2 text-[#D4AF37]">
                  <Award className="h-5 w-5" />
                  Key Highlights & Achievements
                </h4>

                <ul className="space-y-3">
                  {item.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="text-[#D4AF37] mt-1">✦</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </CardContent>
          </Card>
        ))}

      </div>

      {/* Footer */}
      <div className="text-center pt-6">
        <p className="text-gray-500 text-sm tracking-widest">
          LEARNING • GROWING • ACHIEVING
        </p>
      </div>

    </div>
  );
}
