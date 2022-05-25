import Alert from "@mui/material/Alert";

const Error = ({ message }: { message: string | undefined }) => {
  return (
    <Alert severity="error" sx={{ width: "200px" }}>
      {message}
    </Alert>
  );
};

export default Error;
