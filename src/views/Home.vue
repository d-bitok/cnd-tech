<template>
  <div class="home container">
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>C&D Tech</h1>
        <span>For All Your Software Development Needs</span>
      </div>
      <div class="right flex">
        <!-- <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter Requests
            <span v-if="filteredRequest">
              : {{ filteredRequest }}
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
        </div> -->
        <div @click="newRequest" class="button flex">
          <div class="inner-button flex"><img src="@/assets/icon-plus.svg" alt=""></div>
          <span>New Request</span>
        </div>
      </div>
    </div>
    <!-- Requests -->
    <!-- <div v-if="requestData.length > 0">
      <Request v-for="(request, index) in filteredData" :request="request" :key="index" />
    </div> -->
    <!-- <div v-if="requestData.length > 0">
      <Request v-for="(request, index) in requestData" :request="request" :key="index" />
    </div> -->
    <div class="empty flex flex-column">
      <img src="@/assets/cnd_Developer_activity.svg" alt="" />
      <h3>Welcome to C&D Tech</h3>
      <p>Create a new request by clicking the <br> <strong style="color: #536dfe;">New Request</strong> button and get started</p>
    </div>
    <!-- Services -->
    <hr class="line">
    <div class="services">
      <h1>Our Services</h1>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Business.svg" alt="" />
          <h3>Online Business</h3>
          <p>Take your business online and monitor it from anywhere. Get beautiful visualisations and graphical representations of your productivity and financial statements using charts, graphs, pies among others. Get realtime feedback, 24/7 runtime and render your services to all your customers at anytime.</p>
        </div>
      </div>
      <div class="right flex">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Circuit.svg" alt="" />
          <h3>Cloud Integration</h3>
          <p>Connect your business or important information to the cloud and never worry about loosing your crucial data. Cloud integration stores your data in a serverless cloud platform that offers realtime database connectivity and a serverless database to store all your data.</p>
        </div>
      </div>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Fixing.svg" alt="" />
          <h3>Website Development</h3>
          <p>Be it redesigning your current website or building one from the bottom up, we offer fulltime assistance, guidance and development process from the start to publishing. Portfolios, business websites, tools or any other form of software operation that can run on any device as long as it has a browser and internet connectivity, we build it to your satisfaction. </p>
        </div>
      </div>
      <div class="right flex">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Focus.svg" alt="" />
          <h3>Automation</h3>
          <p>Automating simple tasks that take most of your time to a simple software that looks amazing with quick and responsive User Interface (UI), custom to your liking. This might include to do lists, financial statements like invoices, tables, customer orders for a product, recipes, etc. All these can be simplified to a touch of a button and saves you an enormous amount of time. </p>
        </div>
      </div>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Futuristic.svg" alt="" />
          <h3>Consultation</h3>
          <p>Computer related concerns that need simplification and/or recommendations on the way forward. Striding into the future well equiped and verse with the current technology as it trends forward despite it's ever increasing complexity.</p>
        </div>
      </div>
      <div class="right flex">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Global.svg" alt="" />
          <h3>International Connectivity</h3>
          <p>Run your business at a global scale and delve into International markets. Get connected and not fall behind your competitors as we ensure your services are rendered at a global scale without any obstacles or limits. </p>
        </div>
      </div>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Authentication.svg" alt="" />
          <h3>Software Security</h3>
          <p>Ensuring utmost security of your critical data is our top priority. 2 to 3 way verification systems in the authentication process will be implemented. Secure websites certified by Google and multiple choice authentication methods are applied to ensure customer information does not leak to fraudsters.</p>
        </div>
      </div>
      <div class="right flex">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Multiplatform.svg" alt="" />
          <h3>Device Syncronisation</h3>
          <p>Interconnectivity between your devices and building software systems that can seamlessly run on any of your compatible devices. Accomplishing this ensures smooth running of your business without the worry of redoing the same task on another device.</p>
        </div>
      </div>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd-Connected.svg" alt="" />
          <h3>Software As A Service (SAAS)</h3>
          <p>We create platforms that allow for business expansion to online markets. This particularly involves rendering online services that involves secure and trusted payment methods like M-PESA and other credit card payment systems</p>
        </div>
      </div>
      <div class="right flex">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd-Interaction.svg" alt="" />
          <h3>Privilege Assignment</h3>
          <p>Creating different levels of authority in your system that will allow for different sets of privileges after login. During login, we will create a software that determines what sort of privileges the signed in user will be assigned. Be it as admin, guest user, staff etc</p>
        </div>
      </div>
    </div>
    <div class="header flex">
      <div class="left flex flex-column">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Team.svg" alt="" />
          <h3>Programming</h3>
          <p>Programming certain tasks well tailored for the intended purposes as per the clients requirements. This might include creating solutions to a cumbersome problem, or critical thinking to find solutions to problems encountered by current available solutions.</p>
        </div>
      </div>
      <div class="right flex">
        <div @click="newRequest" class="service">
          <img src="@/assets/cnd_Server_cluster.svg" alt="" />
          <h3>Serverless Cloud Database</h3>
          <p>Cloud computing reduces the risks of data loss during natural disasters or theft, fraudelent activities, vandalism, compromises among others.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
// import Request from '../components/Request.vue'
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    }
  },
  components: {
    // Request,
  },
  methods: {
    ...mapMutations(["TOGGLE_REQUEST"]),
    newRequest() {
      this.TOGGLE_REQUEST();
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    }
  },
  computed: {
    ...mapState(["requestData"]),
  }
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
    margin: 20px;
    align-items: center;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 10px;
    border-radius: 16px;
    background-color: #2a2e5034;
    cursor: pointer;

    img {
      width: 360px;
      height: 250px;
      left: 30px;
    }

    h3 {
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
      }

    p {
    background-color: #536dfe09;
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
