import { useEffect } from "react";
import DaftarFollowers from "./Daftar-followers";
import { RootState } from "../stores/types/rootState";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../stores/slices/searchSlice";

export default function DftrFollowers() {
  const dispatch = useDispatch();

  const getSearch = useSelector((state: RootState) => state.suggest);

  useEffect(() => {
    dispatch(fetchSearch());
  }, []);

  const handleGetUsers = () => {
    dispatch(fetchSearch());
  };
  return (
    <>
      {getSearch?.data.data.map((item) => (
        <DaftarFollowers
          key={item.id}
          id={item.id}
          name={item.full_name}
          username={item.user_name}
          image={item.profile_picture}
        />
      ))}
    </>
  );
}
