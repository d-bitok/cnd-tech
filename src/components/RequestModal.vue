<template>
  <div class="request-wrap flex flex-column">
      <form @submit.prevent="submitForm" class="request-content">
        <!-- <Loading v-show="loading" /> -->
        <h1 v-if="!editRequest">New Request</h1>
        <h1 v-else>Edit Request</h1>
        
        <!-- Request Sender -->
        <div class="request-from flex flex-column">
              <h4>Request From</h4>
                <div class="input flex flex-column">
                    <label for="senderCompany">Company Name</label>
                    <input type="text" required id="senderCompany" v-model="senderCompany">
                </div>
              <div class="location-details flex">
                <div class="input flex flex-column">
                    <label for="senderCountry">Country</label>
                    <input type="text" required id="senderCountry" v-model="senderCountry">
                </div>
                <div class="input flex flex-column">
                    <label for="senderCity">City</label>
                    <input type="text" required id="senderCity" v-model="senderCity">
                </div>
              </div>
              <div class="location-details flex">
                <div class="input flex flex-column">
                    <label for="senderCode">ZIP Code</label>
                    <input type="text" required id="senderCode" v-model="senderCode">
                </div>
                <div class="input flex flex-column">
                    <label for="senderAddress">Street Address</label>
                    <input type="text" required id="senderAddress" v-model="senderAddress">
                </div>
              </div>
              <div class="location-details flex">
                <div class="input flex flex-column">
                    <label for="senderPhone">Phone Number</label>
                    <input type="text" required id="senderPhone" v-model="senderPhone">
                </div>
              <div class="input flex flex-column">
                <label for="senderEmailAddress">Email Address</label>
                <input type="email" required id="senderEmailAddress" v-model="senderEmailAddress" />
              </div>
              </div>
        </div>
        
        <!-- Work Details -->
        <div class="request-work flex flex-column">
            <div class="payment flex">
                <div class="input flex flex-column">
                    <label for="requestDate">Request Date</label>
                    <input disabled type="text" id="requestDate" v-model="requestDate" />
                </div>
                <div class="input flex flex-column">
                    <label for="paymentDueDate">Payment Due</label>
                    <input disabled type="text" id="paymentDueDate" v-model="paymentDueDate" />
                </div>
            </div>
            <div class="input flex flex-column">
                <label for="paymentTerms">Payment Terms</label>
                <select required type="text" id="paymentTerms" v-model="paymentTerms">
                    <option value="5">Due in 5 Days</option>
                    <option value="10">Due in  10 Days</option>
                    <option value="15">Due in  15 Days</option>
                    <option value="20">Due in  20 Days</option>
                    <option value="25">Due in  25 Days</option>
                    <option value="30">Due in  30 Days</option>
                </select>
            </div>
            <div class="input flex flex-column">
                <label for="paymentMethod">Payment Method</label>
                <select required type="text" id="paymentMethod" v-model="paymentMethod">
                    <option value="M_PESA">M-PESA</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="input flex flex-column">
            <label for="productDescription">Product Description</label>
            <input required type="text" id="productDescription" v-model="productDescription" />
            </div>
            <div class="work-items">
            <h3>Item List</h3>
            <table class="item-list">
                <tr class="table-heading flex">
                <th class="item-name">Item Name</th>
                <th class="qty">Qty</th>
                <th class="price">Price</th>
                <th class="total">Total</th>
                </tr>
                <tr class="table-items flex" v-for="(item, index) in requestItemList" :key="index">
                <td class="item-name"><input type="text" v-model="item.itemName" /></td>
                <td class="qty"><input type="text" v-model="item.qty" /></td>
                <td class="price"><input type="text" v-model="item.price" /></td>
                <td class="total flex">KShs. {{ (item.total = item.qty * item.price) }}</td>
                <img @click="deleteRequestItem(item.id)" src="@/assets/icon-delete.svg" alt="" />
                </tr>
            </table>

            <div @click="addNewRequestItem" class="flex button">
                <img src="@/assets/icon-plus.svg" alt="" />
                Add New Item
            </div>
            </div>
        </div>

        <!-- Save/Exit -->
        <div class="save flex">
            <div class="left">
            <button type="button" @click="closeRequest" class="red">Cancel</button>
            </div>
            <div class="right flex">
            <button v-if="!editRequest" type="submit" @click="saveDraft" class="dark-purple">Save Draft</button>
            <button v-if="!editRequest" type="submit" @click="publishRequest" class="purple">Create Request</button>
            <button v-if="editRequest" type="sumbit" class="purple">Update Request</button>
            </div>
        </div>
      </form>
  </div>
</template>

