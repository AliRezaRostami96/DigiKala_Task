export const Translation = {
    details: "جزئیات",
    price: "قیمت",
    rate: "امتیاز",
    search: "جستجو",
    sort: "مرتب سازی",
    toman: "تومان",
    filter: "فیلتر"
}

export interface ImagesModel {
    storage_ids: any
    temporary_id: any
    thumbnail_url: any
    url: Array<string>
}

interface DataLayerModel {
    brand: string,
    category: string,
    dimension2: number,
    dimension6: number,
    dimension7: string,
    dimension9: number,
    dimension11: number,
    dimension20: string,
    metric6: number
}

interface ColorModel {
    id: number,
    title: string,
    hex_code: string
}

interface RatingModel {
    rate: number,
    count: number
}

export interface UrlModel {
    base: any,
    uri: string
}

interface DefaultVariantModel {
    color: ColorModel,
    digiclub: { point: number },
    digiplus: any,
    id: number,
    lead_time: number,
    price: PriceModel,
    properties: any,
    rank: number,
    rate: number,
    seller: any,
    shipment_methods: any,
    statistics: any,
    status: string,
    warranty: WarrantyModel
}

interface WarrantyModel {
    id: number, 
    title_fa: string, 
    title_en: string
}

interface PriceModel {
    discount_percent: number,
    is_incredible: Boolean,
    is_locked_for_digiplus: Boolean,
    is_promotion: Boolean,
    order_limit: number,
    rrp_price: number,
    selling_price: number,
}

export interface ProductModel {
    badges: Array<any>,
    colors: Array<ColorModel>,
    data_layer: DataLayerModel,
    default_variant: DefaultVariantModel,
    digiplus: any,
    has_quick_view: false,
    id: number,
    images: { main: ImagesModel },
    properties: any,
    rating: RatingModel,
    status: string,
    title_en: string,
    title_fa: string,
    url: UrlModel
}

export interface ResponseModel {
    data: {
        products: Array<ProductModel>
    },
    status: number
}
