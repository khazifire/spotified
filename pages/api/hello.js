import {NextResponse} from "next/server";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const GET = async (req,res)=>{
  try{
    return NextResponse.json({msg: "this is a get method"}, {status:200})
  }catch(err){
    return NextResponse.json({msg: err}, {status:500})
  }
  
};

export const POST = async (req,res)=>{
  const {title, name} = await reg.json()
  try{
    return NextResponse.json({name: name, title: title}, {status:200})
  }catch(err){
    return NextResponse.json({msg: err}, {status:500})
  }
};
