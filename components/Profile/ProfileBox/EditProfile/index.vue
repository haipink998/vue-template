<template>
  <div class="col-sm-7">
     <div class="element-wrapper">
        <div class="element-box">
          <form id="formValidate">
            <div class="element-info">
              <div class="element-info-with-icon">
                <div class="element-info-icon">
                  <div class="os-icon os-icon-wallet-loaded"></div>
                </div>
                <div class="element-info-text">
                  <h5 class="element-inner-header">
                    Profile Settings
                  </h5>
                  <div class="element-inner-desc">
                    Validation of the form is made possible using powerful validator plugin for bootstrap. <a href="http://1000hz.github.io/bootstrap-validator/" target="_blank">Learn more about Bootstrap Validator</a>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <InputEmail />
            <div class="row">
              <div class="col-sm-6">
                <InputPassword />
              </div>
              <div class="col-sm-6">
                <InputPasswordConfirm />
              </div>
            </div>
            <InputRegular />
            <InputMutilSelect />
            <!-- -->
            <fieldset class="form-group">
              <legend><span>Section Example</span></legend>
              <div class="row">
                <div class="col-sm-6">
                  <InputFirstName />
                </div>
                <div class="col-sm-6">
                  <InputLastName />
                </div>
              </div>
              <div class="row">
                  <div class="col-sm-6">
                    <InputDateOfBirth />
                  </div>
                  <div class="col-sm-6">
                    <InputSocial />
                  </div>
              </div>
                  <InputDatePicker />
                  <InputNote />
            </fieldset>
              <InputFormCheck />
              <InputButtonSubmit />
          </form>
        </div>
     </div>
  </div>
</template>

<script>
import ButtonSubmit from "./Input/Input-ButtonSubmit";
import InputDatePicker from "./Input/Input-DatePicker";
import InputSocial from "./Input/Input-Social";
import InputDateOfBirth from "./Input/Input-DateOfBirth";
import InputLastName from "./Input/Input-LastName";
import InputFirstName from "./Input/Input-FirstName";
import InputMutilSelect from "./Input/Select-MutilSelect";
import InputRegular from "./Input/Select-Regular";
import InputPasswordConfirm from "./Input/Input-PasswordConfirm";
import InputPassword from "./Input/Input-Password";
import InputEmail from "./Input/Input-Email";
import InputNote from "./Input/Input-Note";
import InputFormCheck from "./Input/Input-FormCheck";
import InputButtonSubmit from "./Input/Input-ButtonSubmit";
export default {
  components: {
    ButtonSubmit,InputDatePicker,InputSocial,InputDateOfBirth,InputLastName,
    InputFirstName,InputMutilSelect,InputRegular,InputPasswordConfirm,InputPassword,
    InputEmail,InputNote,InputFormCheck,InputButtonSubmit
  }
}
</script>

<style>

</style>