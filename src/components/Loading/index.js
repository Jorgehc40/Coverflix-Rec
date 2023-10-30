import { CircularProgress } from "@mui/material";
import { LoadingStyle } from "./styles";

const Loading = () => {
    return (
        <LoadingStyle>
            <CircularProgress color="secondary" />
        </LoadingStyle>    
    )
}

export default Loading;