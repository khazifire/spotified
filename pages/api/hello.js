// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const GET = async (req,res)=>{
  res.status(200).json({msg: "this is a get method"})
}

export const POST = async (req,res)=>{
  res.status(200).json({msg: "this is a post method", reg:reg})
}
