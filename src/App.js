import React from "react";
import faker from "faker";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SimpleCard from "./components/SimpleCard";

function App() {
  
  const [data, setData] = React.useState(null);
  const subheader = faker.date.past().toString();

  const handleLoadData = () => {
    setData(
      Array.from({ length: 100 }).map(() => {
        return faker.lorem.sentence();
      })
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
    <Container maxWidth="sm">
      {data.map((_, index) => (
        <SimpleCard key={index} index={index} data={data} date={subheader}/>
      ))}
    </Container>
  );
}

export default App;
