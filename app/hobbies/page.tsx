
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Gamepad2,
  Music,
  Dumbbell,
  BookOpen,
  Tv,
  CircleDot,
} from "lucide-react";

const hobbies = [
  {
    title: "Reading Manhwa",
    icon: BookOpen,
    description:
      "Enjoying the latest manhwa releases and discussing them with fellow fans.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description:
      "Enthusiast for strategy, RPG games, and first-person shooters.",
  },
  {
    title: "Music",
    icon: Music,
    description:
      "I love listening to various genres of music.",
  },
  {
    title: "Fitness",
    icon: Dumbbell,
    description:
      "Staying active through regular workout sessions and weekend runs.",
  },
  {
    title: "Table Tennis",
    icon: CircleDot,
    description:
      "Playing table tennis with friends and participating in local tournaments.",
  },
  {
    title: "Watching K-Dramas and Movies",
    icon: Tv,
    description:
      "I enjoy watching K-dramas and movies, exploring different genres and storytelling styles.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-white">

      {/* Page Heading */}
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
          Beyond Technology
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hobbies & <span className="text-[#D4AF37]">Interests</span>
        </h1>

        <p className="text-gray-400 text-lg">
          A look at the things I enjoy doing outside of coding.
        </p>

        <div className="w-20 h-1 bg-[#D4AF37] rounded-full"></div>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {hobbies.map((hobby) => {
          const Icon = hobby.icon;

          return (
            <Card
              key={hobby.title}
              className="bg-[#171717] border border-[#D4AF37]/30 text-white rounded-2xl shadow-lg hover:border-[#D4AF37] hover:-translate-y-1 transition duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3">

                  {/* Hobby Icon */}
                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl text-[#D4AF37]">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Hobby Title */}
                  <CardTitle className="text-lg text-white">
                    {hobby.title}
                  </CardTitle>

                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          );
        })}

      </div>

      {/* Footer */}
      <div className="text-center pt-6">
        <p className="text-gray-500 text-sm tracking-widest">
          MY INTERESTS • MY PERSONALITY • MY PASSION
        </p>
      </div>

    </div>
  );
}
