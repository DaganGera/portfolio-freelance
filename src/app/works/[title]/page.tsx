import React from "react";
import type { Metadata } from "next";
import { allProjects } from "@/utils/works";
import MainPage from "@/components/WorkDetail/MainPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function findProjectIndex(rawTitle: string) {
  const decodedTitle = decodeURIComponent(rawTitle);
  return allProjects.findIndex(
    (item) => item.title.toLowerCase() === decodedTitle.toLowerCase()
  );
}

export function generateMetadata({
  params,
}: {
  readonly params: { readonly title: string };
}): Metadata {
  const index = findProjectIndex(params.title);
  const project = allProjects[index];

  if (!project) {
    return { title: "Project Not Found | Markow Studios" };
  }

  const description = project.description1?.[0]?.slice(0, 155);

  return {
    title: `${project.title} | Markow Studios`,
    description,
    openGraph: {
      title: `${project.title} | Markow Studios`,
      description,
    },
  };
}

function WorkDetail({
  params,
}: {
  readonly params: { readonly title: string };
}) {
  const index = findProjectIndex(params.title);

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <MainPage project={allProjects[index]} index={index} />
      </main>
      <Footer />
    </div>
  );
}

export default WorkDetail;
