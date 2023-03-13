import { type NextPage } from "next";
import Head from "next/head";

import CenteredContainer from "@/components/ui/CenteredContainer";
import Input from "@/components/ui/Input";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import { useRef } from "react";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Head>
        <title>My AI prompt generator</title>
        <meta name="description" content="AI App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenteredContainer className="flex-col gap-4">
        <Paragraph size="4xl" className="text-center">
          Tired of homeworks? <br /> Embrace the{" "}
          <span className="text-pink-300">power</span> of AI🧠
        </Paragraph>
        <CenteredContainer minHeight="parent" className="gap-2">
          <Input variant="neutral" size="md" ref={inputRef} />
          <Button
            type="submit"
            onClick={() => {
              if (!inputRef.current) return;

              console.log(inputRef.current.value);

              inputRef.current.value = "";
            }}
          />
        </CenteredContainer>
      </CenteredContainer>
    </>
  );
};

export default Home;
