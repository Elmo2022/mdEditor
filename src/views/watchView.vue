<!-- <template>
    <br>
    firstName <a-input style="width: 200px" v-model="firstName" placeholder="firstName"></a-input>
    <br>
    lastName &nbsp;<a-input style="width: 200px" v-model="lastName" placeholder="lastName"></a-input>
    <br>
    userName<a-input style="width: 200px" v-model="userName" placeholder="userName"></a-input>
    

</template>

<script setup lang="ts">
import { ref,computed,watch } from 'vue'


const firstName = ref('1111')
const lastName = ref('ccc')

const userName = computed(() => {
  return firstName.value + lastName.value
})

// watch(question, async (newQuestion, oldQuestion) => {
 
//   }
// )
</script>

<style>

</style> -->


<template>
    <br>
    firstName <input style="width: 200px" v-model="firstName" placeholder="firstName"></input>
    <br>
    lastName &nbsp;<input style="width: 200px" v-model="lastName" placeholder="lastName"></input>
    <br>
    userName <input style="width: 200px" v-model="userName" placeholder="userName"></input>
    {{ data }}
</template>

<script setup lang="ts">
import { ref, watch ,computed} from 'vue'

const firstName = ref('1111')
const lastName = ref('ccc')
const userName = ref('')
const data = computed(() => {
    alert("我要计算了")
  return firstName.value + lastName.value
})
watch([firstName, lastName], ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
  userName.value = newFirstName + newLastName
}, { immediate: true })

</script>

<style>
</style>