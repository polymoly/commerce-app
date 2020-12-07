import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    width: 500,
    height: 500,
    boxShadow: '0px 0px 3px rgba(0,0,0,.2)'
  },
  media: {
    height: 300,
    objectFit: "contain",
    objectPosition: "center",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
