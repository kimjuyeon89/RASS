<template>
  <!-- drawerDepth1List -->
  <nav class="drawerDepth1List">
    <div
      :class="`drawerDepth1Item ${oneDepthIsOpen === oneDepthIndex ? 'active' : ''}`"
      v-for="(oneDepthItem, oneDepthIndex) in linksList"
      :key="oneDepthItem.id"
    >
      <section class="drawerItemDepth1Section">
        <div
          class="drawerItemDepth1SectionBox"
          @click="oneDepthIsOpen = oneDepthIndex"
        >
          <!-- icon -->
          <i
            v-if="oneDepthItem.icon"
            :class="`ico ${oneDepthItem.icon}${oneDepthIsOpen === oneDepthIndex ? '-active' : ''}`"
          />

          <span class="drawerDepth1Label">{{ oneDepthItem.title }}</span>
        </div>

        <div class="drawerDepth2List">
          <div
            v-for="(twoDepthItem, twoDepthIndex) in oneDepthItem.links"
            :key="twoDepthItem.title"
            :class="`drawerDepth2Item ${twoDepthIsOpen === twoDepthIndex ? 'active' : ''}`"
          >
            {{ console.log(twoDepthItem) }}

            <section class="drawerItemDepth2Section">
              <div
                class="drawerItemDepth2SectionBox"
                @click="
                  twoDepthIsOpen =
                    twoDepthIsOpen === twoDepthIndex ? '' : twoDepthIndex
                "
              >
                <span class="drawerDepth2Label">{{ twoDepthItem.title }}</span>

                <!-- icon -->
                <i class="ico twoDepthItemArrowDown"></i>
              </div>

              <div
                class="drawerDepth3List"
                v-if="twoDepthItem.links.length > 0"
              >
                <div
                  v-for="(
                    threeDepthItem, threeDepthIndex
                  ) in twoDepthItem.links"
                  :key="threeDepthItem.title"
                  :class="`drawerDepth3Item ${threeDepthIsSelect === threeDepthIndex ? 'active' : ''}`"
                >
                  <div
                    class="drawerItemDepth3Section"
                    @click="threeDepthIsSelect = threeDepthIndex"
                  >
                    <span class="drawerDepth3Label">{{
                      threeDepthItem.title
                    }}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </nav>
  <!-- //drawerDepth1List -->
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'DepthItem',
})

const { linksList } = defineProps({
  linksList: {
    type: Object,
    required: true,
  },
})

const oneDepthIsOpen = ref(0)
const twoDepthIsOpen = ref(null)
const threeDepthIsSelect = ref(null)
</script>
