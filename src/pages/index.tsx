import { type NextPage } from "next";
import Head from "next/head";

import CenteredContainer from "@/components/ui/CenteredContainer";
import Input from "@/components/ui/Input";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import { useRef } from "react";
import { api } from "@/utils/api";
import { PulseLoader } from "react-spinners";
import clsx from "clsx";

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {
    data: promptResponse,
    isLoading,
    isError,
    mutate,
  } = api.ai.generate.useMutation();

  return (
    <>
      <Head>
        <title>My AI prompt generator</title>
        <meta name="description" content="AI App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenteredContainer className="mb-2 flex-col gap-4">
        <Paragraph size="4xl" className="text-center">
          Just <span className="text-pink-300">play</span> with an AI🧠
          {/* TEST */}
        </Paragraph>
        <CenteredContainer minHeight="parent" className="gap-2">
          <Input variant="neutral" size="md" ref={inputRef} />
          <Button
            type="button"
            text="Generate"
            className={clsx({ "cursor-not-allowed": isLoading })}
            disabled={isLoading}
            onClick={() => {
              if (!inputRef.current || inputRef.current.value === "") return;

              mutate(
                { prompt: inputRef.current.value },
                {
                  onSettled: () => {
                    if (inputRef.current) inputRef.current.value = "";
                  },
                }
              );
            }}
          />
        </CenteredContainer>

        <CenteredContainer
          minHeight="parent"
          className="min-h-48 min-w-48 mt-8 inline-block h-48 w-[29.5rem]"
        >
          {isLoading && (
            <PulseLoader
              color="#f9a8d4"
              aria-label="Loading"
              className="text-center"
            />
          )}
          {isError && (
            <Paragraph size="md" className="text-center text-red-500">
              An error occurred. Please try again.
            </Paragraph>
          )}
          {promptResponse && (
            <Paragraph
              size="sm"
              className="w-full rounded-lg border-2 border-gray-500 bg-gray-700 p-4 text-center"
            >
              {promptResponse.content}
            </Paragraph>
          )}
        </CenteredContainer>
      </CenteredContainer>
    </>
  );
};

export default Home;
