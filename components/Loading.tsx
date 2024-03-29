import ContainerLoading from "../styles/loading";
import { CircularProgress } from "react-cssfx-loading";

const Loading = () => {
  return (
    <ContainerLoading>
      <CircularProgress color="#f3f3f3" height="4em" width="4em" />
    </ContainerLoading>
  );
};

export default Loading;