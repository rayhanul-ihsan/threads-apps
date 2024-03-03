import React, { useEffect, useState } from "react";
import LayoutProfile from "../layouts/LayoutProfile";
import ProfileDetailComp from "../future/profile/components/ProfileDetailComp";
import ProfileFromSuggest from "../future/profile/components/ProfileFromSuggest";
import { useParams } from "react-router-dom";
import { API } from "../libs/api";
import { IUser } from "../interface/user";
import { useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";
import { Text } from "@chakra-ui/react";

const DetailProfile: React.FC = () => {
  let { id } = useParams();
  const [getUser, setGetUser] = useState<IUser>();
  const auth = useSelector((state: RootState) => state.auth);
  console.log(!!id)

  const getUserSuggest = async () => {
    if(!!id) {
      const response = await API.get(`/user/${id}`);
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
        {/* <ProfileDetailComp/> */}
        <ProfileFromSuggest 
          bio={getUser?.bio}
          full_name={getUser?.full_name}
          image_cover={getUser?.image_cover}
          profile_picture={getUser?.profile_picture}
          user_name={getUser?.user_name}
        />
        {/* <Text>tes</Text> */}
      </LayoutProfile>
    </>
  );
};

export default DetailProfile;
