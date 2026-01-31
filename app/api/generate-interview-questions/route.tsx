import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";
import error from "next/error";

var imagekit = new ImageKit({
  publicKey:"your_public_api_key",
  privateKey:"your_private_api_key",
  urlEndpoint:"https://ik.imagekit.io/jliteelmg",
});
  

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file=formData.get('file') as File;

  const bytes=await file.arrayBuffer();
  const buffer=Buffer.from(bytes);

  try {
    const uploadPdf=await imagekit.upload({
      file:buffer,
      fileName:Date.now().toString()+".pdf",
      isPublished:true
    });

    return NextResponse.json(uploadPdf.url);
  } catch (e) {
   console.error('Upload error:',e);
   return NextResponse.json({error:e instanceof Error ? e.message : 'Unknown error'},{status:500});
  }
}
