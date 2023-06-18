<template>
  <div class="data-guru">
    <Navbar />
    <div class="content-dashboard pt-24 w-full flex justify-center">
      <div class="w-[1000px] bg-[#e8e4e6] rounded">
        <Header />
        <div class="w-full bg-[#abd1c6] h-[1px]"></div>
        <div class="body px-6 py-2 ">
          <div class="mt-3 items-center">
            <p class="font-bold mr-5 text-center text-[18px]">Data Guru</p>
          </div>
          <div class="flex justify-center">
            <div>
              <div class="bg-transparent w-[400px] rounded mt-2 mb-5">
                <InputField 
                  type="text"
                  placeholder="Nama"
                  class="border border-[#abd1c6]"
                  :data="nama"
                  @EmitDataInput="emitNama"
                />
                <InputField 
                  type="number"
                  placeholder="Nip"
                  class="mt-4 border border-[#abd1c6]"
                  :data="nip"
                  @EmitDataInput="emitNip"
                />
                <InputField 
                  type="text"
                  placeholder="Jabatan"
                  class="mt-4 border border-[#abd1c6]"
                  :data="jabatan"
                  @EmitDataInput="emitJabatan"
                />
                <InputField 
                  type="text"
                  placeholder="Pendidikan Terakhir"
                  class="mt-4 border border-[#abd1c6]"
                  :data="pendidikanTerakhir"
                  @EmitDataInput="emitPendidikanTerakhir"
                />
                <InputField 
                  type="number"
                  placeholder="No Hp"
                  class="mt-4 border border-[#abd1c6]"
                  :data="noHp"
                  @EmitDataInput="emitNoHp"
                />
                <InputField 
                  type="email"
                  placeholder="Email"
                  class="mt-4 border border-[#abd1c6]"
                  :data="email"
                  @EmitDataInput="emitEmail"
                />
                <InputField 
                  type="text"
                  placeholder="Alamat"
                  class="mt-4 border border-[#abd1c6]"
                  :data="alamat"
                  @EmitDataInput="emitAlamat"
                />
              </div>
              <div class="flex justify-between mb-5">
                <button @click="submit()" class="bg-[#f9bc60] text-white rounded py-1 px-2 mr-1"> Update </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar/Navbar.vue'
import Button from "@/components/button/ButtonMedium.vue"
import InputField from '@/components/input/Input.vue'
import Header from "@/components/navbar/Header.vue"

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'

// Router
const router = useRouter()
const store  = useStore()

// Ref
// Form data
const id = ref()
const nama = ref('')
const nip = ref('')
const jabatan = ref('')
const pendidikanTerakhir = ref('')
const noHp = ref('')
const email = ref('')
const alamat = ref('')
// Data Kosong
const dataKosong = ref(false)

// Method
function back () {
  router.push({ path: '/dashboard/guru' })
}
function emitNama(value) {
  nama.value = value
}
function emitNip(value) {
  nip.value = value
}
function emitJabatan(value) {
  jabatan.value = value
}
function emitPendidikanTerakhir(value) {
  pendidikanTerakhir.value = value
}
function emitNoHp(value) {
  noHp.value = value
}
function emitEmail(value) {
  email.value = value
}
function emitAlamat(value) {
  alamat.value = value
}

async function submit() {
  dataKosong.value = validation()
  if(!dataKosong.value) {
    const payload = {
      nama: nama.value,
      nip: nip.value,
      jabatan: jabatan.value,
      pendidikanTerakhir: pendidikanTerakhir.value,
      noHp: noHp.value,
      email: email.value,
      alamat: alamat.value
    }
    await axios.put(`https://vue-ga-269cd-default-rtdb.asia-southeast1.firebasedatabase.app/guru/${id.value}.json`, payload).
    then(function(response) {
      if(response.request.statusText === 'OK') {
        router.push({ path: '/dashboard/guru' })
      }
    })
  }
}

function validation () {
  if(!nama.value) return true
  if(!nip.value) return true
  if(!jabatan.value) return true
  if(!pendidikanTerakhir.value) return true
  if(!noHp.value) return true
  if(!email.value) return true
  if(!alamat.value) return true

  return false
}

onMounted(()=> {
  const temp =  store.state.detailGuru[0]
  id.value = temp.id
  nama.value = temp.nama
  nip.value = temp.nip
  jabatan.value = temp.jabatan
  pendidikanTerakhir.value = temp.pendidikanTerakhir
  noHp.value = temp.noHp
  email.value = temp.email
  alamat.value = temp.alamat
})
</script>