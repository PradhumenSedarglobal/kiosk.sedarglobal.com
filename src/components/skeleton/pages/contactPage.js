// @mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { alpha } from "@mui/material/styles";
import WebLayoutSkeleton from "../layout";

// ----------------------------------------------------------------------

export default function SkeletonContact({ ...other }) {
  return (
    <WebLayoutSkeleton>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Skeleton
                variant="rectangular"
                sx={{
                  height: 250,
                  borderRadius: 1,
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
            </Grid>
            <Grid item lg={6}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 50,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={6}></Grid>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={6}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
                <Grid item lg={12}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: 70,
                      borderRadius: 1,
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </WebLayoutSkeleton>
  );
}
