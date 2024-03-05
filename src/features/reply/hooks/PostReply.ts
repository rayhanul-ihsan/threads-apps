import React, { useState } from "react";
import { IPostThread } from "../../../interface/thread";
import { API } from "../../../libs/api";

export default function PostReply() {
    const [form, setForm] = useState<IPostThread>({
        content: "",
        image: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            content: e.target.value,
        }))
    }

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            image: e.target.files![0],
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const formData = new FormData();

            formData.append("content", form.content);
            formData.append("image", form.image as File);

            const response = await API.post("/reply/thread", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }   
            })
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    return {
        handleChangeFile,
        handleChange,
        handleSubmit,
        form,
    }
}