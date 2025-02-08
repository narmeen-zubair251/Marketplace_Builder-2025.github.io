import { createClient } from "next-sanity";

const client = createClient({
    projectId : "mz07uwv1",
    dataset :"production",
    useCdn : true ,
    apiVersion: "2025-01-18"
})
export async function fetchData({query,params = {}} : {query : string , params?: any}){
    return await client.fetch(query,params)
}