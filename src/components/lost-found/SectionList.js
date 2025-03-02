import Image from "next/image";
import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { GetPostsLostFound } from "@/api";
import Link from "next/link";

const SectionList = () => {
  const [lostItems, setLostItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");

  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setIsLoader(true);
    const fetchLostItems = async () => {
      const items = await GetPostsLostFound();
      setLostItems(items);
      console.log(items, "items");
      setIsLoader(false);
    };

    fetchLostItems();
  }, []);

  const openItemDetails = (item) => {
    setSelectedItem(item);
  };

  const closeItemDetails = () => {
    setSelectedItem(null);
  };
  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <section>
      <Filter returnFilter={handleFilter} />
      <Search />
      <div className="text-center py-4">
        {isLoader && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
      </div>
      {!isLoader && <h4 className="text-xl font-light">All results</h4>}
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {lostItems.map(
            (item) =>
              (filter === "all" || filter === item.category) && (
                <Link
                  href={`/lost-found/${item.id}`}
                  key={item.id}
                  className="cursor-pointer relative my-4 group overflow-hidden rounded-lg"
                >
                  {item.image && (
                    <Image
                      src={item.image || ""}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/70 
                            to-transparent opacity-70 transition-opacity
                            duration-300 group-hover:opacity-90"
                  ></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div
                      className={`badge badge-${item.type === "lost" ? "error" : "success"} gap-2`}
                    >
                      {" "}
                      {item.type}{" "}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm">
                      {item.location} - {item.zipcode} ...
                    </p>
                    {/* <p className="text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {item.description.substring(0, 50)}...
                    </p> */}
                  </div>
                </Link>
              )
          )}
        </div>
      </div>

      {/* Item Details Modal */}
      {selectedItem && (
        <Details
          selectedItem={selectedItem}
          closeItemDetails={closeItemDetails}
        />
      )}
    </section>
  );
};

const Search = () => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder="Search by name, location, zip code..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70 cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};
const Details = ({ selectedItem, closeItemDetails }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full">
      {selectedItem.image && (
        <Image
          src={selectedItem.image}
          alt={selectedItem.name}
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-64 mb-4"
        />
      )}
      <h3 className="font-bold text-xl">{selectedItem.name}</h3>
      <p className="text-gray-600 text-lg">{selectedItem.description}</p>
      <p className="text-lg text-gray-500 mt-2">
        Location: {selectedItem.location}{" "}
      </p>
      <p className="text-lg text-gray-500 mt-2">
        Zip Code: {selectedItem.zipcode}{" "}
      </p>
      <p className="text-lg text-gray-500 mt-2">
        Contact: {selectedItem.contactInfo}{" "}
      </p>
      {selectedItem.reward && (
        <p className="text-md text-gray-500 mt-2">
          Reward:
          <span className="bg-green-200 text-green-500 py-2 px-2 mx-2 rounded-md font-semibold">
            ${selectedItem.reward}
          </span>
        </p>
      )}
      <div className="text-right">
        <button
          className="mt-4 btn btn-neutral text-lg text-white"
          onClick={closeItemDetails}
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
);

export default SectionList;
