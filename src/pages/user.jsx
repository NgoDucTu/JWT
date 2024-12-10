import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUserApi } from "../util/api";

const UserPage = () => {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserApi();
      if (res) {
        setdataSource(res.data);
      }
    };
    fetchUser();
  }, []);

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      bordered
      <Table dataSource={dataSource} columns={columns} rowKey={"_id"} />
    </div>
  );
};

export default UserPage;
