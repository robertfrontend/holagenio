"use client";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/layout/Navigation";
import { useParams } from "next/navigation";
import { GetPostLostFoundById } from "@/api";
import Image from "next/image";

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const [isDataPost, setIsDataPost] = useState(null);
  const [isLoader, setisLoader] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await GetPostLostFoundById(slug);
        setIsDataPost(response);
        setisLoader(false);
      } catch (error) {
        alert("No found..");
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {isLoader && (
        <div className="flex flex-col text-center items-center h-screen justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {isDataPost && !isLoader && (
        <>
          <Navigation title={isDataPost.name} />
          <main className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <Image
                width={800}
                height={600}
                className="w-full h-[40vh] object-cover"
                src={isDataPost.image}
                alt={isDataPost.name}
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">{isDataPost.name}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Details</h2>
                    <p className="mb-2">
                      <span className="font-medium">Location:</span>{" "}
                      {isDataPost.location}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">
                        Zip Code: {isDataPost.zipcode}{" "}
                      </span>
                    </p>
                    <div className="flex">
                      <p className="mb-2">
                        <span className="font-medium">Status:</span>
                      </p>
                      <div
                        className={`badge badge-${isDataPost.type === "lost" ? "error" : "success"} gap-2`}
                      >
                        {" "}
                        {isDataPost.type}{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Description</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {isDataPost.description}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">
                      Additional Information
                    </h2>
                    <p className="mb-2">
                      <span className="font-medium">Category:</span>{" "}
                      {isDataPost.category}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Contact:</span>{" "}
                      {isDataPost.contactInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
