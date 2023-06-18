<template>
  <div class="data-guru">
    <Navbar />
    <div class="content-dashboard pt-24 w-full flex justify-center">
      <div class="w-[1000px] bg-[#e8e4e6] rounded">
        <Header />
        <div class="w-full bg-[#abd1c6] h-[1px]"></div>
        <div class="body px-6 py-2 ">
          <div class="mt-3 items-center">
            <p class="font-bold mr-5 text-center text-[18px]">Tabel Mata Pelajaran</p>
            <button class="bg-[#e16162] text-white rounded py-1 px-2 mr-1 mt-3">Tambah Mata Pelajaran</button>
          </div>
          <!-- Table -->
            <div class="flex flex-col">
              <div class="overflow-x-auto">
                <div class="py-2 inline-block min-w-full">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="bg-gray-100 border-b">
                        <tr>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-3 text-left w-1">
                            No
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-3 text-left">
                            Nama
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-3 text-left">
                            Tipe
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-3 text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Bahasa Inggris
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Wajib
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            <div class="flex">
                              <button class="bg-[#e16162] text-white rounded py-1 px-2 mr-1">Hapus</button>
                              <button class="bg-[#f9bc60] text-white rounded py-1 px-2">Lihat</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Bahasa Inggris
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Wajib
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            <div class="flex">
                              <button class="bg-[#e16162] text-white rounded py-1 px-2 mr-1">Hapus</button>
                              <button class="bg-[#f9bc60] text-white rounded py-1 px-2">Lihat</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Bahasa Inggris
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Wajib
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            <div class="flex">
                              <button class="bg-[#e16162] text-white rounded py-1 px-2 mr-1">Hapus</button>
                              <button class="bg-[#f9bc60] text-white rounded py-1 px-2">Lihat</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Bahasa Inggris
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Peminatan
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            <div class="flex">
                              <button class="bg-[#e16162] text-white rounded py-1 px-2 mr-1">Hapus</button>
                              <button class="bg-[#f9bc60] text-white rounded py-1 px-2">Lihat</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Bahasa Inggris
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            Muatan Lokal
                          </td>
                          <td class="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                            <div class="flex">
                              <button class="bg-[#e16162] text-white rounded py-1 px-2 mr-1">Hapus</button>
                              <button class="bg-[#f9bc60] text-white rounded py-1 px-2">Lihat</button>
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
</script>