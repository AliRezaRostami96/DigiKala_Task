import { ImagesModel, ProductModel, UrlModel } from "../products/setting";

export const Translations = {
    comments: "نظرات کاربران"
}
interface SpecificationModel {
    attributes: Array<{ title: string, values: Array<string> }>,
    title: string
}

interface CommentModel {
    advantages: any,
    body: string,
    created_at: string,
    disadvantages: any,
    files: any,
    id: number,
    is_anonymous: boolean
    is_buyer: boolean
    purchased_item: any,
    rate: number,
    reactions: { likes: number, dislikes: number }
    recommendation_status: string,
    title: string,
    user_name: string,
}


export interface ProductDetailsModel extends ProductModel {
    brand: any,
    breadcrumb: Array<{ title: string, url: UrlModel }>,
    category: any,
    comments_count: number,
    concurrent_viewers: number,
    last_comments: Array<CommentModel>,
    specifications: Array<SpecificationModel>,
    suggestion: { count: number, percentage: number },
    images: { list: Array<ImagesModel>, main: ImagesModel }
}

export interface ResponseModel {
    data: {
        product: ProductDetailsModel
    },
    status: number
}

export interface CommentContainerProps {
    comments: Array<CommentModel>
}