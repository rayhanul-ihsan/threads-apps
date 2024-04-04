import { useState } from "react";
import { API } from "../../../libs/api";
import { fetchFollow } from "../../../stores/slices/followSlice";
import { useAppDispatch } from "../../../stores/types/rootState";

export const useFollow = () => {
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleFollow = async (id: number) => {
    try {
      const response = await API.post("/follow", {
        user: id,
      });
      dispatch(fetchFollow());
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnfollow = async (id: number) => {
    const confirmation = showAlert ? window.confirm("Are you sure you want to Unfollow?") : true;
    if (!confirmation) {
      return; // Jangan lanjutkan jika pengguna membatalkan
    }
    try {
      const response = await API.delete(`/unfollow?user=${id}`);
      setShowAlert(false);
      console.log(response.data);
      dispatch(fetchFollow());
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleFollow,
    handleUnfollow,
    setShowAlert,
  };
};
