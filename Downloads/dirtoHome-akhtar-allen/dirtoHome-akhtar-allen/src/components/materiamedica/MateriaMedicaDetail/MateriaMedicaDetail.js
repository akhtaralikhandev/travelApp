import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import usePathSegments from "../../../hooks/usePathSegments";
import ItemList from "../../../layouts/ItemList";
import { useGetMateriaMedicaQuery } from "../../../redux/materiaMedica/materiaMedicaApi";
import CreatePostEditor from "../../common/CreateTopicEditor";
import TabList from "../../common/tabsForSingleElement/TabList";
import TopicAndComments from "../TopicAndComments";
import Function from "./Function";
import Indication from "./Indication";
import Notes from "./Notes";
import Profile from "./Profile";
import Reference from "./Reference";

function MateriaMedicaDetail(props) {
  const { id } = useParams();

  // all tabs for acupuncture
  const TABS = [
    { name: "Profile", component: Profile },
    { name: "Topic and Comments", component: TopicAndComments },
    { name: "Function", component: Function },
    { name: "Indication", component: Indication },
    { name: "Reference", component: Reference },
    { name: "Notes", component: Notes },
    {
      name: "Create Topic",
      component: CreatePostEditor,
      props: { id, createdAt: "MateriaMedica" },
    },
  ];

  const [activeTab, setActiveTab] = useState(TABS[0].name);
  const {
    data: materiamedica,
    isLoading,
    isError,
  } = useGetMateriaMedicaQuery(id);
  const [cleanPath] = usePathSegments() || [];

  // ui content
  let content;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  }

  if (isError) {
    content = <h3>Something went wrong!2</h3>;
  }

  if (!isLoading && !isError && !materiamedica._id) {
    content = <h3>Data is empty!</h3>;
  }

  // main content
  if (!isLoading && !isError && materiamedica._id) {
    content = (
      <>
        <Box sx={{ marginBottom: "30px" }}>
          <Typography variant="h4">{materiamedica.name}</Typography>
          <div className="headerborder"></div>
        </Box>

        <Box
          sx={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              style={{
                color: "rgb(100,100,100)",
              }}
            >
              Epithet
            </Typography>
            <ul>
              <ItemList listName="Pinyin" value={materiamedica?.pinyin} />
              <ItemList listName="English" value={materiamedica?.english} />
              <ItemList listName="Japanese" value={materiamedica?.japanese} />
              <ItemList listName="Korean" value={materiamedica?.korean} />
              <ItemList
                listName="Vietnamese"
                value={materiamedica?.vietnamese}
              />
            </ul>
          </Box>
          <Box>
            <QRCode value={`/${cleanPath}`} size={110} />
          </Box>
        </Box>

        <Box>
          <TabList
            tabs={TABS.map((tab) => tab.name)}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {TABS.map(
            (tab) =>
              activeTab === tab.name && (
                <tab.component key={tab.name} {...tab.props} />
              )
          )}
        </Box>
      </>
    );
  }

  return (
    <Box className="card-item blog-card border-bottom-0">
      <Box className="card-content pl-0 pr-0 pb-0">{content}</Box>
    </Box>
  );
}

export default MateriaMedicaDetail;
