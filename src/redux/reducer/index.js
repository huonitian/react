/**
 * Reducer 数据处理
 */
import { type } from './../action'
const initialState = {
    menuName: localStorage.getItem('cit') || '首页'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_MENU":
            localStorage.setItem('cit', action.menuName)
            return {
                ...state,
                menuName: action.menuName
            }
            break;
        default:
            return {
                ...state
            }
            break;
    }
}