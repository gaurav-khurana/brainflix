import { createContext } from "react";
import videos from "../data/video-details.json";

export const allVideosContext = createContext(videos);
