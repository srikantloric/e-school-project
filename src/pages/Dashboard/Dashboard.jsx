import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LSPage from "../../components/Utils/LSPage";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../Dashboard/Dashboard.scss";
import PeopleIcon from "@mui/icons-material/People";
import CardDashboard from "../../components/Card/CardDashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PageContainer from "../../components/Utils/PageContainer";
import Footer from "../../components/Footer/Footer";

//image icon imports
import Employee from '../../assets/male-icon.svg'
import Client from '../../assets/client.svg'
import Projects from '../../assets/projects.svg'
import Payrole from '../../assets/payrole.svg'
import Reports from '../../assets/reports.svg'
import Events from '../../assets/events.svg'



Chart.register(CategoryScale);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Male",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.8)",
    },
    {
      label: "Female",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.8)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Attendance Chart",
    },
  },
};

function Dashboard() {
  return (
    <>
      <PageContainer>
          <Navbar />
          <LSPage>
            {/* <Breadcrumbs aria-label="breadcrumb" className="breadcum">
              <Link to="/login" className="underline-on-hover">
                <Typography className="nonactive-breadcum">Home</Typography>
              </Link>
              <Link to="/">
                <Typography className="active-breadcum">Dashboard</Typography>
              </Link>
            </Breadcrumbs> */}


          <Grid container  justifyContent="space-between" className="card-container">
          <CardDashboard
              color="#ECF2FF"
              textColor="#5D87FF"
                title="Employee"
                number="200"
                Icon={Employee}
              />
              <CardDashboard
              color="#FEF5E5"
              textColor="#F5BC00"
                title="Clients"
                number="200"
                Icon={Client}
              />
              <CardDashboard
              color="#E8F8FF"
              textColor="#49BFFF"
                title="Projects"
                number="5"
             
                Icon={Projects}
              />
                <CardDashboard
              color="#FDEEE8"
              textColor="#FA896B"
                  title="Events"
                  number="₹200"
                  footerTitle="Payment this month"
                  Icon={Events}
                />
              <CardDashboard
              color="#E6FFFA"
              textColor="#13DEB9"
                title="Payroll"
                number="₹200"
                footerTitle="Payment this month"
                Icon={Payrole}
              />
              <CardDashboard
              color="#EAF3FE"
              textColor="#539BFF"
                title="Reports"
                number="₹200"
                footerTitle="Payment this month"
                Icon={Reports}
              />
            </Grid>
        </LSPage>

        <Footer/>
        </PageContainer>
    </>
  );
}

export default Dashboard;
