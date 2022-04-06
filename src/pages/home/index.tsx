import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Header from "../../shared/components/Header";
import AppGridContainer from "@crema/core/AppGridContainer";
import AppInfoView from "@crema/core/AppInfoView";
import AppAnimate from "@crema/core/AppAnimate";
import AppCard from "@crema/core/AppCard";
import { useIntl } from "react-intl";
import BattlesTable from "./BattlesTable"

const data = [
  {
    id: 1,
    collection: "collection",
    start: <span style={{ color: "blue" }}>live</span>,
    end: "UTC 10:00",
    registered: 12,
  },
  {
    id: 1,
    collection: "collection",
    start: <span style={{ color: "blue" }}>live</span>,
    end: "UTC 10:00",
    registered: 12,
  },
  {
    id: 1,
    collection: "collection1",
    start: "UTC 08:00",
    end: "UTC 10:00",
    registered: 12,
  },
  {
    id: 1,
    collection: "collection ",
    start: "UTC 08:00",
    end: "UTC 10:00",
    registered: 12,
  },
  {
    id: 1,
    collection: "collection 1",
    start: "UTC 08:00",
    end: "UTC 10:00",
    registered: 12,
  },
];
const Home = () => {
  const { messages } = useIntl();
  return (
    <>
      <Grid item xs={12} md={12} height="100">
        <Header />
      </Grid>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <AppGridContainer mt={3}>
          <Grid item xs={12} md={12}>
            <AppCard
              sxStyle={{ height: 1, fontSize: 20 }}
              contentStyle={{ px: 0 }}
              title="Battles"
              font={22}
              action={messages["common.viewAll"]}
              actionUrl="/battles"
            >
              <BattlesTable battleData={data} />
            </AppCard>
          </Grid>

        </AppGridContainer>
      </AppAnimate>
    </>
  );
};

export default Home;
