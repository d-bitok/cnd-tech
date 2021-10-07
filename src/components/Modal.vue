<template>
  <div class="modal flex">
      <div class="modal-content">
          <img src="@/assets/cnd_Upload.svg" alt="">
          <p class="bg-modal">
              Are You Sure You Want To Exit?
              <br>
              Your Changes Will Not Be Saved!
          </p>
          <div class="actions flex bg-modal">
            <button @click="closeModal" class="blue">Return</button>
            <button @click="closeRequest" class="red">Close</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'modal',
    methods: {
        ...mapMutations(
            [
                "TOGGLE_REQUEST",
                "TOGGLE_MODAL",
                // "TOGGLE_EDIT_REQUEST",
            ]
        ),

        closeModal() {
            this.TOGGLE_MODAL();
        },
        closeRequest() {
            this.TOGGLE_MODAL();
            this.TOGGLE_REQUEST();
            // if (this.editRequest) {
            //     this.TOGGLE_EDIT_REQUEST();
            // }
        }
    },
    computed: {
        // ...mapState([
        //     "editRequest"
        // ]),
    },

}
</script>

<style lang="scss" scoped>
.modal {
    z-index: 100;
    position: fixed;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    .modal-content {
        border-radius: 20px;
        padding: 48px 32px;
        max-width: 450px;
        background-color: #252945; // 536dfe
        color: #fff;

        img {
            height: 250px;
            width: 300px;
        }

        .bg-modal {
            background-color: #252945;
        }

        p {
            text-align: center;
        }

        .actions {
            margin-top: 24px;
            button {
                flex: 1;
            }
        }
    }
}
</style>