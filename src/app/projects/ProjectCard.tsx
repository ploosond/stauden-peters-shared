// components/ProjectCard.js

import Link from "next/link";

interface Props {
  title: string;
  category: string;
  image: string;
  id: string;
  tags: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  tags,
  id,
}: Props) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md w-full mx-auto">
        <div className="relative md:h-64 rounded-t-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="hover:scale-[103%] object-cover h-full transition-transform duration-300"
          />
        </div>

        <div className="p-4 md:p-6 ">
          <div className="flex items-center justify-between mb-2 text-sm text-blue-900  font-medium">
            {category}
          </div>

          <h3 className="text-xl font-semibold text-priColor mb-2">{title}</h3>
          <div className="px-3 py-1 rounded-full text-sm w-fit bg-blue-100 text-blue-900">{tags}</div>
        </div>
      </div>
    </Link>
  );
}
