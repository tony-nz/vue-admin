<template>
  <div class="flex flex-row space-x-4">
    <div class="w-full flex flex-col space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div
          class="p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-800 to-blue-900"
        >
          <!-- style="
          background: linear-gradient(180deg, #1858fd 0%, #1652ea 100%);
          box-shadow: 0px 14px 40px 0px rgba(24, 85, 243, 0.2);
        " -->
          <div class="space-y-4">
            <div class="flex flex-row space-x-4">
              <!-- icon -->
              <div class="p-2 border-dashed border border-gray-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 384 512"
                >
                  <path
                    class="fill-white"
                    d="M256 0v128h128L256 0zM197.5 316.8L191.1 315.2C168.3 308.2 168.8 304.1 169.6 300.5c1.375-7.812 16.59-9.719 30.27-7.625c5.594 .8438 11.73 2.812 17.59 4.844c10.39 3.594 21.83-1.938 25.45-12.34c3.625-10.44-1.891-21.84-12.33-25.47c-7.219-2.484-13.11-4.078-18.56-5.273V248c0-11.03-8.953-20-20-20s-20 8.969-20 20v5.992C149.6 258.8 133.8 272.8 130.2 293.7c-7.406 42.84 33.19 54.75 50.52 59.84l5.812 1.688c29.28 8.375 28.8 11.19 27.92 16.28c-1.375 7.812-16.59 9.75-30.31 7.625c-6.938-1.031-15.81-4.219-23.66-7.031l-4.469-1.625c-10.41-3.594-21.83 1.812-25.52 12.22c-3.672 10.41 1.781 21.84 12.2 25.53l4.266 1.5c7.758 2.789 16.38 5.59 25.06 7.512V424c0 11.03 8.953 20 20 20s20-8.969 20-20v-6.254c22.36-4.793 38.21-18.53 41.83-39.43C261.3 335 219.8 323.1 197.5 316.8z"
                  />
                  <path
                    class="fill-white opacity-40"
                    d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 152v-16C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152zM253.8 378.3c-3.623 20.91-19.47 34.64-41.83 39.43V424c0 11.03-8.953 20-20 20s-20-8.969-20-20v-6.77c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5c-10.42-3.688-15.88-15.12-12.2-25.53c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031c13.72 2.125 28.94 .1875 30.31-7.625c.875-5.094 1.359-7.906-27.92-16.28l-5.812-1.688c-17.33-5.094-57.92-17-50.52-59.84C133.8 272.8 149.6 258.8 172 253.1V248c0-11.03 8.953-20 20-20s20 8.969 20 20v6.633c5.453 1.195 11.34 2.789 18.56 5.273c10.44 3.625 15.95 15.03 12.33 25.47c-3.625 10.41-15.06 15.94-25.45 12.34c-5.859-2.031-12-4-17.59-4.844C186.2 290.8 170.1 292.7 169.6 300.5C168.8 304.1 168.3 308.2 191.1 315.2l5.547 1.594C219.8 323.1 261.3 335 253.8 378.3z"
                  />
                </svg>
              </div>
              <!-- header -->
              <div class="flex flex-col">
                <h2 class="text-white">Total sales</h2>
                <span class="text-xs text-gray-300"
                  >Recent customer purchase trends</span
                >
              </div>
            </div>
            <!-- toolbar -->
            <div class="space-x-2">
              <button
                class="p-2 px-4 bg-blue-900 hover:bg-blue-700 border border-dashed border-gray-400 rounded-lg text-xs text-gray-300"
              >
                Today
              </button>
              <button
                class="p-2 px-4 bg-blue-900 hover:bg-blue-700 border border-dashed border-gray-400 rounded-lg text-xs text-gray-300"
              >
                Week
              </button>
              <button
                class="p-2 px-4 bg-blue-900 hover:bg-blue-700 border border-dashed border-gray-400 rounded-lg text-xs text-gray-300"
              >
                Month
              </button>
            </div>
          </div>
          <!-- content -->
          <div class="flex flex-row justify-between space-x-2 overflow-hidden">
            <div class="flex flex-col self-end">
              <div class="flex flex-row space-y-2">
                <span class="text-2xl text-white mr-1">$1,200.00</span>
                <span class="text-xs text-emerald-300">+6.83%</span>
              </div>
              <h2 class="text-xs text-gray-300">For the past 24 hours</h2>
            </div>
            <div style="height: 100px; flex: 0 0 auto; width: 30%">
              <Chart
                type="line"
                :data="chartData"
                :options="chartOptions"
                class="h-[100px]"
              />
            </div>
          </div>
        </div>
        <div class="p-6 rounded-lg shadow-lg bg-white">
          <!-- style="
          background: linear-gradient(180deg, #1858fd 0%, #1652ea 100%);
          box-shadow: 0px 14px 40px 0px rgba(24, 85, 243, 0.2);
        " -->
          <div class="space-y-4">
            <div class="flex flex-row space-x-4">
              <!-- icon -->
              <div
                class="p-2 bg-gray-100 border-dashed border border-gray-300 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 384 512"
                >
                  <path
                    class="fill-blue-600"
                    d="M256 0v128h128L256 0zM197.5 316.8L191.1 315.2C168.3 308.2 168.8 304.1 169.6 300.5c1.375-7.812 16.59-9.719 30.27-7.625c5.594 .8438 11.73 2.812 17.59 4.844c10.39 3.594 21.83-1.938 25.45-12.34c3.625-10.44-1.891-21.84-12.33-25.47c-7.219-2.484-13.11-4.078-18.56-5.273V248c0-11.03-8.953-20-20-20s-20 8.969-20 20v5.992C149.6 258.8 133.8 272.8 130.2 293.7c-7.406 42.84 33.19 54.75 50.52 59.84l5.812 1.688c29.28 8.375 28.8 11.19 27.92 16.28c-1.375 7.812-16.59 9.75-30.31 7.625c-6.938-1.031-15.81-4.219-23.66-7.031l-4.469-1.625c-10.41-3.594-21.83 1.812-25.52 12.22c-3.672 10.41 1.781 21.84 12.2 25.53l4.266 1.5c7.758 2.789 16.38 5.59 25.06 7.512V424c0 11.03 8.953 20 20 20s20-8.969 20-20v-6.254c22.36-4.793 38.21-18.53 41.83-39.43C261.3 335 219.8 323.1 197.5 316.8z"
                  />
                  <path
                    class="fill-blue-600 opacity-40"
                    d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 152v-16C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152zM253.8 378.3c-3.623 20.91-19.47 34.64-41.83 39.43V424c0 11.03-8.953 20-20 20s-20-8.969-20-20v-6.77c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5c-10.42-3.688-15.88-15.12-12.2-25.53c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031c13.72 2.125 28.94 .1875 30.31-7.625c.875-5.094 1.359-7.906-27.92-16.28l-5.812-1.688c-17.33-5.094-57.92-17-50.52-59.84C133.8 272.8 149.6 258.8 172 253.1V248c0-11.03 8.953-20 20-20s20 8.969 20 20v6.633c5.453 1.195 11.34 2.789 18.56 5.273c10.44 3.625 15.95 15.03 12.33 25.47c-3.625 10.41-15.06 15.94-25.45 12.34c-5.859-2.031-12-4-17.59-4.844C186.2 290.8 170.1 292.7 169.6 300.5C168.8 304.1 168.3 308.2 191.1 315.2l5.547 1.594C219.8 323.1 261.3 335 253.8 378.3z"
                  />
                </svg>
              </div>
              <!-- header -->
              <div class="flex flex-col">
                <h2 class="text-slate-600">Total sales</h2>
                <span class="text-xs text-gray-300"
                  >Recent customer purchase trends</span
                >
              </div>
            </div>
            <!-- toolbar -->
            <div class="space-x-2">
              <button
                class="p-2 px-4 bg-gray-100 hover:bg-gray-300 border border-dashed border-gray-300 rounded-lg text-xs text-slate-600"
              >
                Today
              </button>
              <button
                class="p-2 px-4 bg-gray-100 hover:bg-gray-300 border border-dashed border-gray-300 rounded-lg text-xs text-slate-600"
              >
                Week
              </button>
              <button
                class="p-2 px-4 bg-gray-100 hover:bg-gray-300 border border-dashed border-gray-300 rounded-lg text-xs text-slate-600"
              >
                Month
              </button>
            </div>
          </div>
          <!-- content -->
          <div class="flex flex-row justify-between space-x-2 overflow-hidden">
            <div class="flex flex-col self-end">
              <div class="flex flex-row space-y-2">
                <span class="text-2xl text-slate-600 mr-1">$1,200.00</span>
                <span class="text-xs text-emerald-300">+6.83%</span>
              </div>
              <h2 class="text-xs text-gray-300">For the past 24 hours</h2>
            </div>
            <div style="height: 100px; flex: 0 0 auto; width: 30%">
              <Chart
                type="line"
                :data="chartData"
                :options="chartOptions"
                class="h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const chartData = ref();
    const chartOptions = ref();
    const setChartData = () => {
      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Dataset 1",
            fill: false,
            borderColor: "#FFFFFF",
            yAxisID: "y1",
            tension: 0.4,
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      };
    };
    const setChartOptions = () => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColorSecondary = documentStyle.getPropertyValue("--text-white");
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

      return {
        // responsive: true,
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              display: false,
            },
          },
          y: {
            type: "linear",
            display: false,
            position: "left",
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              display: false,
            },
          },
          x1: {
            display: false,
          },
          y1: {
            type: "linear",
            display: false,
            position: "right",
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              drawOnChartArea: false,
              color: surfaceBorder,
            },
          },
        },
      };
    };
    onMounted(async () => {
      chartData.value = setChartData();
      chartOptions.value = setChartOptions();
    });

    return {
      chartData,
      chartOptions,
    };
  },
});
</script>
