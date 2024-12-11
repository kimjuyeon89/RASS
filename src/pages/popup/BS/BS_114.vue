<template>
  <Popup :maxWidth="870" :visible="popupVisible" class="fixed">
    <SectionTitle
      title="협의의견 조회"
      titleIcon="shield"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <BaseTable class="rowType">
        <colgroup>
          <col style="width: 120px" />
          <col style="width: 230px" />
          <col style="width: 120px" />
          <col style="width: 330px" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-center">작성기관</th>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="" />
            </td>
            <th scope="row" class="text-center">작성날짜</th>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">작성자</th>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="" />
            </td>
            <th scope="row" class="text-center">의견구분</th>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">이슈내용</th>
            <td class="text-center" colspan="3">
              <div class="tableBox">
                <div class="tableBoxItem">
                  <BaseTextarea inlineStyle="height: 230px" />
                </div>
                <div class="tableBoxItem hasImage">
                  <TableImageBox
                    :src="getImageUrl('../../assets/popup/img-map.jpg')"
                    value="첨부파일 이미지.png"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </BaseTable>
    <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="닫기" styleClassName="md pd-sm bdGray" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import TableImageBox from '@/components/sub/table/TableImageBox.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'

const popupVisible = ref(true)
</script>
