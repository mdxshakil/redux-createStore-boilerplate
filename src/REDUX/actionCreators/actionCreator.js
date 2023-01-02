import { OneToFive } from "../actionTypes/actionTypes"

export const generateNumber = (numbers) => {
    return {type:OneToFive,payload:numbers}
}