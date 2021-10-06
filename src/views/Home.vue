<template>
  <div class="home container">
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>C&D Tech</h1>
        <span>For All Your Software Development Needs</span>
      </div>
      <div class="right flex">
        <div class="filter flex">
          <span>Filter Requests
            <span v-if="filteredRequests">
              : {{ filteredRequests }}
            </span>
          </span>
          <img src="@/assets/icon-arrow-down.svg" alt="">
          <ul v-show="filterMenu" class="filter-menu">
            <li @click="filteredRequests">Website</li>
            <li @click="filteredRequests">Mobile App</li>
            <li @click="filteredRequests">Software</li>
            <li @click="filteredRequests">Consultation</li>
            <li @click="filteredRequests">Other</li>
          </ul>
        </div>
        <div @click="newRequest" class="button flex">
          <div class="inner-button flex"><img src="@/assets/icon-plus.svg" alt=""></div>
          <span>New Request</span>
        </div>
      </div>
    </div>
    <!-- Requests -->
    <!-- <div v-if="requestData.length > 0">
      <Request />
    </div> -->
    <div class="empty flex flex-column">
      <img src="@/assets/cnd_Developer_activity.svg" alt="" />
      <h3>No Requests Made Yet</h3>
      <p>Create a new request by clicking the <br> <strong style="color: #536dfe;">New Request</strong> button and get started</p>
    </div>
    <!-- Services -->
    <hr class="line">
    <div class="services">
      <h1>Our Services</h1>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div class="service">
          <img src="@/assets/cnd_Business.svg" alt="" />
          <h3>Service Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat quibusdam pariatur. Nemo laboriosam sapiente quam consectetur doloremque esse aliquid quibusdam veritatis quos. Autem doloremque consequatur, molestias error eos repudiandae.</p>
        </div>
      </div>
      <div class="right flex">
        <div class="service">
          <img src="@/assets/cnd_Circuit.svg" alt="" />
          <h3>Service Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat quibusdam pariatur. Nemo laboriosam sapiente quam consectetur doloremque esse aliquid quibusdam veritatis quos. Autem doloremque consequatur, molestias error eos repudiandae.</p>
        </div>
      </div>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div class="service">
          <img src="@/assets/cnd_Fixing.svg" alt="" />
          <h3>Service Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat quibusdam pariatur. Nemo laboriosam sapiente quam consectetur doloremque esse aliquid quibusdam veritatis quos. Autem doloremque consequatur, molestias error eos repudiandae.</p>
        </div>
      </div>
      <div class="right flex">
        <div class="service">
          <img src="@/assets/cnd_Focus.svg" alt="" />
          <h3>Service Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat quibusdam pariatur. Nemo laboriosam sapiente quam consectetur doloremque esse aliquid quibusdam veritatis quos. Autem doloremque consequatur, molestias error eos repudiandae.</p>
        </div>
      </div>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div class="service">
          <img src="@/assets/cnd-Interaction.svg" alt="" />
          <h3>Service Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat quibusdam pariatur. Nemo laboriosam sapiente quam consectetur doloremque esse aliquid quibusdam veritatis quos. Autem doloremque consequatur, molestias error eos repudiandae.</p>
        </div>
      </div>
      <div class="right flex">
        <div class="service">
          <img src="@/assets/cnd-Connected.svg" alt="" />
          <h3>Service Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat quibusdam pariatur. Nemo laboriosam sapiente quam consectetur doloremque esse aliquid quibusdam veritatis quos. Autem doloremque consequatur, molestias error eos repudiandae.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    }
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        position: relative;
        margin-right: 40px;
        cursor: pointer;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 120px;
          position: absolute;
          border-radius: 12px;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

          li {
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              border-radius: 12px;
              background-color: #b6a6f5;
            }
          }
        }
      }

      .button {
        padding: 8px 10px;
        background-color: #536dfe;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .empty {
    margin-top: 150px;
    align-items: center;

    img {
      width: auto;
      height: 300px;
    }

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }

  .service {
    margin-top: 20px;
    align-items: center;

    img {
      width: 360px;
      height: 250px;
    }

    h3 {
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
      }

    p {
    background-color: #536dfe35;
    padding: 20px;
    border-radius: 16px;
    margin: 10px;
      text-align: center;
      max-width: 100vh;
      font-size: 12px;
      font-weight: 300;
      margin: 16px;
    }
  }

  .line {
    margin-top: 50px;
  }

  .services {
    margin-top: 50px;
    text-align: center;
  }

}
</style>
