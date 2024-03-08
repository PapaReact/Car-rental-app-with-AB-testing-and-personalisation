import { cookies } from 'next/headers';
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = cookies();
  cookieStore.delete('__prepr_uid');

  // Your other logic here

  return new Response('Cookie deleted', { status: 200 });
}
