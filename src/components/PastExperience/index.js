import "./PastExperience.css";
import { Box, Typography, styled, createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const HeaderText = styled(Typography)(() => ({
  fontFamily: "Azeret Mono",
  fontWeight: 700,
  fontSize: "24px",
  color: "white",
  whiteSpace: "nowrap",
}));

const BodyText = styled(Typography)(() => ({
  fontFamily: "Azeret Mono",
  fontSize: "16px",
  color: "white",
}));

const ExperienceContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down(950)]: {
    flexDirection: "column",
  },
}));

const PastExperience = () => {
  return (
    <Box>
      <div className="experience-header">Past Experience</div>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "63px",
        }}
      >
        <ExperienceContainer sx={{ marginBottom: "60px", marginTop: "16px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              [theme.breakpoints.down(950)]: {
                width: "100%",
                marginBottom: "40px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.down(950)]: {
                  flexDirection: "row",
                },
              }}
            >
              <HeaderText>Frontend Engineer</HeaderText>
              <HeaderText
                sx={{
                  [theme.breakpoints.down(950)]: {
                    marginLeft: "16px",
                  },
                }}
              >
                @ Mathison
              </HeaderText>
            </Box>
            <BodyText sx={{ whitespace: "nowrap", marginTop: "24px" }}>
              February 2022 - December 2022
            </BodyText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              [theme.breakpoints.down(950)]: {
                width: "100%",
              },
            }}
          >
            <BodyText
              sx={{ display: "flex", marginBottom: "40px", fontSize: "20px" }}
            >
              <BodyText
                sx={{
                  marginRight: "10px",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                Technologies:
              </BodyText>
              TypeScript, JavaScript, React, Ruby, Rails
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Utilized React, Apollo GraphQL, and Material UI to build
              Mathison’s Equity Index assessment and DEI score analysis
              dashboard to assist clients in identifying their strengths and
              opportunities for improvement.
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Created surveys with Alchemer’s 3rd party API, saved survey
              responses in PostgreSQL, and sent data to a React application with
              Ruby on Rails’ scripts and GraphQL endpoints.
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Researched and integrated React Spring to animate graph
              components and enhance the UX for users analyzing their Equity
              Index assessment scores.
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Integrated Swiftype with DatoCMS, React, and Zapier to enable
              search functionality and improve the navigation UX of Mathison’s
              Knowledge Center application.
            </BodyText>
          </Box>
        </ExperienceContainer>
        <ExperienceContainer sx={{ marginBottom: "60px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              [theme.breakpoints.down(950)]: {
                width: "100%",
                marginBottom: "40px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.down(950)]: {
                  flexDirection: "row",
                },
              }}
            >
              <HeaderText>React Developer</HeaderText>
              <HeaderText
                sx={{
                  [theme.breakpoints.down(950)]: {
                    marginLeft: "16px",
                  },
                }}
              >
                @ Krool Toys
              </HeaderText>
            </Box>
            <BodyText>{"(Freelance)"}</BodyText>
            <BodyText sx={{ whitespace: "nowrap", marginTop: "24px" }}>
              November 2022 - December 2022
            </BodyText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              [theme.breakpoints.down(950)]: {
                width: "100%",
              },
            }}
          >
            <BodyText
              sx={{ display: "flex", marginBottom: "40px", fontSize: "20px" }}
            >
              <BodyText
                sx={{
                  marginRight: "10px",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                Technologies:
              </BodyText>
              JavaScript, React, Hygraph, AOS
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Designed and built Krool Toys’ portfolio website using React and
              JavaScript.
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Integrated Hygraph’s content management system to give the
              client the ability to easily update, remove, or add new content to
              the website.
            </BodyText>
            <BodyText>
              - Implemented AOS React library to animate components and trigger
              animations by scrolling.
            </BodyText>
          </Box>
        </ExperienceContainer>
        <ExperienceContainer sx={{ marginBottom: "16px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              [theme.breakpoints.down(950)]: {
                width: "100%",
                marginBottom: "40px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.down(950)]: {
                  flexDirection: "row",
                },
              }}
            >
              <HeaderText>Frontend Developer</HeaderText>
              <HeaderText
                sx={{
                  [theme.breakpoints.down(950)]: {
                    marginLeft: "16px",
                  },
                }}
              >
                @ Reclaim Foundation
              </HeaderText>
            </Box>
            <BodyText>{"(Volunteer)"}</BodyText>
            <BodyText sx={{ whitespace: "nowrap", marginTop: "24px" }}>
              October 2021 - February 2022
            </BodyText>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              [theme.breakpoints.down(950)]: {
                width: "100%",
              },
            }}
          >
            <BodyText
              sx={{ display: "flex", marginBottom: "40px", fontSize: "20px" }}
            >
              <BodyText
                sx={{
                  marginRight: "10px",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                Technologies:
              </BodyText>
              JavaScript, React, Redux
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Designed and implemented an admin management page using React,
              JavaScript, and CSS to manage users, comments, communities, and
              posts.
            </BodyText>
            <BodyText sx={{ marginBottom: "16px" }}>
              - Queried paginated lists by utilizing limit and after_id params
              in API requests to Flask / MongoDB backend.
            </BodyText>
            <BodyText>
              - Collaborated with the team in coordination with an agile system
              to receive work assignments, report progress, and launch completed
              features of the web application within a sprint.
            </BodyText>
          </Box>
        </ExperienceContainer>
      </Box>
    </Box>
  );
};

export default PastExperience;
