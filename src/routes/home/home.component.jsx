
import Categories from "../../categories.json"
import Directory from "../../component/directory/directory.component";

const Home = () => {  
  return (
    <Directory Categories={Categories} />
  );
};

export default Home;