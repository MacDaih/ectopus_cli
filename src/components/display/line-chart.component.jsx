import { 
  ComposedChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

const renderLineChart = (data) => (
  data && <ComposedChart
        width={800}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="_id" />
        <YAxis dataKey="total"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="total" barSize={20} fill="#6699cc" />
        <Line type="monotone" dataKey="passed" stroke="#5fa052" />
        <Line type="monotone" dataKey="failed" stroke="#FF0000" />
      </ComposedChart>
);

const totalTestsPie = (data) => (
  <PieChart width={400} height={400} isAnimationActive={true}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="passed"
      />
    </PieChart>
)

export {
  renderLineChart,
  totalTestsPie
}