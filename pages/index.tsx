import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
export default function Home({ v1 }) {
  return <ReactMarkdown>{v1}</ReactMarkdown>;
}
export async function getStaticProps() {
  const v2 = path.join(process.cwd(), "README.md");
  const v3 = fs.readFileSync(v2, "utf8");
  return { props: { v1: v3 } };
}