import { useAsyncFn } from "react-use";
import ItemApi from "../apis/ItemApi";

function useItem() {
    const [itemResult, fetchItem] = useAsyncFn(
        async (code: string) => {
            const client = new ItemApi();

            const response = await client.getItem(code);

            return response;
        }
    )

    return  {
        itemResult,
        fetchItem
    }
}

export default useItem;