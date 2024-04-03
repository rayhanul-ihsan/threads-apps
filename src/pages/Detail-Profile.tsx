import React, { useEffect, useState } from "react";
import LayoutProfile from "../layouts/LayoutProfile";
import ProfileFromSuggest from "../features/profile/components/ProfileFromSuggest";
import { useParams } from "react-router-dom";
import { API } from "../libs/api";
import { IUser } from "../interface/user";
import { useAppSelector } from "../stores/types/rootState";

const DetailProfile: React.FC = () => {
  let { id } = useParams();
  const [getUser, setGetUser] = useState<IUser>();
  const auth = useAppSelector((state) => state.auth); 

  const getUserSuggest = async () => {
    if(!!id) {
      const response = await API.get(`/user/${id}`);
      console.log("data",response.data.data)
      setGetUser(response.data.data);
    } else {
      setGetUser(auth);
    }
  };


  useEffect(() => {
    getUserSuggest()
  }, []);

  useEffect(() => {
    getUserSuggest()
  }, [id])

  return (
    <>
      <LayoutProfile>
        <ProfileFromSuggest 
          id={getUser?.id}
          bio={getUser?.bio}
          full_name={getUser?.full_name}
          image_cover={getUser?.image_cover}
          profile_picture={getUser?.profile_picture}
          user_name={getUser?.user_name}
        />
      </LayoutProfile>
    </>
  );
};

export default DetailProfile;
