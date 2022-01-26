import React from "react";
import faker from "faker";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SimpleCard from "./components/SimpleCard";

const useStyles = makeStyles({
  container: {
    position: "relative"
  }
});

const ListContainer = props => {
  const classes = useStyles();

  return <Container maxWidth="sm" className={classes.container} {...props} />;
};

function App() {
  
  const [data, setData] = React.useState(null);

  const handleLoadData = () => {
    const itemData = {}
    itemData.item = Array.from({ length: 100 }).map(() => {
      return faker.lorem.sentence();
    });
    itemData.date = faker.date.past().toString();

    setData(
      itemData
    );
  };

  if (!data) {
    return (
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleLoadData}
      >
        Load Data
      </Button>
    );
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          width={width}
          itemCount={data.item.length}
          itemSize={230}
          itemData={data}
          innerElementType={ListContainer}
        >
          {SimpleCard}
        </List>
      )}
    </AutoSizer>
  );
}

export default App;
