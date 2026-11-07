
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

const skills = [
  "Call Of Duty Mobile",
  "Mobile Legend",
  "Valorant",
  "Monster Hunter: Rise",
  "Overwatch 2",
  "Monster Legends",
  "Roblox",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-white">

      {/* Page Heading */}
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
          Get to know me
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About <span className="text-[#D4AF37]">Me</span>
        </h1>

        <p className="text-gray-400 text-lg">
          A bit about my background, interests, and passion.
        </p>

        <div className="w-20 h-1 bg-[#D4AF37] rounded-full"></div>
      </div>

      {/* About Me Card */}
      <Card className="bg-[#171717] border border-[#D4AF37]/30 text-white rounded-2xl shadow-lg hover:border-[#D4AF37]/70 transition duration-300">

        <CardHeader>
          <CardTitle className="text-xl text-[#D4AF37]">
            Myself
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5 text-gray-300 leading-relaxed">

          <p>
            Hello! I'm Antonio M. Dy, a passionate Information Technology
            student currently pursuing my degree at Naga College Foundation.
            I have a strong interest in technology and enjoy exploring
            various aspects of the IT field, from software development
            to web technologies. My journey in IT has been driven by
            curiosity and a desire to understand how things work, which
            has led me to develop a solid foundation in programming,
            problem-solving, and critical thinking.
          </p>

          <p>
            When I'm not immersed in the world of technology, you can
            find me engaging in various activities that keep me energized
            and inspired. Whether it's diving into the latest manhwa
            releases, competing in gaming tournaments, or simply enjoying
            a good book, I believe that exploring different interests
            helps me grow as a person and brings a fresh perspective
            to my studies and projects.
          </p>

        </CardContent>
      </Card>

      {/* Games Card */}
      <Card className="bg-[#171717] border border-[#D4AF37]/30 text-white rounded-2xl shadow-lg hover:border-[#D4AF37]/70 transition duration-300">

        <CardHeader>
          <CardTitle className="text-xl text-[#D4AF37]">
            Games I Played
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-3">

          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] text-sm px-4 py-2 hover:bg-[#D4AF37] hover:text-black transition duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}

        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center pt-6">
        <p className="text-gray-500 text-sm tracking-widest">
          GETTING TO KNOW ME • ANTONIO M. DY
        </p>
      </div>

    </div>
  );
}
