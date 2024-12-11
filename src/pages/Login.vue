<template>
  <div class="loginContainer">
    <div class="loginInner">
      <h1 class="loginLogo">
        <img
          width="204"
          height="21"
          src="../assets/logo/logo-204x21.png"
          alt="LX 한국국토정보공사"
        />
      </h1>

      <div class="loginRight">
        <div class="loginBox">
          <div class="loginBoxInner">
            <div class="loginIcons">
              <i class="ico global"></i>
              <i class="ico setting"></i>
              <i class="ico login-location"></i>
            </div>

            <div class="loginBoxLogo">
              <img
                width="140"
                height="32"
                src="../assets/logo/logo-rass.svg"
                alt="RASS"
              />
              <h2 class="loginBoxLogoText">주소정보 지원시스템</h2>
              <p class="loginBoxLogoEngText">
                Road Name Address Support System
              </p>
            </div>

            <form class="loginInputBox">
              <div class="loginInputGroup">
                <BaseInput
                  inputType="text"
                  styleClassName="loginInput"
                  placeholder="아이디"
                />
                <BaseInput
                  styleClassName="loginInput"
                  placeholder="패스워드"
                  inputType="password"
                />
                <BaseCheckbox
                  id="idCheck"
                  styleClassName="loginCheckbox"
                  :isLabel="true"
                  label="아이디저장"
                  :checked="true"
                />
              </div>

              <div class="loginInputGroup">
                <BaseButton styleClassName="btnLogin" label="로그인" />
              </div>
            </form>
          </div>
        </div>

        <footer class="loginFooter">
          <div class="loginFooterLogo">
            <img
              width="115"
              height="20"
              src="../assets/logo/logo-login-footer.png"
              alt="LX 한국국토정보 공사"
            />
          </div>

          <div class="loginFooterInfo">
            <address class="loginFooterAddress">
              전북특별자치도 전주시 덕진구 기지로 120(중동)
            </address>
            <a class="loginFooterTel" href="tel:044-715-5524">044-715-5524</a>
          </div>

          <p class="loginCopy">Copyright © RASS.All Rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'

defineOptions({
  name: 'CommonLogin',
})
</script>
