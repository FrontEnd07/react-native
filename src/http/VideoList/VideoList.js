import { $host } from "../index";

export const getListApi = async () => {
    try {
        const { data } = await $host.get(`users?offset=10&limit=20`)
        return data
    } catch (e) {
        console.log(e.message)
    }
}