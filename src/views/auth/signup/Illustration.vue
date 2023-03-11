<template>
  <main class="main-content mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"
            >
              <div class="card card-plain">
                <div class="card-header pb-0 text-left">
                  <h4 class="font-weight-bolder">Sign Up</h4>
                  <p class="mb-0">Enter your email and password to register</p>
                </div>
                <div class="card-body pb-3">
                  <label>Name</label>
                  <argon-input
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    @change="(val) => form.name = val"
                    :value="form.name"
                    @input="(val) => form.name = val"
                  />
                  <label>Email</label>
                  <argon-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    @change="(val) => form.email = val"
                    :value="form.email"
                    @input="(val) => form.email = val"
                  />
                  <label>Password</label>
                  <argon-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    @change="(val) => form.password = val"
                    :value="form.password"
                    @input="(val) => form.password = val"
                    
                  />
                  <label>Confirm Password</label>
                  <argon-input
                    id="confirm_password"
                    v-model="form.confirm_password"
                    type="confirm_password"
                    placeholder="confirm Password"
                    aria-label="Confirm Password"
                    @change="(val) => form.confirm_password = val"
                    :value="form.confirm_password"
                    @input="(val) => form.confirm_password = val"
                  />
                  <argon-checkbox>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      checked
                    >
                      I agree the
                      <a
                        href="../../../pages/privacy.html"
                        class="text-dark font-weight-bolder"
                        >Terms and Conditions</a
                      >
                    </label>
                  </argon-checkbox>
                  <div class="text-center">
                    <argon-button
                      color="success"
                      variant="gradient"
                      full-width
                      class="mt-4 mb-0"
                      @click="register()"
                      >Sign up</argon-button
                    >
                  </div>
                </div>
                <div class="card-footer text-center pt-0 px-sm-4 px-1">
                  <p class="mb-4 mx-auto">
                    Already have an account?
                    <router-link
                      :to="{ name: 'signin' }"
                      class="text-success font-weight-bolder"
                    >
                      Sign in
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-success h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="
                  background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-ill.jpg');
                  background-size: cover;
                "
              >
                <span class="mask bg-success opacity-4"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  Your journey starts here
                </h4>
                <p class="text-white position-relative">
                  Just as it takes a company to sustain a product, it takes a
                  community to sustain a protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";

export default {
  name: "SigninIllustration",
  components: {
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      }
    }
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.toggleDefaultLayout();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.toggleDefaultLayout();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleDefaultLayout"]),
    register() {
      this.$store.dispatch("auth/register", this.form);
      console.log("store");
    }
  },
};
</script>
