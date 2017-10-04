<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-menu :router="true" default-active="/"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="!isExpanded">

          <el-checkbox-group v-model="isExpanded">
            <el-checkbox-button
              :label="isExpanded"
              :key="true"><i class="el-icon-fa-expand"></i>
            </el-checkbox-button>
          </el-checkbox-group>

<!--
          <el-switch
            v-model="isExpanded"
            on-text=""
            off-text=""
            on-close-icon="el-icon-minus"
            off-close-icon="el-icon-plus">
          </el-switch>
-->

          <el-menu-item index="/" @click="collapse()">
            <span slot="title">Home</span>
            <i class="monarch-logo"></i>
          </el-menu-item>
          <el-submenu index="/coins">
            <template slot="title">
              <i class="el-icon-fa-money"></i>
              <span slot="title">Coins</span>
            </template>
            <el-menu-item
              class="el-icon-fa-btc"
              index="/coins/bitcoin"
              @click="collapse()">
              BTC
            </el-menu-item>
            <el-menu-item
              class="el-icon-fa-etsy"
              index="/coins/ethereum"
              @click="collapse()">
              ETH
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            index="/coinsearch"
            @click="collapse()">
            <i class="el-icon-fa-search-minus"></i>
            <span slot="title">Coin Search</span>
          </el-menu-item>
          <el-menu-item
            index="/biosearch"
            @click="collapse()">
            <i class="el-icon-fa-search"></i>
            <span slot="title">Bio Search</span>
          </el-menu-item>

          <el-submenu index="/watch">
            <template slot="title">
              <i class="el-icon-fa-eye"></i>
              <span slot="title">Watch</span>
            </template>
            <el-menu-item
              class="el-icon-fa-money"
              index="/watch"
              @click="collapse()">
              CoinWatch
            </el-menu-item>
            <el-menu-item
              class="el-icon-fa-venus"
              index="/biowatch"
              @click="collapse()">
              BioWatch
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>

    <el-row class="main-view">

<!--
      <router-link to="/about">About</router-link>
      <router-link to="/biosearch">Bio Search</router-link>
      <router-link to="/coinsearch">Coin Search</router-link>
      <router-link to="/coins/ethereum">Ethereum</router-link>
      <router-link to="/coins/bitcoin">Bitcoin</router-link>
      <router-link to="/coinwatch">Coin Watch</router-link>
      <router-link to="/biowatch">BioWatch</router-link>
 -->

      <router-view></router-view>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isExpanded: false
      };
    },
    methods: {
      collapse() {
        this.isExpanded = false;
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#app div.el-tooltip {
  padding: 0 !important;
}

#app div.el-submenu__title {
  padding: 0 !important;
}

#app div.el-checkbox-group {
  height: 24px;
  padding: 0;
}

#app span.el-checkbox-button__inner {
  height: 20px;
  margin: auto;
  padding: 2px 3px;
}


/*
#app span.el-switch__core {
  border:1px solid red;
  height: 15px !important;
  width: 30px !important;
}

#app div.el-switch__label,
#app div.el-switch__label.el-switch__label--left,
#app div.el-switch__label.el-switch__label--right {
  border:1px solid red;
  height: 15px !important;
  width: 15px !important;
}

#app span.el-switch__button {
  border:1px solid red;
  height: 15px !important;
  width: 15px !important;
  transform: translate(0, 0);
}
*/

#app .el-menu-vertical-demo {
  position:absolute;
  z-index:100;
  top: 30px;
  left: 0;
  width:35px;
  background: ivory;
  padding: 5px 0 0 0;
  margin: 0;
}

#app .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

#app .main-view {
  margin: 0 5px 0 40px;
}


</style>
