export interface BoardState {
    // 대표적인 예이기도 함
    // boards는 복수형이므로 배열 타입 (리스트를 의미)
    // '변수: 타입' 형태로 표기함
    boards: Board[]
    board: Board | null
}

// TypeScript는 특이한 형식이 있음
// 타입을 반드시 명시해야 한다는 것임
export interface Board{
    boardId: number
    title: string
    writer: string
    content: string
    regDate: string
    updDate: string
}

// 좋은 점도 있지만 단점도 있음
// 너무 엄격한 문법이라는 단점이 존재함
// 너무 엄격하다 못해 컴파일이 안되는 경우가 있음
const state: BoardState = {
    boards: [],
    board: null
}

export default state