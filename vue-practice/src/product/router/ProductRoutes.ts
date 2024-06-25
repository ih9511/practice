import ProductListPage from "@/product/pages/list/ProductListPage.vue"
import ProductReadPage from "@/product/pages/read/ProductReadPage.vue"
import ProductRegisterPage from "../pages/register/ProductRegisterPage.vue"

const ProductRoutes = [
    {
        path: '/product/list',
        name: 'ProductListPage',
        component: ProductListPage
    },

    {
        path: '/product/read/:productId',
        name: 'ProductReadPage',
        components: {
            default: ProductReadPage
        },
        props: {
            default: true
        }
    },

    {
        path: '/product/register',
        name: 'ProductRegisterPage',
        component: ProductRegisterPage
    }
]

export default ProductRoutes