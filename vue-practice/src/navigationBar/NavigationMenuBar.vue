<template>
    <v-app-bar color="orange" app dark height="64">
        <v-btn @click="goToHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span>SK Networks AI Camp with EDDI</span>
            </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn text @click="goToProductList" class="btn-text">
            <v-icon left>mdi-store</v-icon>
            <span>상품</span>
        </v-btn>
        <v-btn text @click="goToBoardList" class="btn-text">
            <v-icon left>mdi-forum</v-icon>
            <span>게시판</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
import router from '@/router'

export default {
    methods: {
        goToHome () {
            router.push('/')
        },
        goToBoardList (){
            router.push('/board/list')
        },
        goToProductList () {
            router.push('/product/list')
        }
    },

    mounted () {
        window.addEventListener('storage', this.updateLoginStatus)
    },
    
    beforeUnmount () {
        window.removeEventListener('storage', this.updateLoginStatus)
    }
}
</script>