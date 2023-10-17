import preset from "jss-preset-default";
import { create } from "jss";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
    },
  },
  container: {
    height: "100vh",
    width: "100vw",
  },
  nav_container: {
    height: "80px",
    [`@media (min-width: 752px)`]: {
      backgroundColor: "red",
    },
  },
  main_section: {
    display: "flex",
    height: "calc(100vh - 80px)",
  },

  side_container: {
    backgroundColor: "green",
    width: "240px",
  },
  main_container: {
    backgroundColor: "darkgray",
    width: "calc(100vw - 240px)",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <nav className={classes.nav_container}>nav</nav>
      <section className={classes.main_section}>
        <aside className={classes.side_container}>side</aside>
        <main className={classes.main_container}>test main</main>
      </section>
    </div>
  );
}
