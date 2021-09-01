import * as types from "../types"

export const storeGlobalCodes = (data) => {
    return { type: types.STORE_GLOBAL_CODES, payload: data }
}
