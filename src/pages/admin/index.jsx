import Details from "../../components/detail";
import usersData from "../../db/usersData";
const AdminPanel = () => {
  return <Details data={usersData} />;
};

export default AdminPanel;
