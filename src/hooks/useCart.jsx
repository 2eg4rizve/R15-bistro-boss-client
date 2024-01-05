import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {

    const axiosSecure =useAxiosSecure();

    const {user} =useAuth();

    const {refetch, data: cart = [] } = useQuery({

        queryKey:['cart',user?.email],
        queryFn: async() => {

            const result = await axiosSecure.get(`/carts?email=${user.email}`) // query patabo
            return result.data;

        }

    })

    return [cart,refetch];

};

export default useCart;