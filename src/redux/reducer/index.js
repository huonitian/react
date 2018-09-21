/**
 * Reducer 数据处理
 */
import { type } from './../action'
const initialState = {
    menuName: localStorage.getItem('cit') || '首页',
    userName: localStorage.getItem('name') || ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            localStorage.setItem('cit', action.menuName)
            return {
                ...state,
                menuName: action.menuName
            }
        case type.USERNAME:
            localStorage.setItem('name', action.userName)
            return {
                ...state,
                userName: action.userName
            }
        case type.EXIT_CLEAR:
            localStorage.clear()
            return {
                ...state,
                menuName: '首页',
                userName: ''
            }
        default:
            return {
                ...state
            }
    }
}