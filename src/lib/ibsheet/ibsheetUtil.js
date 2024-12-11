import loader from '@ibsheet/loader'

export default {
  // IBSheet 시트 생성
  createIBSheet (loader, id, gubun, options) {
    try {
      const id2 = id.replace('ibsheetWrapper', 'ibsheet')

      // 공통 초기화
      if (!loader.registry.length) {
        loader.config({
          registry: [
            {
              name: 'ibsheet',
              baseUrl: 'src/ibsheet',
              locales: ['en', 'ko'],
              plugins: [
                // plugin 파일
                'dialog',
                'common',
                'excel'
              ]
              // license: '라이선스키'
            }
          ]
        })
        loader.load() // 실제 ibsheet 파일을 로드
      }

      // 공통 기존 제거
      loader.removeSheet(id2)

      // 조회
      if (gubun === 'select') {
        const optionsBase = {
          id: id2,
          el: id,
          options: {
            // 공통기능 설정 부분
            Cfg: {
              SearchMode: 1,
              SectionCanResize: 1,
              Style: 'IBMT',
              CanSort: true,
              CanColMove: true,
              CanColResize: true,
              HeaderCheck: 0, // 전체 체크 기능 (0: 꺼짐, 1: 켜짐)
              CanEdit: 9,
              Hover: 2, // 마우스 오버 하이라이트 (0: 꺼짐, 2: 켜짐)
              PageLength: 10, // 한 페이지에 보여줄 개수
              InfoRowConfig: {
                Visible: false
              },
              // "UnicodeByteMode": "utf-8",   // 한글의 바이트 수를 utf-8 형식에 맞춰 처리
              UnicodeByteMode: 3, // 한글 1자리의 바이트 사이즈를 3으로 설정
              Export: {
                Down2ExcelUrl: '/api/ibsheet/Down2Excel.do',
                Down2TextUrl: '/api/ibsheet/Down2Text.do'
                // "Url": "https://dev.ibleaders.com/api/ibsheet/v8/"
              }
            },
            Def: {
              Row: {
                CanFormula: true,
                // "CalcOrder": "StatusData,FloatDataHtmlPrefix,ColorDataHtmlPrefix",
                Height: 40
              },
              // "Header": {
              //      "Menu": ""
              // },
              Cols: {
                // "MinWidth": 30
              },
              Head: {
                Spanned: 1,
                CanEdit: 0,
                CanFocus: 0,
                Align: 'Left',
                TextColor: '#fff',
                Color: '#3d6299',
                CanExport: false
              },
              Foot: {
                Spanned: 1,
                CanEdit: 0,
                CanFocus: 0,
                Align: 'Left',
                TextColor: '#fff',
                Color: '#3d6299'
              }
            },
            // 틀고정 좌측 컬럼 설정
            LeftCols: [],
            // 중앙(메인) 컬럼 설정
            Cols: [],
            // 틀고정 우측 컬럼 설정
            RightCols: [],
            Head: [],
            Foot: [],
            // 이벤트
            // 참고 : https://www.ibsheet.com/v8/ibsheet/html/examples.html
            Events: {
              // 랜더링이 이뤄질 때 발생
              onRenderStart: function (evtParam) {
                // console.log(evtParam)
              },
              // 랜더링 종료 시 발생
              onRenderFinish: function (evtParam) {
                // console.log(evtParam)
              },
              // 시트가 최초 생성되어 랜더링 됐을 때 1회만 발생
              onRenderFirstFinish: function (evtParam) {
                // console.log(evtParam)
                const sheet = evtParam.sheet
                sheet.showMessage({
                  message: '검색 버튼을 눌러 주십시오',
                  type: 0, // 배경 블록 여부 (1: 켜기, 0: 끄기)
                  importance: 4
                })
              }
            }
          },
          data: []
        }
        if (options.Cfg) { optionsBase.options.Cfg = { ...optionsBase.options.Cfg, ...options.Cfg } }
        if (options.Def) { optionsBase.options.Def = { ...optionsBase.options.Def, ...options.Def } }
        if (options.LeftCols) { optionsBase.options.LeftCols = [...optionsBase.options.LeftCols, ...options.LeftCols] }
        if (options.Cols) { optionsBase.options.Cols = [...optionsBase.options.Cols, ...options.Cols] }
        if (options.RightCols) { optionsBase.options.RightCols = [...optionsBase.options.RightCols, ...options.RightCols] }
        if (options.Head) { optionsBase.options.Head = [...optionsBase.options.Head, ...options.Head] }
        if (options.Foot) { optionsBase.options.Foot = [...optionsBase.options.Foot, ...options.Foot] }
        if (options.Events) { optionsBase.options.Events = { ...optionsBase.options.Events, ...options.Events } }
        loader.createSheet(optionsBase).then((/* sheet */) => {
          // 아래 3줄 스타일 지정
          // const styleTag = $('IBSheetMessageStyle style').clone()
          // $('IBSheetMessageStyle style').remove()
          // $('head').prepend(styleTag)

          // sheet: IBSheetInstance
          // 시트 객체가 생성되지만, 시트가 그려지지는 않는 상태.
          // 주의 : 해당 구간에서 데이터 조회하면 안됨. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야 함
          // console.log(sheet)
        })
      }
    } catch (err) {
      console.log('IBSheet 생성 오류!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      console.log(err)
    }
  },

  // IBSheet 시트 데이터 초기화
  clearSheet (sheetId) {
    const targetSheet = this.getIBSheet(loader, sheetId)
    if (targetSheet) {
      targetSheet.loadSearchData([])
    }
  },

  // IBSheet 시트 객체 불러오기
  getIBSheet (loader, sheetId) {
    sheetId = sheetId.replace('ibsheetWrapper', 'ibsheet')
    const sheetList = loader.getIBSheetStatic()
    if (sheetList !== undefined) {
      for (const sheet of sheetList) {
        if (sheet != null && sheet.id === sheetId) {
          return sheet
        }
      }
    }
    return null
  },

  /* ibsheet 데이터 lv 별로 트리 데이터 만들어주는 함수 (ibsheet-common.js 에 들어있음) */
  convertTreeData (data7) {
    let targetArr
    const toString = Object.prototype.toString
    switch (toString.call(data7)) {
      case '[object Object]':
        if (!(data7.data || data7.Data) ||
          toString.call((data7.data || data7.Data)) !== '[object Array]') { return false }
        targetArr = (data7.data || data7.Data)
        break
      case '[object Array]':
        targetArr = data7
        break
      default:
        return false
    }

    let P = null,
      N = null,
      cLevel = 0,
      pLevel = 0
    targetArr = targetArr.reduce(function (accum, currentVal) {
      const cloneObj = clone(currentVal)

      if (P === null && N === null) P = N = accum
      cloneObj.lv = cloneObj.lv ? cloneObj.lv : cloneObj.lv
      cloneObj.HaveChild = cloneObj.haveChild ? cloneObj.haveChild : cloneObj.HaveChild
      cloneObj.lv = (cloneObj.lv - 0) ? (cloneObj.lv - 0) : 0

      if (accum.length === 0) {
        pLevel = parseInt(cloneObj.lv) + 1
        delete cloneObj.lv
        cloneObj.pData = accum
        accum.push(cloneObj)
        P = accum
      } else {
        cLevel = parseInt(cloneObj.lv) + 1
        if (pLevel === 0 || pLevel < cLevel) {
          if (pLevel !== 0) {
            P = N
          }
          pLevel = cLevel
        } else if (pLevel > cLevel) {
          for (let k = 0; k < (pLevel - cLevel); k++) {
            if (P.pData) {
              P = P.pData
            }
            if (P.lv < (cLevel - 1)) {
              break
            }
          }
          pLevel = cLevel
        }

        if (P !== accum && !P.Items) {
          P.Items = []
        }
        delete cloneObj.lv
        cloneObj.pData = P
        if (P === accum) P.push(cloneObj)
        else P.Items.push(cloneObj)
      }
      N = cloneObj

      return accum
    }, [])

    delete data7.Data
    data7.data = targetArr

    return data7
  }
}

const clone = (obj) => {
  if (obj === null || typeof (obj) !== 'object') return obj
  const copy = obj.constructor()
  for (const attr in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, attr)) {
      copy[attr] = clone(obj[attr])
    }
  }
  return copy
}
