import dotenv from "dotenv";
dotenv.config({ path: ".env" });


import { Redis } from "@upstash/redis";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { getEmbeddingsCollection, getVectorStore } from "./pages/api/astradb.js";
import { log } from "console";

async function generateEmbeddings() {
 // await Redis.fromEnv().flushdb();
  const vectorStore = await getVectorStore();
  //(await getEmbeddingsCollection()).deleteMany({});

  const loader = new TextLoader("./constants/constants.js");
  console.log({loader});
  

  const docs = (await loader.load())
    .map((doc) => {
      const pageContent = doc.pageContent
        .replace(/^export const /gm, "") // Remove export const statements
        .replace(/^\s*[\r]/gm, "") // Remove empty lines
        .trim();

      return {
        pageContent,
        
        
      };
    });

    console.log("Embeddings generating ............",{docs});
  await vectorStore.addDocuments(docs);
  
}

generateEmbeddings();
