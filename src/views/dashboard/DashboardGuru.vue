<template>
  <div class="data-guru">
    <Navbar />
    <div class="content-dashboard pt-24 w-full flex justify-center">
      <div class="w-[1000px] bg-[#e8e4e6] rounded">
        <Header />
        <div class="w-full bg-[#abd1c6] h-[1px]"></div>
        <div class="body px-6 py-2 ">
          <div class="mt-3 items-center">
            <p class="font-bold mr-5 text-center text-[18px]">Tabel Data Guru</p>
            <button @click="goToFormGuru()" class="bg-[#e16162] text-white rounded py-1 px-2 mr-1 mt-3">Tambah Data Guru</button>
          </div>
          <!-- Table -->
            <div class="flex flex-col">
              <div class="overflow-x-auto">
                <div class="py-2 inline-block min-w-full">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="bg-gray-100 border-b">
                        <tr>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left w-1">
                            No
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Nama
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Nip
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Jabatan
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody v-if="showData">
                        <tr v-for="item in dataGuru" class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {{ item.nama }}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {{ item.nip }}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            {{ item.jabatan }}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            <div class="flex">
                              <button 
                                @click="deleteDataGuru(item.id)" 
                                class="bg-[#e16162] text-white rounded py-1 px-2 mr-1">Hapus</button>
                              <button @click="goToEdit(item.id)" class="bg-[#f9bc60] text-white rounded py-1 px-2">Lihat</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          <!-- Table -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar/Navbar.vue'
import Button from "@/components/button/ButtonMedium.vue"
import Header from "@/components/navbar/Header.vue"
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, onMounted, toRaw } from 'vue'
import axios from 'axios'

// Define Router and Store
const router = useRouter()
const store  = useStore()

// Ref
const showData = ref(true)
const dataGuru = ref([
  {
    id: '',
    nama: '',
    nip: '',
    jabatan: '',
    pendidikanTerakhir: '',
    noHp: '',
    email: '',
    alamat: ''
  }
])

// Method
function goToFormGuru () {
  router.push({ path: '/dashboard/form/guru' })
}
function goToEdit(id) {
  const temp = toRaw(dataGuru.value)
  const dataDetail = temp.filter((item)=> item.id == id)
  store.dispatch('setDetailGuru', dataDetail)
  router.push({ path: '/dashboard/guru/detail' })
}
function formatData(response) {
  const dataArray = Object.keys(response).map((id) => ({ id, ...response[id] }))
  dataGuru.value = dataArray
}
async function getDataGuru() {
  await axios.get('https://vue-ga-269cd-default-rtdb.asia-southeast1.firebasedatabase.app/guru.json')
  .then(function (response) {
    if(response.data) {
      formatData(response.data)
    } else {
      showData.value = false
    }
  })
}
async function deleteDataGuru(id) {
  await axios.delete(`https://vue-ga-269cd-default-rtdb.asia-southeast1.firebasedatabase.app/guru/${id}.json`)
  await getDataGuru()
}

// Mounted
onMounted(async() => {
  await getDataGuru()
})
</script>
