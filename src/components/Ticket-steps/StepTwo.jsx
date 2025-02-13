"use client";

import { Mail } from "lucide-react";
import ButtonGroup from "../ButtonGroup";
import { useAppContext } from "../context";
import ImageUploader from "../ImageUploader";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

const StepTwo = () => {
  const {setCurrentStep, setTicketInfo} = useAppContext()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    watch,
    setValue,
    reset,
  } = useForm({ mode: 'onChange' });

  const formValues = watch();

  useEffect(() => {
    const savedForm = localStorage.getItem("formData");
    if (savedForm) {
      const parsedData = JSON.parse(savedForm);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formValues));
  }, [formValues]);
  

  const Submit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file)

    formData.append("upload_preset", "tickets");
    const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
    const response = await fetch(URL, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
    setTicketInfo(prev => {
      return {
        ...prev,
        attendeeDetials: {
          profileImgUrl: response.secure_url,
          name: data.name,
          email: data.email,
          specialRequest: data.request || '',
        },
      };
    })
    localStorage.removeItem("formData");
    setCurrentStep((prev) => (prev !== 3 ? prev + 1 : prev));
  };

  return (
    <form
      className="form_container"
      onSubmit={handleSubmit(Submit)}
    >
      <div>
        <Controller
          name="file"
          control={control}
          rules={{ required: "Image is required" }} // Validation rule
          render={({ field: { onChange } }) => (
            <ImageUploader onDrop={onChange} />
          )}
        />
        {errors.file && (
          <p className="text-red-500 mt-1">{errors.file.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="form_label"
        >
          Enter your name
        </label>
        <input
          {...register("name", { required: "Name is required!" })}
          id="name"
          type="text"
          className="input_fields"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="form_label"
        >
          Enter your email*
        </label>
        <div className="relative">
        <Mail className="absolute left-2 top-1/2 -translate-y-1/2"/>
        <input
          {...register("email", { required: "Please provide your Email" })}
          id="email"
          type="email"
          className="input_fields !pl-10"
        />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="request"
          className="form_label"
        >
          Special request?
        </label>
        <textarea
          id="request"
          className="input_fields p-3 h-[124px]"
          placeholder="Textarea"
        />
      </div>
      <ButtonGroup
        buttonOne="Back"
        buttonTwo="Get My Free Ticket"
        disabled={!isValid}
        type='submit'
        isSubmitted={isSubmitted}
      />
    </form>
  );
};

export default StepTwo;
