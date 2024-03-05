import React, { useState } from "react";
import { API } from "../../../libs/api";
import { IPostThread, PostThread } from "../../../interface/thread";

export default function PostThread() {
  const [form, setForm] = useState<IPostThread>({
    content: "",
    image: null,
  });

  // const [modal, setModal] = useState<PostThread>({
  //   content: "",
  //   image: null,
  // })

  // const handleModal = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setModal((prev) => ({
  //     ...prev,
  //     content: e.target.value,
  //   }));
  // }
  // const handleModalFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setModal((prev) => ({
  //     ...prev,
  //     image: e.target.files![0],
  //   }));
  // }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      content: e.target.value,
    }));
  };
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      image: e.target.files![0],
    }));
  };

  async function postModal(e: React.MouseEvent<HTMLButtonElement> | MouseEvent)  {
     e.preventDefault();

      const formData = new FormData();
      formData.append("content", form.content);
      formData.append("image", form.image as File);

      const response = await API.post("/thread", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response)
      window.location.reload();

    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      // if(form.content == '' && form.image == ''){
      //     return
      // }
      formData.append("content", form.content);
      formData.append("image", form.image as File);
 
      const response = await API.post("/thread", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response)
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleChangeFile,
    handleChange,
    handleSubmit,
    postModal,
    form,
  };
}
