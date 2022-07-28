// middleware.ts
import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
import {getToken} from 'next/server'

// This function can be marked `async` if using `await` inside
// export async function middleware(reg) {
//   const token = await getToken({reg})
//     console.log("hello world")

//   const {pathName} = reg.nextUrl;

//   if(pathName.includes('/api/auth') || token){
//     return NextResponse.next()
//   }
//   if(!token && pathName !=='/signin')
//   return NextResponse.redirect(new URL('/signin', req.url))
// }