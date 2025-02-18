import React from "react";
import { alpha } from "@mui/material/styles"; // Import alpha from styles
import Grid from "@mui/material/Grid"; // Import Grid as a default import
import Stack from "@mui/material/Stack"; // Import Stack as a default import
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
const SavedCardSkeleton = () => {
  return (
    <>
      <Box pl={5} pr={10} pt={3}>
        <Container maxWidth="xl">
          <Box>
            <Skeleton
              variant="rectangular"
              sx={{
                height: "26.66px",
                width: "15%",
                borderRadius: 0,
                "&.MuiSkeleton-root": {
                  backgroundColor: (theme) =>
                    alpha(theme.palette.grey[400], 0.4),
                  "::after": {
                    background: (theme) =>
                      `linear-gradient(90deg, transparent, ${alpha(
                        theme.palette.grey[900],
                        0.08
                      )}, transparent)`,
                  },
                },
              }}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Box mt={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "195.2px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Box mt={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "195.2px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Box mt={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "195.2px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Box mt={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "195.2px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Box mt={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "195.2px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <Box mt={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "195.2px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box pt={1} pl={4} pr={4}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        height: "48px",
                        borderRadius: 0,
                        "&.MuiSkeleton-root": {
                          backgroundColor: (theme) =>
                            alpha(theme.palette.grey[400], 0.4),
                          "::after": {
                            background: (theme) =>
                              `linear-gradient(90deg, transparent, ${alpha(
                                theme.palette.grey[900],
                                0.08
                              )}, transparent)`,
                          },
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SavedCardSkeleton;
