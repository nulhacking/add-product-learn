import { Button, Table, type TableColumnsType } from "antd";
import "./styles.css";
import "@ant-design/v5-patch-for-react-19";

function App() {
  const columns: TableColumnsType = [
    {
      title: "Nomi",
    },
    {
      title: "Soni",
    },
    {
      title: "Turi",
    },
  ];

  return (
    <div className="flex flex-col justify-start gap-4 h-[100vh] p-4 bg-gray-300">
      <Button type="primary" className="w-max">
        Qo'shish
      </Button>
      <Table columns={columns} className="w-full" />
    </div>
  );
}

export default App;
