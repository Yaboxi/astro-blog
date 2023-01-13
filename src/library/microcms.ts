//SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Blog = {
    id: string;
    meta: [];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    tags: [];
};
export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
};
export type Tag = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
};
export type TagResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Tag[];
};

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
        queries,
    });
};

export const getTags = async (
    queries?: MicroCMSQueries) => {
    return await client.get<TagResponse>({
        endpoint: "tags",
        queries,
    });
};

export const getTagDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail<Tag>({
        endpoint: "tags",
        contentId,
        queries,
    });
};
