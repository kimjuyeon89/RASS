import loader from '@ibsheet/loader'
import axios from 'axios'
// import { provide } from 'vue'

// loader를 이용한 시트 제거 - 페이지 닫을시 시트객체를 지운다. (componentWillUnmount, beforeDestroy 등 시)
export function beforeUnload (pageInfo) {
  for (let i = 0; i < pageInfo.pageSheets.length; i++) {
    loader.removeSheet(pageInfo.pageSheets[i])
  }
  return null
}

// GET 시트 데이터 조회
export const getSheetData = async (url, param) => {
  try {
    const response = await axios.get(url, param)
    return response.data
  } catch (error) {
    console.error('Error get data:', error)
  }
}

// POST 시트 데이터 조회
export const postSheetData = async (url, param) => {
  try {
    let reqSttResult = null
    reqSttResult = await axios.post(url, param)
    if (reqSttResult != null) {
      return reqSttResult.data
    }
  } catch (error) {
    console.error('Error post data:', error)
  }
}

// 공통 Cfg 설정
export const CFG = {
  SearchMode: 1,
  HeaderCheck: 1,
  Alternate: 2,
  Style: 'IBMT', // mint테마
  PageLength: 20, // 한 페이지에 보여줄 개수
  InfoRowConfig: {
    Visible: true,
    Layout: ['Paging', 'Count'], // 페이징 처리, 개수 표시
    Space: 'Bottom'
  }
}
