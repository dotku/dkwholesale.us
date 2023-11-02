import tesseract from "node-tesseract-ocr";
import url from "url";

export default async function runOCR(request, context) {
  console.log("request", request);
  const urlParts = url.parse(request.url);
  const urlParams = new URLSearchParams(urlParts.search);

  console.log('urlParams.get("url")', urlParams.get("url"));

  let rsp;
  try {
    rsp = await tesseract.recognize(urlParams.get("url"), config);
  } catch (error) {
    console.log(error.message);
    return new Response(error.message);
  }

  return new Response(rsp);
}

export const config = { path: "/ocr" };
