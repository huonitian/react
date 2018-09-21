/**
 * Action类型
 */
export const type = {
    SWITCH_MENU: 'SWITCH_MENU',
    USERNAME: 'USERNAME',
    EXIT_CLEAR: 'EXIT_CLEAR'
}

export function switchMenu(menuName) {
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}

export function userName(userName) {
    return {
        type: type.USERNAME,
        userName
    }
}

export function exitClear() {
    return {
        type: type.EXIT_CLEAR
    }
}