<template>
    <router-link class="request flex" :to="{ name: 'Request', params: { requestId: request.requestId } }">
        <div class="left flex">
            <span class="tracking-number">#{{ request.requestId }}</span>
            <span class="due-date">{{ request.paymentDueDate }}</span>
            <span class="company">{{ request.senderCompany }}</span>
        </div>
        <div class="right flex">
            <span class="price">KES{{ request.requestTotal }}</span>
            <div class="status-button flex"
            :class="{ paid: request.requestPaid, draft: request.requestDraft, pending: request.requestPending }"
            >
                <span v-if="request.requestPaid">Paid</span>
                <span v-if="request.requestPending">Pending</span>
                <span v-if="request.requestDraft">Draft</span>
            </div>
            <div class="icon">
                <img src="@/assets/icon-arrow-right.svg" alt="">
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "request",
    props: ["request"]
}
</script>

<style lang="scss" scoped>
.request {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: #1e2139;
  align-items: center;

  span {
    font-size: 13px;
  }

  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 16px;

    span {
      flex: 1;
    }

    .tracking-number {
      text-transform: uppercase;
    }
  }

  .right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;

    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>
