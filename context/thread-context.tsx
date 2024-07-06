import * as React from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/generate-data";

export const ThreadsContext = React.createContext<Thread[]>([]);

export const ThreadsContextProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = React.useState<Thread[]>([]);
  React.useEffect(() => {
    setThreads(generateThreads());
  }, []);
  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
};
