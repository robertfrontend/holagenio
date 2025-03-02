import React, { useState, useEffect } from "react";
import { Button } from "@/components/layout/ui";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";
import { PostCreateLostFound } from "@/api";
import { uploadFile } from "@/firebase/firebaseConfig";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation"; // Change this import
import { PartyPopper } from "lucide-react";
import Link from "next/link";

const FormInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full"
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);

const FormTextArea = ({ label, placeholder, value, onChange, ...props }) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <textarea
      className="textarea textarea-bordered w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    ></textarea>
  </div>
);

export default function CreateForm() {
  const router = useRouter();
  const [itemType, setItemType] = useState("");
  const [isObject, setIsObject] = useState(false);
  const [isPet, setIsPet] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    reward: "",
    image: null,
    zipcode: "",
    contactInfo: "", // New field
    sourceInfo: "", // New field
    isExternalSource: false,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isExternal, setIsExternal] = useState(false);
  const [isPostSuccess, setPostSuccess] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  // Add this useEffect hook
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleTypeChange = (e) => {
    setItemType(e.target.value);
  };

  const handleCheckboxChange = (type) => {
    if (type === "object") {
      setIsObject(!isObject);
      setIsPet(false);
    } else if (type === "pet") {
      setIsPet(!isPet);
      setIsObject(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIsExternalSource = () => {
    setIsExternal(!isExternal);
    setFormData({ ...formData, isExternalSource: !isExternal });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const user = auth.currentUser;

    if (!user) {
      toast.error("You must be logged in to create a post");
      return;
    }

    if (!itemType || (!isObject && !isPet)) {
      toast.error("Please select both type and category");
      return;
    }

    setIsLoader(true);
    try {
      let imageUrl = "";
      if (formData.image) {
        // Generar un nombre único para la imagen
        const uniqueFileName = `${Date.now()}_${formData.image.name}`;
        imageUrl = await uploadFile(formData.image, uniqueFileName);
      }

      const postData = {
        ...formData,
        type: itemType,
        category: isObject ? "object" : "pet",
        image: imageUrl,
        userId: user.uid,
      };

      await PostCreateLostFound(postData);
      toast.success("Post created successfully!");
      setPostSuccess(true);
      setIsLoader(false);

      // Reset form or redirect user
    } catch (error) {
      setPostSuccess(false);
      setIsLoader(false);
      console.error("Error creating post:", error);
      toast.error("Failed to create post. Please try again.");
    }
  };

  return (
    <div>
      {!isLoader && isPostSuccess ? (
        <PostSuccess />
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* ... (keep all the form elements from the original Page component) */}
          <div className="form-control">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="object-cover rounded-lg"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              </div>
            )}
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              className="select select-bordered w-full"
              onChange={handleTypeChange}
              value={itemType}
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="lost">Lost item/animal</option>
              <option value="found">Found item/animal</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <div className="flex space-x-4">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isObject}
                  onChange={() => handleCheckboxChange("object")}
                />
                <span className="label-text ml-2">Object</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isPet}
                  onChange={() => handleCheckboxChange("pet")}
                />
                <span className="label-text ml-2">Pet</span>
              </label>
            </div>
          </div>
          <FormInput
            label={isObject ? "Item name" : "Pet name"}
            placeholder={isObject ? "e.g. iPhone, Wallet" : "e.g. Max, Fluffy"}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <FormTextArea
            label="Description"
            placeholder="Provide detailed description..."
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <FormInput
            label="Location"
            placeholder="Where was it lost/found?"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <FormInput
            label="Zip code"
            placeholder="Zip code"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
          />
          {itemType === "lost" && (
            <FormInput
              label="Reward amount (optional)"
              type="number"
              placeholder="Enter amount"
              name="reward"
              value={formData.reward}
              onChange={handleInputChange}
            />
          )}

          <FormInput
            label="Contact Information"
            placeholder="Phone number or email"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleInputChange}
          />

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">
                Is this post from an external platform?
              </span>
              <input
                type="checkbox"
                className="checkbox"
                name="isExternalSource"
                checked={formData.isExternalSource}
                onChange={handleIsExternalSource}
              />
            </label>
          </div>

          {formData.isExternalSource && (
            <FormInput
              label="Source Information"
              placeholder="Where did you get this information?"
              name="sourceInfo"
              value={formData.sourceInfo}
              onChange={handleInputChange}
            />
          )}

          <div className="text-center py-4">
            {isLoader && (
              <div className="flex flex-col text-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
                Creating post...
              </div>
            )}
          </div>
          <Button
            type="submit"
            styles="w-full btn bg-green-500 border-none hover:bg-green-500 text-white"
            disabled={isLoader}
          >
            Create
          </Button>
        </form>
      )}
    </div>
  );
}

const PostSuccess = () => (
  <div className="w-full h-[50vh] bg-green-50 flex flex-col justify-center items-center">
    <div className="text-center">
      <PartyPopper className="text-green-500 my-2" size={90} />
    </div>
    <div className="flex flex-col text-center items-center">
      <p className="font-semibold text-2xl">Post created successfully!</p>
      <p className="mt-2 text-xl">
        Your post has been created and is now visible to others.
      </p>
    </div>
    <Link
      href="/lost-found"
      className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
    >
      Go to Home Page
    </Link>
  </div>
);
