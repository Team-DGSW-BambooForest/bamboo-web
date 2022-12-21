import { Search } from "ui";

export default function Web() {
  return (
    <div>
      <Search
        suggest={(str: string) => console.log("suggest" + str)}
        request={(str: string) => console.log("request" + str)}
      />
    </div>
  );
}
