官网： v-charts.js.org/#/start

npm 安装   npm i v-charts echarts -S

完整引入 （vue项目main.js）

import VCharts from 'v-charts'

Vue.use(VCharts)

按需引入

import VeLine from 'v-charts/lib/line.common'

Vue.component(VeLine.name, VeLine)