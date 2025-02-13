"use client";

import { useDropzone } from "react-dropzone";
import { CloudUpload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImageUploader({ onDrop }) {
  const [preview, setPreview] = useState(null);

   const { getRootProps, getInputProps } = useDropzone({
     onDrop: (acceptedFiles) => {
       const file = acceptedFiles[0];
       if (file) {
         setPreview(URL.createObjectURL(file));
         onDrop(file);
       }
     },
     accept: "image/*",
   });

  return (
    <div className="space-y-7 bg-[#052228] border border-[#07373F] rounded-3xl p-6">
      <label
        htmlFor="file"
        className="form_label"
      >
        Upload Profile Photo
      </label>
      <div className="w-full h-40 flex justify-center items-center bg-black/20 group">
        {preview && (
          <div className="absolute z-0 w-56 h-48 overflow-hidden rounded-xl border-[4px] border-[#2AA4AF]">
            <Image
              src={preview}
              alt="Uploaded"
              fill
            />
          </div>
        )}
        <div
          {...getRootProps()}
          className={`relative w-56 h-48 flex flex-col items-center justify-center border-[4px] border-[#2AA4AF] rounded-xl cursor-pointer bg-[#0F3B42]  transition duration-300 ${
            preview
              ? "z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-black/30"
              : "opacity-100 visible hover:bg-[#14545E]"
          }`}
        >
          <input
            {...getInputProps()}
            id="file"
          />
          <CloudUpload className="w-8 h-8 text-white opacity-80" />
          <p className="text-white text-sm opacity-80 mt-2">
            Drag & drop or click to upload
          </p>
        </div>
      </div>
    </div>
  );
}
