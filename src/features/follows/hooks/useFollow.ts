import { API } from "../../../libs/api";
import { fetchFollow } from "../../../stores/slices/followSlice";
import { useAppDispatch } from "../../../stores/types/rootState";


export const useFollow = () => {
  const dispatch = useAppDispatch();

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
        try {
          const response = await API.delete(`/unfollow?user=${id}`);
          console.log(response.data);
          dispatch(fetchFollow());
        } catch (error) {
          console.log(error);
        }
      };

      return{
        handleFollow,
        handleUnfollow
      }
}