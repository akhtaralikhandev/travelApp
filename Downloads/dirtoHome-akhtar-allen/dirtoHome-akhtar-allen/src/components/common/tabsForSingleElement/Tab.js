import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";

const Tab = ({ activeTab, setActiveTab, tab }) => {
  return (
    <motion.div onClick={() => setActiveTab(tab)} className="mycustomnav">
      <motion.div
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        <Typography
          variant="body1"
          className="mycustomnavactive"
          style={activeTab === tab ? { border: "1px solid red" } : null}
        >
          {tab}
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export default Tab;
