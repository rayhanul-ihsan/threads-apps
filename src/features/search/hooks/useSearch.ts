import React, { useEffect } from "react";
import { API } from "../../../libs/api";
import { GET_USERS } from "../../../stores/rootReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../stores/types/rootState";

export function useSearch() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.user);
  const [filteredUsers, setFilteredUsers] = React.useState(users);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get("/users");
        dispatch(GET_USERS(response.data));
        // console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const searchUsers = (searchQuery: string) => {
    if (searchQuery.length > 0) {
      const filtered = users.filter((user) => {
        return user.user_name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  };
  
  // Menambahkan useEffect untuk memperbarui filteredUsers saat users berubah
  useEffect(() => {
    setFilteredUsers(users);
  }, []);

  return {
    searchUsers,
    filteredUsers,
    users,
  };
}
