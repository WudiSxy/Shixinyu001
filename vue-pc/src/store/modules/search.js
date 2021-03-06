import {reqGetProductList} from '@api/search'

export default {
    state: {
        productList: {
            trademarkList: [],
            attrsList:[],
            goodsList:[]
        },
    },
    getters: {
        trademarkList(state) {
            return state.productList.trademarkList;
        },
        attrsList(state) {
            return state.productList.attrsList;
        },
        goodsList(state) {
            return state.productList.goodsList;
        },
    },
    actions: {
        async reqGetProductList({ commit }, data = {}) {
            const productList = await reqGetProductList(data);
            commit("GET_PRODUCT_LIST",productList)
        },
    },
    mutations: {
        GET_PRODUCT_LIST(state, productList) {
            state.productList = productList;
        }
    }
}