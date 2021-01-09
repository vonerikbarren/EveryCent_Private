import { Chart, Interval, Interaction, registerInteraction } from 'bizcharts';

const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 45 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
];

// 鼠标单击选中，双击取消
registerInteraction('click-active-region', {
  start: [{ trigger: 'plot:click', action: 'active-region:show' }],
  end: [{ trigger: 'plot:dblclick', action: 'active-region:hide' }],
})


export default function Demo() {
  return <Chart height={300} autoFit data={data} >
    <Interval position="year*sales" />
    <Interaction type='click-active-region' />
  </Chart>
}

