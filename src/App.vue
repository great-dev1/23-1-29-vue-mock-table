<template>
  <div id="app">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="users.length">
          <tr v-for="(user, idx) in users" :key="idx">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3" class="empty-cell">No Users</td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="pagination">
      <button class="first-page-btn" @click="changePage('first')" :disabled="loading || isFirstPage()">First</button>
      <button class="previous-page-btn" @click="changePage('previous')"
        :disabled="loading || isFirstPage()">Previous</button>
      <button class="next-page-btn" @click="changePage('next')" :disabled="loading || isLastPage()">Next</button>
      <button class="last-page-btn" @click="changePage('last')" :disabled="loading || isLastPage()">Last</button>
    </div>

    <p>
      If you're satisfied with my work, please contact me via followings:<br /><br />
      Email: great777dev@gmail.com<br /><br />
      Skype: live:.cid.4afad607a134f606<br /><br />
      Telegram: great777dev<br /><br />
      Discord: great777dev#6386
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      count: 0,
      page: 0,
      length: 10,
      users: []
    }
  },

  created() {
    this.fetchUsers();
  },

  methods: {
    async fetchUsers() {
      try {
        console.log("Fetching...", this.page);
        this.loading = true;
        let { data } = await axios.get("/users", {
          params: {
            page: this.page
          }
        });
        console.log("Fetched!", data);
        this.count = data.count;
        this.users = data.results;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

    getLastPage() {
      return Math.floor(this.count / this.length);
    },

    isFirstPage() {
      return this.page === 0;
    },

    isLastPage() {
      return this.page === this.getLastPage();
    },

    async changePage(page) {
      switch (page) {
        case "first":
          this.page = 0;
          break;
        case "previous":
          this.page -= 1;
          break;
        case "next":
          this.page += 1;
          break;
        case "last":
          this.page = Math.floor(this.count / this.length);
          break;
      }
      this.fetchUsers();
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table th {
  color: #fafafa;
  background-color: #3d385a;
  border-color: #000 !important;
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ccc;
}

.table td.empty-cell {
  color: #f44336;
}

.pagination {
  margin-top: 15px;
}

.pagination>button {
  padding: 5px 15px;
  margin: 2px;
}
</style>
