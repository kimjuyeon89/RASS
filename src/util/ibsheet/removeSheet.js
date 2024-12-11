import loader from '@ibsheet/loader'
import $ibsheet from '@/lib/ibsheet/ibsheetUtil'

export const removeSheet = sheetId => {
  loader.removeSheet($ibsheet.getIBSheet(loader, sheetId))
}
