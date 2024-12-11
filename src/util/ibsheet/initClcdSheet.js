/*
    sheetId : ibsheet 각 아이디
    sheetOptions: ibsheet 공통 설정 및 헤더 설정하는 옵션들
    sheetData: 렌더링 할 데이터
*/

import loader from '@ibsheet/loader'
import $ibsheet from '@/lib/ibsheet/ibsheetUtil'

export const initClCdSheet = async (sheetId, sheetOptions, sheetData) => {
  const options = {
    ...sheetOptions,
    Events: {
      onRenderFirstFinish: async function () {
        $ibsheet.getIBSheet(loader, sheetId).loadSearchData(sheetData)

        console.log(sheetData)
      },
      onFocus: () => {},
    },
  }
  $ibsheet.createIBSheet(loader, sheetId, 'select', options)
}