<script>
import db from '../firebase/firebase';
import { mapMutations } from 'vuex'
import { uid } from "uid"
export default {
    name: 'requestModal',
    data() {
        return {
            dateOptions: { year: 'numeric', month: 'short', day: 'numeric' },
            docId: null,
            loading: null,
            senderEmailAddress: null,
            senderCity: null,
            senderAddress: null,
            senderCode: null,
            senderCountry: null,
            senderPhone: null,
            senderCompany: null,
            requestDate: null,
            paymentDueDate: null,
            paymentTerms: null,
            paymentMethod: null,
            productDescription: null,
            requestPending: null,
            requestDraft: null,
            requestItemList: [],
            requestTotal: 0,
        }
    },

    created() {
      if (!this.editRequest) {
        this.requestDateUnix = Date.now();
        this.requestDate = new Date(this.requestDateUnix).toLocaleDateString('en-us', this.dateOptions);
      }

      if (this.editRequest) {
        const currentRequest = this.currentRequestArray[0];
        this.docId = currentRequest.docId;
        this.loading = currentRequest.loading;
        this.senderEmailAddress = currentRequest.senderEmailAddress;
        this.senderCity = currentRequest.senderCity;
        this.senderAddress = currentRequest.senderAddress;
        this.senderCode = currentRequest.senderCode;
        this.senderCountry = currentRequest.senderCountry;
        this.senderPhone = currentRequest.senderPhone;
        this.senderCompany = currentRequest.senderCompany;
        this.requestDate = currentRequest.requestDate;
        this.paymentDueDate = currentRequest.paymentDueDate;
        this.paymentTerms = currentRequest.paymentTerms;
        this.paymentMethod = currentRequest.paymentMethod;
        this.productDescription = currentRequest.productDescription;
        this.requestPending = currentRequest.requestPending;
        this.requestDraft = currentRequest.requestDraft;
        this.requestItemList = currentRequest.requestItemList;
        this.requestTotal = currentRequest.requestTotal;
      }
    },

    methods: {
      ...mapMutations(["TOGGLE_REQUEST"]),

      closeRequest() {
        this.TOGGLE_REQUEST();
      },

      addNewRequestItem() {
        this.requestItemList.push({
          id: uid(),
          itemName: "",
          qty: "",
          price: 0,
          total: 0,
        });
      },

      deleteRequestItem(id) {
        this.requestItemList = this.requestItemList.filter((item) => item.id !== id);
      },

      calRequestTotal() {
        this.requestTotal = 0;
        this.requestItemList.forEach((item) => {
          this.requestTotal += item.total;
        });
      },

      publishRequest() {
        this.requestPending = true;
      },

      saveDraft() {
        this.requestDraft = true;
      },

      async uploadRequest() {
        if (this.requestItemList.length <= 0) {
          alert("Please Ensure That You Filled All The Necessary Spaces!");
          return;
        }

        this.calRequestTotal();

        const database = db.collection("requests").doc();

        await database.set({
          requestId: uid(6),
          loading: this.loading,
          senderEmailAddress: this.senderEmailAddress,
          senderCity: this.senderCity,
          senderAddress: this.senderAddress,
          senderCode: this.senderCode,
          senderCountry: this.senderCountry,
          senderPhone: this.senderPhone,
          senderCompany: this.senderCompany,
          requestDate: this.requestDate,
          paymentDueDate: this.paymentDueDate,
          paymentTerms: this.paymentTerms,
          paymentMethod: this.paymentMethod,
          productDescription: this.productDescription,
          requestPending: this.requestPending,
          requestDraft: this.requestDraft,
          requestItemList: this.requestItemList,
          requestTotal: this.requestTotal,
        });

        this.TOGGLE_REQUEST();
      },

      submitForm() {
        if (this.editRequest) {
          this.updateRequest();
          return;
        }
        this.uploadRequest();
      }
    },

    watch: {
      paymentTerms() {
        const futureDate = new Date();
        this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(this.paymentTerms));
        this.paymentDueDate = new Date(this.paymentDueDateUnix).toLocaleDateString('en-us', this.dateOptions);
      }
    },
}
</script>


<style lang="scss" scoped>
.request-wrap {
  position: fixed;
  top: 50;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 900px) {
    left: 90px;
  }

  .request-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: #141625;
    color: #fff;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h1 {
      margin-bottom: 48px;
      color: #fff;
    }

    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }

    h4 {
      color: #536dfe;
      font-size: 12px;
      margin-bottom: 24px;
    }

    // request To / request From
    .request-to,
    .request-from {
      margin-bottom: 48px;

      .location-details {
        gap: 16px;
        div {
          flex: 1;
        }
      }
    }

    // request Work

    .request-work {
      .payment {
        gap: 24px;
        div {
          flex: 1;
        }
      }

      .work-items {
        .item-list {
          width: 100%;

          // Item Table Styling
          .table-heading,
          .table-items {
            gap: 16px;
            font-size: 12px;

            .item-name {
              flex-basis: 50%;
            }

            .qty {
              flex-basis: 10%;
            }

            .price {
              flex-basis: 20%;
            }

            .total {
              flex-basis: 20%;
              align-self: center;
            }
          }

          .table-heading {
            margin-bottom: 16px;

            th {
              text-align: left;
            }
          }

          .table-items {
            position: relative;
            margin-bottom: 24px;

            img {
              position: absolute;
              top: 15px;
              right: 0;
              width: 12px;
              height: 16px;
            }
          }
        }

        .button {
          color: #fff;
          background-color: #536dfe;
          align-items: center;
          justify-content: center;
          width: 100%;

          img {
            margin-right: 4px;
          }
        }
      }
    }

    .save {
      margin-top: 60px;

      div {
        flex: 1;
      }

      .right {
        justify-content: flex-end;
      }
    }
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input,
  select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
