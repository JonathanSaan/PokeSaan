import { ContainerLoading } from "../styles/loading";
import { CircularProgress } from "react-cssfx-loading";

export const Loading = () => {
  return (
    <ContainerLoading>
      <CircularProgress
        color="#1D1F2B"
        height="4em"
        width="4em"
      />
    </ContainerLoading>
  );
};