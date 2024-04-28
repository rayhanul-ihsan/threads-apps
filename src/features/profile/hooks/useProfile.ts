import { API } from "../../../libs/api";
import { GET_USERS } from "../../../stores/rootReducer";
import { useAppDispatch } from "../../../stores/types/rootState";

export const useProfile = () => {
    const dispatch = useAppDispatch();
    
    async function check(){
        const response = await API.get("/auth/check" );
    }
    dispatch(GET_USERS(response.data));
}