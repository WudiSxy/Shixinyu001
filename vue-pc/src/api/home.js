import request from '@utils/request'


export const reqGetBaseCategoryList = () => {
    console.log('132')
    return request({
        method: "GET",
        url:"/product/getBaseCategoryList"
    })
}