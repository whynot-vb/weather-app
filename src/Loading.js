import Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <div style={{ textAlign: "center" }}>
      <Loader
        type="Circles"
        color="#33EDFF"
        height={500}
        width={500} //3 secs
      />
    </div>
  );
}
